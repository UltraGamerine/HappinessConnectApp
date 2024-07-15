<script setup>
import { ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { store } from '@/store';
import { useRouter } from 'vue-router';

import CoursePanel from '@/components/CoursePanel.vue';
import AddCoursePanel from '@/components/AddCoursePanel.vue';

const router = useRouter();

const teachers = ref([]);
const users = ref([]);
const admins = ref([]);
const courses = ref([]);
const selectedCourse = ref(null);
const errorMessage = ref('');
const isLoading = ref(false);
const showCoursePanel = ref(false);
const showAddCoursePanel = ref(false);

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
    showCoursePanel.value = true;
  } catch (error) {
    errorMessage.value = 'Failed to fetch courses';
  } finally {
    isLoading.value = false;
  }
};

const selectCourse = async (course) => {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    await fetchTeachers(); // Ensure teachers are fetched when a course is selected
    selectedCourse.value = course;
    showCoursePanel.value = true;
  } catch (error) {
    errorMessage.value = 'Failed to select course';
  } finally {
    isLoading.value = false;
  }
};

const closeCoursePanel = () => {
  showCoursePanel.value = false;
  selectedCourse.value = null;
};

const openAddCoursePanel = () => {
  showAddCoursePanel.value = true;
};

const closeAddCoursePanel = () => {
  showAddCoursePanel.value = false;
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
      <button @click="openAddCoursePanel" :disabled="isLoading" class="addButton">Add Course</button>
    </div>
    <div class="content">
      <div v-if="isLoading" class="loading">Loading...</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      
      <div v-if="teachers.length" class="list">
        <h2>Teachers</h2>
        <ul>
          <li v-for="teacher in teachers" :key="teacher.uid">{{ teacher.name }} - {{ teacher.email }} - {{ teacher.teacherAccess }}</li>
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
      
      <div v-if="courses.length" class="courselist">
        <h2>Courses</h2>
        <ul>
          <li v-for="course in courses" :key="course.courseID" @click="selectCourse(course)">{{ course.courseName }} - {{ course.duration }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Access denied. Please log in as an admin.</p>
  </div>

  <CoursePanel 
    v-if="showCoursePanel && selectedCourse" 
    :course="selectedCourse"
    :teachers="teachers"
    @close="closeCoursePanel"
  />
  <div v-if="showAddCoursePanel" class="add-course-panel-overlay">
  <AddCoursePanel
    v-if="showAddCoursePanel"
    @close="closeAddCoursePanel"
  />
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

.addButton{
  background-color: #fff;
  color: #ff9f50;
  border: 8px solid #d3771b;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
}
.addButton:hover {
  background-color: #ff9f50;
  color: #fff;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
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

.courselist li {
  background-color: #e28400;
  color: #fff;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
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
    width: 90%;
  }
}

.add-course-panel-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.649);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
