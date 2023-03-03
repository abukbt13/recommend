<template>
  <div class="head fixed-top position-relative d-flex flex-row justify-content-between align-items-center">
   <div class="title">
     <a id="home" class="home text-uppercase text-decoration-none" href="/">Diamond</a>
   </div>

    <div class="links d-lg-flex d-none d-sm-block">
      <router-link  to="/company" class="link px-2 text-uppercase" href="#">Company</router-link>
      <router-link  to="/hostingdetails" class="link px-2 text-uppercase" href="#">Hosting Details</router-link>
      <router-link  to="/language" class="link px-2 text-uppercase" href="#">Language</router-link>
    </div>
    <div class="links d-lg-none  d-sm-block d-md-none">
      show
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
.title{
  padding: 1.5rem;
  width: 18rem;
  background-color: #2c2c54;
}
.head{
  background-color: #f7f1e3;
}
</style>