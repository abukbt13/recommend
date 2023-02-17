import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "@/views/Register.vue";
import Company from "@/views/Company.vue";
import Hosting from  "@/views/HostingDetails.vue"
import Login from "@/views/Login.vue"
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
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      needsAuth: false
    }
  },
  {
    path: '/company',
    name: 'company',
    component: Company,
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/hostingdetails',
    name: 'hostingdetails',
    component: Hosting,
    meta: {
      needsAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) =>{
  if(to.meta.needsAuth){ // Check if the destination route has the needsAuth meta field
    next('/login'); // Redirect to the login route if needsAuth is true
  }
  else{
    next() // Proceed to the destination route if needsAuth is false
  }
})
export default router
