import { reactive } from 'vue';

export const store = reactive({
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  userRole: localStorage.getItem('userRole') || '',
  isSidebarOpen: false,
});

export function setUserRole(role) {
  store.isAuthenticated = true;
  store.userRole = role;
  localStorage.setItem('isAuthenticated', 'true');
  localStorage.setItem('userRole', role);
}

export function clearUserRole() {
  store.isAuthenticated = false;
  store.userRole = '';
  store.isSidebarOpen = false;
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('userRole');
}

export function toggleSidebar() {
  store.isSidebarOpen = !store.isSidebarOpen;
}

export function closeSidebar() {
  store.isSidebarOpen = false;
}
