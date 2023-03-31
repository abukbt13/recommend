<template>
  <div class="head d-flex bg-info flex-row justify-content-between align-items-center px-2">
    <a id="home" class="home text-uppercase text-decoration-none" href="/">Diamond</a>
<!--    <form @submit.prevent="searchCompany">-->
<!--      <input type="text" v-model="searchTerm" placeholder="Search...">-->
<!--      <button type="submit">Search</button>-->
<!--    </form>-->
    <div class="show" v-if="username">
    <h2>home</h2>

      {{username}}<span><button @click="logOut" class="btn btn-sm btn-secondary mx-1 my-1">LOG OUT</button></span>

    </div>

    <div class="links" v-else="{username}">
      <router-link  to="/register" class="link px-2 text-uppercase" href="#">Register</router-link>
      <router-link  to="/login" class="link px-2 text-uppercase" href="#">Login</router-link>
   </div>


  </div>

</template>

<script setup>
import axios from "axios";

const  username=localStorage.getItem('username')

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
const logOut= () => {
  alert('Log out of the system sign')
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  window.location.reload('/')

}
const click=()=>{
  const home=document.getElementById("home");
  home.style.background="black"
}

</script>

<style scoped>
.home,.link{
  font-size:22px;
}
.head{width:100vw}
</style>