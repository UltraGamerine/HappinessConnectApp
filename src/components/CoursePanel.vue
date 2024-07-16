<script setup>
import { ref, watch } from 'vue';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';
import AddActivityPanel from './AddActivityPanel.vue';

const props = defineProps({
  course: Object,
  teachers: Array
});

const emit = defineEmits(['close', 'select-activity']);

const courseTeachers = ref([]);
const activities = ref([]);
const selectedActivity = ref(null);
const showAddActivityPanel = ref(false);

const fetchActivities = async () => {
  if (props.course && props.course.courseID) { // Add this check
    const q = query(collection(db, 'activities'), where('courseID', '==', props.course.courseID));
    const querySnapshot = await getDocs(q);
    activities.value = querySnapshot.docs.map(doc => doc.data());
  } else {
    activities.value = []; // Clear activities if courseID is undefined
  }
};

watch(() => props.course, (newCourse) => {
  if (newCourse && props.teachers) {
    courseTeachers.value = props.teachers.filter(teacher => newCourse.teacherIDs.includes(teacher.uid));
    fetchActivities();
  }
});

const selectActivity = (activity) => {
  selectedActivity.value = activity;
  emit('select-activity', activity);
};

const openAddActivityPanel = () => {
  showAddActivityPanel.value = true;
};

const closeAddActivityPanel = () => {
  showAddActivityPanel.value = false;
};

</script>

<template>
  <div class="course-panel">
    <button @click="$emit('close')" class="close-button">X</button>
    <button @click="openAddActivityPanel" class="create-button">Create Activity</button>
    <h2>Course Details</h2>
    <p><strong>Course Name:</strong> {{ course.courseName }}</p>
    <p><strong>Duration:</strong> {{ course.duration }}</p>
    <p><strong>Timing:</strong> {{ course.timing }}</p>
    
    <h3>Teachers</h3>
    <ul>
      <li v-for="teacher in courseTeachers" :key="teacher.uid">{{ teacher.name }} - {{ teacher.email }}</li>
      <li v-if="courseTeachers.length === 0">No Teachers Found</li> <!-- Display message if no teachers -->
    </ul>
    
    <h3>Activities</h3>
    <ul class="activityList">
      <li v-for="activity in activities" :key="activity.activityID" @click="selectActivity(activity)">
        Day {{ activity.day }} : {{ activity.name }}
      </li>
      <li v-if="activities.length === 0">No activities found for this course.</li> <!-- Display message if no activities -->
    </ul>
    <div v-if="showAddActivityPanel" class="add-activity-panel-overlay">
    <AddActivityPanel v-if="showAddActivityPanel" @close="closeAddActivityPanel" :course="course" />
  </div>
  </div>
</template>


<style scoped>
.course-panel {
  display: flex;
  flex-direction: column;
  background-color: #ffe7cc;
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

.create-button {
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 140, 0);
  font-weight: 900;
  border: 5px solid rgb(255, 140, 0);
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-top: -35px;
}

ul {
  padding-left: 0;
  list-style-position: inside;
  list-style-type: circle;
}

.course-details {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

.activityList{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.activityList li{
  width: fit-content;
  background-color: #e48500;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
}
.activityList{
  list-style-type:none;

}

.add-activity-panel-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

@media (max-width: 768px) {
  .course-panel {
    width: 90%;
    margin: 20px auto;
  }
}
</style>
