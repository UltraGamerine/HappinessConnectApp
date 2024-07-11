// src/store.js
import { reactive } from 'vue';

export const store = reactive({
  isAuthenticated: true,
  userRole: 'admin', // 'admin', 'teacher', or 'user'
});

export function setUserRole(role) {
  store.isAuthenticated = true;
  store.userRole = role;
}

export function clearUserRole() {
  store.isAuthenticated = false;
  store.userRole = '';
}
