<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  course: Object,
  teachers: Array
});

const courseTeachers = ref([]);

watch(() => props.course, (newCourse) => {
  if (newCourse && props.teachers) {
    courseTeachers.value = props.teachers.filter(teacher => newCourse.teacherIDs.includes(teacher.uid));
  }
});
</script>

<template>
  <div class="course-panel">
    <button @click="$emit('close')" class="close-button">X</button>
    <h2>Course Details</h2>
    <p><strong>Course Name:</strong> {{ course.courseName }}</p>
    <p><strong>Duration:</strong> {{ course.duration }}</p>
    <p><strong>Timing:</strong> {{ course.timing }}</p>
    
    <h3>Teachers</h3>
    <ul>
      <li v-for="teacher in courseTeachers" :key="teacher.uid">{{ teacher.name }} - {{ teacher.email }}</li>
    </ul>
  </div>
</template>



<style scoped>
.course-panel {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
}

.close-button {
  align-self: flex-end;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
}

.course-details {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

.container {
    display: flex;
    margin: 20px;
}

.sidebar {
    flex: 1;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s ease-out;
}

.sidebar ul li:hover {
    font-size: 20px;
    transition: font-size 0.3s ease-out;
}

.sidebar ul li:active {
    border: 2px solid #000;
    border-radius: 10px;
    transform: translateY(4px);
}



.main-content {
    flex: 3;
    margin-left: 20px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.buttons {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
}

.buttons button {
    background-color: #ffc642;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease; 
    
}

.buttons button:hover {
    transform: scale(1.1); 
}

.buttons button:active {
    background-color: darkorange;
    transform: translateY(4px);
}

.table-container {
    border: 2px solid #000;
    border-radius: 10px;
    overflow: hidden;
}

table {
    width: 100%;
    border-collapse: collapse;
}

td {
    border: 1px solid #000;
    height: 50px;
    text-align: center;
}


@media (max-width: 768px) {
  .container {
    flex-direction: column;
    margin-left: 10px;
  }

  .sidebar {
    width: 90%;
    margin-bottom: 20px;
  }

  .main-content {
    width: 97%;
    margin-left: 0px;
    padding: 10px;
  }
}

</style>