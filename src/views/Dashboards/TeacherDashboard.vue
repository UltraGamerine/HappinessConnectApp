<script>
import CoursePanel from '@/components/CoursePanel.vue'

export default {
  name: 'TeacherDashboard',
  components: {
    CoursePanel
  }
}
</script>

<template>
    <div class="container" style="margin-top: 100px;">
      <h1>Teacher Dashboard</h1>
    </div>
    <CoursePanel></CoursePanel>
</template>