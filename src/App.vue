
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
  <MainPage></MainPage>
  <TopBar @toggle-sidebar="toggleSidebar" />
  <SideBar :isSidebarOpen="isSidebarOpen" />
</template>

<style scoped>
body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 0;
  
}
</style>
