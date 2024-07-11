<script>
import SideBar from '@/views/SideBar.vue'
import NavBar from '@/views/NavBar.vue'
// import Footer from '@/views/Footer.vue'
import { store } from '@/store';

export default {
  name: 'App',
  components: {
    SideBar,
    NavBar
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  }
};

</script>

<template>
  <NavBar @toggle-sidebar="toggleSidebar"></NavBar>
  <SideBar :isSidebarOpen="isSidebarOpen" @close-sidebar="isSidebarOpen = false"></SideBar>
  <div>.</div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
