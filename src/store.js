// src/store.js
import { reactive } from 'vue';

export const store = reactive({
  // isAuthenticated: true,
  // userRole: 'admin',
  
  isAuthenticated: false,
  userRole: '',
  
  isSidebarOpen: false, // Add this line
});

export function setUserRole(role) {
  store.isAuthenticated = true;
  store.userRole = role;
}

export function clearUserRole() {
  store.isAuthenticated = false;
  store.userRole = '';
  store.isSidebarOpen = false; // Add this line
}

export function toggleSidebar() {
  store.isSidebarOpen = !store.isSidebarOpen;
}

export function closeSidebar() {
  store.isSidebarOpen = false;
}
