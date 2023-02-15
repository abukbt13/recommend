import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "@/views/Register.vue";
import Company from "@/views/Company.vue";
import Hosting from  "@/views/HostingDetails.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/company',
    name: 'company',
    component: Company
  },
  {
    path: '/hostingdetails',
    name: 'hostingdetails',
    component: Hosting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
