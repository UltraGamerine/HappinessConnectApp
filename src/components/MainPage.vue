<script setup>
import SignUp from './SignUp.vue';
import Login from './Login.vue';


//Routing

</script>


<template>
  <div class="container">
    <SignUp></SignUp>
    <!-- <Login></Login> -->
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
  /* justify-content: center;
  align-items: center; */
  
  position:absolute;
  left: 0;
  border-radius: 0.5rem;

  width:98%;
  height: 100%;
  margin: 115px 1% 10px 1%;
  padding: 1rem 0rem;
}
</style>

