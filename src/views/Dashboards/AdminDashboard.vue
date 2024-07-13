<script setup>
import { ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { store } from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter();

const teachers = ref([]);
const users = ref([]);
const admins = ref([]);
const courses = ref([]);
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

const fetchAdmins = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const querySnapshot = await getDocs(collection(db, 'admins'));
    admins.value = querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    errorMessage.value = 'Failed to fetch admins';
  } finally {
    isLoading.value = false;
  }
};

const fetchCourses = async () => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const querySnapshot = await getDocs(collection(db, 'courses'));
    courses.value = querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    errorMessage.value = 'Failed to fetch courses';
  } finally {
    isLoading.value = false;
  }
};

// Redirect if not an admin
if (store.userRole !== 'admin') {
  router.push('/');
}
</script>

<template>
  <div style="margin-top: 100px;"></div>
  <h2>Admin Dashboard</h2>
  <div v-if="store.userRole === 'admin'" class="admin-dashboard">
    <div class="sidebar">
      <button @click="fetchTeachers" :disabled="isLoading" class="button">Show Teachers</button>
      <button @click="fetchUsers" :disabled="isLoading" class="button">Show Users</button>
      <button @click="fetchAdmins" :disabled="isLoading" class="button">Show Admins</button>
      <button @click="fetchCourses" :disabled="isLoading" class="button">Show Courses</button>
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
      
      <div v-if="admins.length" class="list">
        <h2>Admins</h2>
        <ul>
          <li v-for="admin in admins" :key="admin.uid">{{ admin.name }} - {{ admin.email }}</li>
        </ul>
      </div>
      
      <div v-if="courses.length" class="list">
        <h2>Courses</h2>
        <ul>
          <li v-for="course in courses" :key="course.id">{{ course.courseName }} - {{ course.courseDuration }}</li>
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
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
}

.sidebar {
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #ff9f50;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.button {
  background-color: #fff;
  color: #ff9f50;
  border: 2px solid #ff9f50;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
}

.button:hover {
  background-color: #ff9f50;
  color: #fff;
}

.content {
  flex-grow: 1;
  margin-left: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.list {
  margin-bottom: 20px;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #ff9f50;
}

.error-message {
  color: red;
  text-align: center;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .admin-dashboard {
    flex-direction: column;
  }

  .sidebar {
    width: 90%;
    margin-bottom: 20px;
  }

  .content {
    margin-left: 0;
  }
}
</style>

<!-- <script setup>
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
  router.push('/');
}
</script>

<template>
  <div style="margin-top: 100px;"></div>
  <h2>Admin Dashboard</h2>
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
</style> -->
