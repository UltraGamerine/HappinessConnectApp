<script setup>
import { ref } from 'vue';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';

const props = defineProps({
  course: Object
});

const emit = defineEmits(['close']);

const activityName = ref('');
const activityDescription = ref('');
const activityDay = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

const addActivity = async () => {
  if (!activityName.value || !activityDescription.value || !activityDay.value) {
    errorMessage.value = 'All fields are required';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';

  try {
    const activitiesCollection = collection(db, 'activities');
    const q = query(activitiesCollection, where('courseID', '==', props.course.courseID));
    const querySnapshot = await getDocs(q);

    const activityIDs = querySnapshot.docs.map(doc => doc.data().activityID);
    let maxID = 0;

    activityIDs.forEach(id => {
      const idParts = id.split('-');
      const num = parseInt(idParts[1], 10);
      if (num > maxID) {
        maxID = num;
      }
    });

    const newActivityID = `${props.course.courseID}-${String(maxID + 1).padStart(2, '0')}`;

    await addDoc(activitiesCollection, {
      courseID: props.course.courseID,
      name: activityName.value,
      description: activityDescription.value,
      day: activityDay.value,
      activityID: newActivityID,
      createdAt: new Date()
    });

    emit('close');
  } catch (error) {
    errorMessage.value = 'Failed to create activity';
  } finally {
    isLoading.value = false;
  }
};

</script>

<template>
  <div class="add-activity-panel">
    <button @click="$emit('close')" class="close-button">X</button>
    <h2>Create New Activity</h2>
    
    <div class="form-group">
      <label for="activityName">Activity Name</label>
      <input id="activityName" v-model="activityName" type="text" />
    </div>
    
    <div class="form-group">
      <label for="activityDescription">Description</label>
      <textarea id="activityDescription" v-model="activityDescription"></textarea>
    </div>
    
    <div class="form-group">
      <label for="activityDay">Day</label>
      <input id="activityDay" v-model="activityDay" type="text" />
    </div>
    
    <button @click="addActivity" :disabled="isLoading">Create</button>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<style scoped>
.add-activity-panel {
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.close-button {
  align-self: flex-end;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 0, 0);
  font-weight: 900;
  border: 3px solid red;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input, .form-group textarea {
  width: 90%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #ff9f50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
