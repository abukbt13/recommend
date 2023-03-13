<template>
<AdminHeader />
  <div  class="main-content">
    <div class="sidebar">

      <h2 class="bg-">
        Main Menu
      </h2>
      <p>Companies</p>
      <ul>
        <li class="list-unstyled"><a class="text-decoration-none" href="/company">Add Company</a></li>
        <li class="list-unstyled"><a class="text-decoration-none" href="/viewcompany">View Company</a></li>
      </ul>
      <p>Companies Details</p>
      <ul>
        <li class="list-unstyled"><a class="text-decoration-none" href="/company">Add Companies Detail</a></li>
        <li class="list-unstyled"><a class="text-decoration-none" href="/company">View Companies Detail</a></li>

      </ul>
      <p>Hosting Details</p>
      <ul>
        <li>Add Hosting Details</li>
        <li>View Hosting Details</li>
      </ul>
      <p>Languages</p>
      <ul>
        <li>Add Languages</li>
        <li>View Languages</li>
      </ul>
    </div>
    <div class="content">
    <p>{{name}}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const name = computed(() => route.query.name);


const role_as=ref('')
role_as.value=localStorage.getItem('role_as')

if (role_as.value === null || role_as.value !== '1') {
  window.location.href = '/login';
}
import AdminHeader  from "@/components/AdminHeader.vue";

</script>

<style scoped>
.main-content{
  position: static;
}
.sidebar{
  padding: 1.5rem;
  width: 18rem;
  height: 87vh;
  background-color: #40407a;
}
p:hover{
  background-color: #f7f1e3;
  color: #227093;
  transition: 2s linear;
}
</style>