<template>


  <div class="head d-flex bg-info flex-row justify-content-between align-items-center px-2">
    <a id="home" class="home text-uppercase text-decoration-none" href="/">Diamond</a>
    <div class="links d-lg-flex d-none d-sm-block">
      <router-link  to="/register" class="link px-2 text-uppercase" href="#">Register</router-link>
      <router-link  to="/company" class="link px-2 text-uppercase" href="#">Company</router-link>
      <router-link  to="/hostingdetails" class="link px-2 text-uppercase" href="#">Hosting Details</router-link>
    </div>
    <div class="small d-block d-sm-none d-lg-none" @click="click">Click me</div>

  </div>



  <router-view/>
</template>
<script setup>
const click=()=>{
  const home=document.getElementById("home");
  home.style.background="black"
}
</script>
<style>

.home,.link{
  font-size:22px;
}
</style>
