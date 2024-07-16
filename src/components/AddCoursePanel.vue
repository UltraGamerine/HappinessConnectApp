<script setup>
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';

const courseName = ref('');
const duration = ref('');
const timing = ref('');
const teacherIDs = ref(['']); // Initialize with an empty string to add more dynamically
const errorMessage = ref('');
const successMessage = ref('');

const addTeacherID = () => {
  teacherIDs.value.push('');
};

const removeTeacherID = (index) => {
  teacherIDs.value.splice(index, 1);
};

const clearForm = () => {
  courseName.value = '';
  duration.value = '';
  timing.value = '';
  teacherIDs.value = [''];
};

const submitCourse = async () => {
  if (!courseName.value || !duration.value || !timing.value) {
    errorMessage.value = 'Please fill out all required fields.';
    return;
  }

  try {
    const newCourse = {
      courseName: courseName.value,
      duration: duration.value,
      timing: timing.value,
      teacherIDs: teacherIDs.value.filter(id => id), // Remove empty strings
    };

    await addDoc(collection(db, 'courses'), newCourse);
    successMessage.value = 'Course added successfully!';
    clearForm();
  } catch (error) {
    errorMessage.value = 'Failed to add course.';
    console.error('Error adding course:', error);
  }
};
</script>

<template>
  <div class="add-course-panel">
    <button @click="$emit('close')" class="close-button">X</button>
    <h2>Create Course</h2>
    <div class="form-group">
      <label for="courseName">Course Name</label>
      <input type="text" v-model="courseName" id="courseName" />
    </div>
    <div class="form-group">
      <label for="duration">Dates(from/to) & Year</label>
      <input type="text" v-model="duration" id="duration" />
    </div>
    <div class="form-group">
      <label for="timing">Timings</label>
      <input type="text" v-model="timing" id="timing" />
    </div>
    <div class="form-group">
      <label for="teacherIDs">Teacher IDs</label>
      <div v-for="(id, index) in teacherIDs" :key="index" class="teacher-id-group">
        <input type="text" v-model="teacherIDs[index]" />
        <button @click="removeTeacherID(index)" class="removebtn" v-if="teacherIDs.length > 1">-</button>
      </div>
      <button @click="addTeacherID" class="addteachbtn">Add Another Teacher</button>
    </div>
    <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
    <div class="success-message" v-if="successMessage">{{ successMessage }}</div>
    <button @click="submitCourse" class="submitbtn">Submit</button>
  </div>
</template>

<style scoped>


input{
  width: 200px;
  height: 2rem;
  font-size: 16px;
  border-radius: 4px;
  border: 0px solid rgb(0, 0, 0);
  padding: 0.5rem 0% 0.5rem 4%;
  margin: 10px 5px 10px 5px;
  background-color: #e3e3e3;
}

textarea:focus, input:focus{
    outline: none;
}

.add-course-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px 10px;
  /* border: 1px solid #ccc; */
  border-radius: 20px;
  margin: 10px 0px;
}

.close-button {
  align-self: flex-end;
  background-color: white;
  color: rgb(255, 0, 0);
  font-weight: 900;
  border: 3px solid red;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 10px;
}

.form-group {
  margin-bottom: 10px;
}

.teacher-id-group {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 0;
  margin-left: 30px;
  width: 250px;
}

.error-message {
  color: red;
}

.success-message {
  color: green;
}

.removebtn{
  color:white;
  background-color:#ff2600;
  border-radius:5px;
  border-style: none;
  width: 25px;
  height: 25px;
  font-size: 16px;
  padding: 2px;
  margin-left: 8px; 
}

.addteachbtn{
  color:orange;
  background-color:#ffffff00;
  border-radius:5px;
  border: 4px solid orange;
  width: 200px;
  height: 5=40px;
  font-size: 16px;
  padding: 5px 2px;
  cursor: pointer;
  /* margin-left: 8px; */
}

.submitbtn{
  color:white;
  background-color:#ff8e15;
  border-radius:5px;
  border-style: none;
  width: 150px;
  height: 50px;
  font-size: 16px;
  padding: 2px;
  margin-top: 10px
  /* margin-left: 30%; */
}

</style>
