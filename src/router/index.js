import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "@/views/Register.vue";
import Company from "@/views/Company.vue";
import Hosting from  "@/views/HostingDetails.vue"
import Login from "@/views/Login.vue"
import Language from "@/views/Language.vue"
import Admindashboard from "@/views/Admindashboard.vue"

// const requiresAuth=false;

const user=localStorage.getItem('username')
// alert(user)
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
    path: '/language',
    name: 'language',
    component: Language
  },
  {
    path: '/admindashboard',
    name: 'admindashboard',
    component: Admindashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
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
router.beforeEach((to, from, next) => {
  if (to.path === '/company' && user === null ) {
    router.push('/login')
  }
  next();
})




export default router
