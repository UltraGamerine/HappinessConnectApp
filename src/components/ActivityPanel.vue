<script setup>
const props = defineProps({
  activity: Object
});
</script>

<template>
  <div class="activity-panel">
    <button @click="$emit('close')" class="close-button">X</button>
    <h2>Activity Details</h2>
    <p><strong>Day:</strong> {{ activity.day }}</p>
    <p><strong>Name:</strong> {{ activity.name }}</p>
    <p><strong>Description:</strong> {{ activity.description }}</p>
    <p><strong>Activity ID:</strong> {{ activity.activityID }}</p>
    <p><strong>Course ID:</strong> {{ activity.courseID }}</p>
  </div>
</template>

<style scoped>
.activity-panel {
  display: flex;
  flex-direction: column;
  background-color: #e7f3ff;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 0px;
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

@media (max-width: 768px) {
  .activity-panel {
    width: 80%;
    margin: 20px auto;
  }
}
</style>
