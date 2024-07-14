<script>
import { onMounted } from 'vue';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { store, clearUserRole, setUserRole } from '@/store';
import SideBar from '@/views/SideBar.vue';
import NavBar from '@/views/NavBar.vue';

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
  methods: {
    async checkUserRole(uid) {
      const adminQuery = query(collection(db, "admins"), where("uid", "==", uid));
      const adminSnapshot = await getDocs(adminQuery);
      if (!adminSnapshot.empty) return 'admin';

      const teacherQuery = query(collection(db, "teachers"), where("uid", "==", uid));
      const teacherSnapshot = await getDocs(teacherQuery);
      if (!teacherSnapshot.empty) return 'teacher';

      const userQuery = query(collection(db, "users"), where("uid", "==", uid));
      const userSnapshot = await getDocs(userQuery);
      if (!userSnapshot.empty) return 'user';

      return '';
    },
  },
  onMounted() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const role = await this.checkUserRole(user.uid);
        if (role) {
          setUserRole(role);
        } else {
          clearUserRole();
        }
      } else {
        clearUserRole();
      }
    });
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
