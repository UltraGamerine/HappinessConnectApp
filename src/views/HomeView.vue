
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div style="margin-top: 100px;"></div>
  <div class="home">
    <img alt="Art Of Living Logo" style="width: 300px;" src="../assets/AOLlogo.jpg">
    <HelloWorld msg="Welcome to Happiness Connect"/>
  </div>
</template>