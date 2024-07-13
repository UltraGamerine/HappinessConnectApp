import { createRouter, createWebHistory } from 'vue-router'
import { store } from '@/store';

import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue'

import AdminDashboard from '@/views/Dashboards/AdminDashboard.vue'
import TeacherDashboard from '@/views/Dashboards/TeacherDashboard.vue'
import UserDashboard from '@/views/Dashboards/UserDashboard.vue'

import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/admin',
    name: 'admin',
    component: AdminDashboard, 
    meta: { requiresAuth: false }
  },
  {
    path:'/teacher',
    name: 'teacher',
    component: TeacherDashboard

  },
  {
    path:'/user',
    name: 'user',
    component: UserDashboard
  },
  //other 404
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Navigation guard to check for authenticated access
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = store.isAuthenticated;
  const userRole = store.userRole;

  if (requiresAuth && (!isAuthenticated || userRole !== 'admin')) {
    next('/');
  } else {
    next();
  }
});


export default router
