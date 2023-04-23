<template>
<AdminHeader />
  <div  class="main-content d-flex">
    <div class="sidebar ps-3 mt-0">
    <h4>
      <i class="fa fa-bar-chart" aria-hidden="true"></i>
      Dashboard
    </h4>
      <h5>
        <i class="fa fa-building" aria-hidden="true"></i>
        Languages
      </h5>
        <ul>
            <li class="list-unstyled"><a class="text-decoration-none" href="/language">
                <i class="fa fa-square" aria-hidden="true"></i>
                Add languages
            </a>
            </li>

        </ul>
        <h5>
            <i class="fa fa-building" aria-hidden="true"></i>
            Company
        </h5>

      <ul>

        <li class="list-unstyled"><a class="text-decoration-none" href="/company">
          <i class="fa fa-square" aria-hidden="true"></i>

          Add Company
        </a>
        </li>
        <li class="list-unstyled">
          <a class="text-decoration-none" href="/view_companies">
            <i class="fa fa-square" aria-hidden="true"></i>
            View Company</a>
        </li>
      </ul>
      <h5>Companies Details</h5>
      <ul>
        <li class="list-unstyled">
          <a class="text-decoration-none" href="/hostingdetails"> <i class="fa fa-square" aria-hidden="true"></i>
          Add hosting details
        </a>
        </li>
        <li class="list-unstyled"><a class="text-decoration-none" href="/company_detail">
          <i class="fa fa-square" aria-hidden="true"></i>
          View hosting Details</a>
        </li>

      </ul>
      <h5>Applications</h5>
      <ul>
        <li class="list-unstyled">
          <a class="text-decoration-none" href="/applications"> <i class="fa fa-square" aria-hidden="true"></i>
            View request
          </a>
        </li>
      </ul>

    </div>
    <div class="content">
      <div class="row">
        <div class="col sm-6">
          <div class="users">
            <i style="border-radius:50%;border:solid 1px grey;padding:0.5rem;font-size: 43px; background-color: white;color:grey; position: relative;top:-30px; left:4.7rem;" class="fa fa-users" aria-hidden="true"></i>

              <h4 class="text-center m-1">Users</h4>

            <div class="m-1">
              <h1 class="text-center">{{ users }}</h1>
              <br>
            </div>
          </div>
        </div>
        <div class="col sm-6">
          <div class="users">
            <i style="border-radius:50%;border:solid 1px grey;padding:0.5rem;font-size: 43px; background-color: white;color:grey; position: relative;top:-30px; left:4.7rem;" class="fa fa-building-o" aria-hidden="true"></i>

              <h4 class="text-center m-1">Companies</h4>

            <div class="m-1">
              <h1 class="text-center">{{ companies }}</h1>
              <br>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-content-center">

          <div class="users">
            <i style="border-radius:50%;border:solid 1px grey;padding:0.5rem;font-size: 43px; background-color: white;color:grey; position: relative;top:-30px; left:4.7rem;" class="fa fa-book" aria-hidden="true"></i>

            <h4 class="text-center m-1">Application</h4>

            <div class="m-1">
              <h1 class="text-center">{{ applications }}</h1>
              <br>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const name = computed(() => route.query.name);

const users=ref('')
const companies=ref('')
const applications=ref('')
const role_as=ref('')
role_as.value=localStorage.getItem('role_as')

if (role_as.value === null) {
  window.location.href = '/login';
}
if (role_as.value =='0') {
    window.location.href = '/login';
}
import AdminHeader  from "@/components/AdminHeader.vue";
import axios from "axios";

const getNumbers=async () => {
    const ress = await axios.get('http://127.0.0.1:8000/api/count');
    if (ress.status == 200) {
        console.log(ress)
        users.value=ress.data.users;
        companies.value=ress.data.companies;
        applications.value=ress.data.applications;
    }
}

onMounted(()=>{
    getNumbers()
})
</script>

<style scoped>
.users{
  background-color: #a4b0be;
  margin: 5rem;
  width:15rem;
  border-radius: 7px;
}

.sidebar{
  height: 100vh;
  margin-top: 0rem;
  width: 18rem;
  background-color: #f5f6fa;
}
</style>