<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid bg-primary">
      <a class="navbar-brand" href="/">Diamond recommender</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          </li>


        </ul>
        <div class="d-flex align-content-center justify-content-center" role="search">
          <p class="pt-3 pe-3">{{ username }}</p>

          <button @click="logOut" class="btn btn-sm btn-secondary mx-1 my-1"> <span><i style="font-size: 26px;" class="fa pe-2 fa-sign-out" aria-hidden="true"></i>
</span>LOG OUT</button>

        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const username=localStorage.getItem("username");
const logOut= () => {
  alert('Log out of the system sign')
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  localStorage.removeItem('role_as')
  localStorage.removeItem('language')
  window.location.reload('/')

}
</script>

<style scoped>

</style>