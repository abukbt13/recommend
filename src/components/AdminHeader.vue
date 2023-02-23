<template>
  <div class="head d-flex bg-info flex-row justify-content-between align-items-center px-2">
    <a id="home" class="home text-uppercase text-decoration-none" href="/">Diamond</a>
    <div class="sow" v-if="username">
      {{username}}<span><button @click="logOut" class="btn btn-sm btn-secondary mx-1 my-1">LOG OUT</button></span>
    </div>
    <div class="links d-lg-flex d-none d-sm-block" v-else="{username}">
      <router-link  to="/company" class="link px-2 text-uppercase" href="#">Company</router-link>
      <router-link  to="/hostingdetails" class="link px-2 text-uppercase" href="#">Hosting Details</router-link>
      <router-link  to="/language" class="link px-2 text-uppercase" href="#">Language</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeader"
}
</script>

<style scoped>

</style>