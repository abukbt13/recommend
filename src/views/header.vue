<template>
  <div class="head d-flex bg-info flex-row justify-content-between align-items-center px-2">
    <a id="home" class="home text-uppercase text-decoration-none" href="/">Diamond</a>
<!--    <form @submit.prevent="searchCompany">-->
<!--      <input type="text" v-model="searchTerm" placeholder="Search...">-->
<!--      <button type="submit">Search</button>-->
<!--    </form>-->
    <div class="show" v-if="username">

      {{username}}
      <span>
      <button @click="showUser" class="btn btn-sm btn-secondary mx-1 me-4">
        <i class="fa fa-user me-2" aria-hidden="true"></i>
      </button>
    </span>

    </div>

    <div class="links" v-else="{username}">
      <router-link  to="/register" class="link px-2 text-uppercase" href="#">Register</router-link>
      <router-link  to="/login" class="link px-2 text-uppercase" href="#">Login</router-link>
   </div>


  </div>
  <div class="show_dashboard" v-show="user">
    <div class=""><br>
      <button @click="logOut" class="btn btn-sm btn-secondary mx-1 my-1">LOG OUT </button>
      <button @click="close" class="btn btn-success float-end me-2">Close</button>

    </div>

    <br><br>
    <div class="request p-4 mb-4">
      <form  @submit.prevent="submit">
        <h3>Reguest to advertise here</h3>
        <div class="form-group">
          <label for="">Enter Your company Name</label>
          <input type="text" class="form-control" v-model="company_name">
        </div>
        <label for="">Description </label>
        <textarea class="form-control" v-model="description">
        </textarea>
        <div class="form-group d-flex justify-content-center align-content-center mb-4">
          <button type="submit" class="btn btn-secondary w-100 my-2">Send request</button>
        </div>

      </form>
    </div>

  </div>

</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
const user=ref(false)
function showUser() {
  user.value=true
}function close() {
  user.value=false
}
const company_name=ref('')
const description=ref('')
const submit=async () => {
  const formData = new FormData();
  formData.append('company_name', company_name.value);
  formData.append('description', description.value);

  const res = await api.post('application', formData);
  if (res.status == 200) {
    alert('Success wait for reply')
    // router.push('/dashboard')

  }

}
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
  localStorage.removeItem('role_as')
  localStorage.removeItem('language')
  window.location.reload('/')

}


</script>

<style scoped>
.home,.link{
  font-size:22px;
}
.head{width:100vw}
.show_dashboard{
  position: fixed;
  top:6rem;
  left:20rem;
  z-index: 1;
  width: 30rem;
  border-radius: 8px;
  height: 25rem;
  border: solid 1px #EFF6F6;
  background-color: blue;
}
</style>