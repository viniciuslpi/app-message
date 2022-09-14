import { createRouter, createWebHashHistory } from 'vue-router'

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: '/',
    name: 'loginRedirect',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;