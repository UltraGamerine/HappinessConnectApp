<script>
import SideBar from '@/views/SideBar.vue';
import NavBar from '@/views/NavBar.vue';
import { store } from '@/store';

export default {
  name: 'App',
  components: {
    SideBar,
    NavBar,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <NavBar @toggle-sidebar="store.toggleSidebar" />
  <SideBar :isSidebarOpen="store.isSidebarOpen" @close-sidebar="store.closeSidebar" />
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
