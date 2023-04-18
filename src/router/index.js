import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "@/views/Register.vue";
import Company from "@/views/Company.vue";
import Hosting from  "@/views/HostingDetails.vue"
import Login from "@/views/Login.vue"
import Language from "@/views/Language.vue"
import Admindashboard from "@/views/Admindashboard.vue"
import Test  from "@/views/Test.vue";
import Verify from "@/components/Verify.vue";
import Retrieve from "@/views/Retrieve.vue";
import PasswordReset from "@/views/Passwordreset.vue";
import Backend from "@/components/Backend";
import Frontend from "@/components/Frontend";
import All_companies from "@/views/All_companies.vue";
import Allfrontend from "@/components/Allfrontend";
import Allbackend from "@/components/Allbackend";
import Specificlanguage from "@/components/specificlanguage";
import View_companies from "@/components/View_companies";
import Edit_company from "@/more/edit_company.vue";
import Edit_company_detail from "@/more/view_companies_details.vue";
import Authotp   from "@/more/Authotp.vue";
import Applications   from "@/more/applications.vue";
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
    path: '/verify',
    name: 'verify',
    component: Verify
  },
  {
    path: '/retrieve',
    name: 'retrieve',
    component: Retrieve
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: PasswordReset
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
  },

  {
    path: '/frontend',
    name: 'frontend',
    component: Frontend
  },
  {
    path: '/backend',
    name: 'backend',
    component: Backend
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/all_companies',
    name: 'All_companies',
    component: All_companies
  },
  {
    path: '/all_frontend',
    name: 'all_frontend',
    component: Allfrontend
  },
  {
    path: '/all_backend',
    name: 'all_backend',
    component: Allbackend
  },
  {
    path: '/show_all_companies',
    name: 'show_all_companies',
    component: Specificlanguage
  },
  {
    path: '/view_companies',
    name: 'view_companies',
    component: View_companies
  },
  {
    path: '/edit_company/:id',
    name: 'edit_company',
    component: Edit_company
  },
  {
    path: '/company_detail',
    name: 'company_detail',
    component: Edit_company_detail
  },
  {
    path: '/authotp',
    name: 'authotp',
    component: Authotp
  },
  {
    path: '/applications',
    name: 'applications',
    component: Applications
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
