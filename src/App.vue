
<script>
import TopBar from './components/TopBar.vue';
import SideBar from './components/SideBar.vue';
import MainPage from './components/MainPage.vue';

export default {
  components: {
    TopBar,
    SideBar,
    MainPage,
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
  },
};
</script>

<template>
  <div>
    
  </div>
  <TopBar @toggle-sidebar="toggleSidebar" />
  <SideBar :isSidebarOpen="isSidebarOpen" />
  <MainPage></MainPage>

</template>

<style scoped>

</style>
