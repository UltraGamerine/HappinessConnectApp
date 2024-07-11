<script setup>
import { ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { store } from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter();

const teachers = ref([]);
const users = ref([]);
const errorMessage = ref('');
const isLoading = ref(false);

const fetchTeachers = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const querySnapshot = await getDocs(collection(db, 'teachers'));
    teachers.value = querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    errorMessage.value = 'Failed to fetch teachers';
  } finally {
    isLoading.value = false;
  }
};

const fetchUsers = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    users.value = querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    errorMessage.value = 'Failed to fetch users';
  } finally {
    isLoading.value = false;
  }
};

// Redirect if not an admin
if (store.userRole !== 'admin') {
  router.push('/login');
}
</script>

<template>
  <div style="margin-top: 100px;"></div>
  <div v-if="store.userRole === 'admin'" class="admin-dashboard">
    <div class="sidebar">
      <button @click="fetchTeachers" :disabled="isLoading" class="button">Show Teachers</button>
      <button @click="fetchUsers" :disabled="isLoading" class="button">Show Users</button>
    </div>
    <div class="content">
      <div v-if="isLoading" class="loading">Loading...</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-if="teachers.length" class="list">
        <h2>Teachers</h2>
        <ul>
          <li v-for="teacher in teachers" :key="teacher.uid">{{ teacher.name }} - {{ teacher.email }}</li>
        </ul>
      </div>
      <div v-if="users.length" class="list">
        <h2>Users</h2>
        <ul>
          <li v-for="user in users" :key="user.uid">{{ user.name }} - {{ user.email }} - {{ user.courseId }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Access denied. Please log in as an admin.</p>
  </div>
</template>

<style scoped>
.admin-dashboard {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  color: #333;
  padding: 20px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 10px 10px 2px 10px;
  background-color: #ff9346; /* Orange */
  border-radius: 15px;
}

.content {
  flex: 1;
  /* padding: 20px 20px 10px 20px; */
  background-color: #fff;
}

.button {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  color: #ffa500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.button:hover {
  background-color: #ff6600;
  color: #fff;
}

.loading {
  font-size: 18px;
  color: #ffa500;
}

.error-message {
  color: red;
}

.list {
  margin-top: 20px;
}

.list h2 {
  color: #ffa500;
}

.list ul{
  /* list-style-type: none; */
  text-align: left;
  font-weight: 500;
}

@media (max-width: 768px) {
  .admin-dashboard {
    flex-direction: column;
  }

  .sidebar {
    width: 90%;
    padding: 20px 25px 10px 25px;
    margin-left: -10px;
  }

  .content {
    width: 100%;
    /* padding: 20px; */
    margin: 0;
  }

  .button {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
