<script setup>
import Page1 from './Page1.vue';
// import { ref } from 'vue'
// const count = ref(0)
</script>

<template>
  <div class="container">
    <h2>Hello</h2>
    <p>Today</p>
    <Page1></Page1>
  </div>
</template>

<style scoped>
.container {
  
  /* background-color:rgb(255, 142, 86); */
  background-color:wheat;
  color:brown;
  font-family: 'Lucida Sans';
  font-size: 24px;

  display: flex;
  flex-direction: column;
  
  position:absolute;
  right: 0;
  border-radius: 0.5rem;

  width:90.8%;
  height: 100%;
  margin: 7.5rem 1.5rem 3rem 1.5rem;
  padding: 4rem;
}
</style>

