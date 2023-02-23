<template>
  <div class="navigate">
    <button class="m-4 p-2 btn back btn-primary"><a class="text-white" href="/">Go back</a></button>
  </div>
  <div class="container d-flex align-items-center justify-content-center">

      <!--      <label for="">{{error}}</label>-->
      <div class="col col-sm-12 col-md-6 col-lg-6">
        <p style="font-size: 22px;" class="py-2 px-2 text-info text-bg-secondary">Login Here <button class="btn btn-primary float-end">
          <a class="text-white" href="/register">CREATE ACCOUNT</a></button></p>
        <form @submit.prevent="submit" autocomplete="on">

         Email:
          <input type="email" v-model="email"  class="form-control" placeholder="Enter Email" required autocomplete="email">
           Password:
          <input type="password" v-model="password"  class="form-control" placeholder="Enter Password" required>
          <button type="submit" class="btn btn-outline-info my-2 form-control">LOGIN NOW</button>
        </form>
      </div>
  </div>
</template>


<script setup>
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";

const router = useRouter();

const email=ref('');
const password=ref('');
// const error=ref('');

const submit=async () => {
  const formData = new FormData();
  formData.append('email', email.value);
  formData.append('password',password.value);

  const res = await axios.post('http://127.0.0.1:8000/api/login',formData);
  if(res.status==200) {

    localStorage.setItem('token', res.data.token)
    localStorage.setItem('username', res.data.user.name)
    localStorage.setItem('language', res.data.user.language)
    localStorage.setItem('language', res.data.user.id)
       router.push('/')

  }




}
</script>
<style scoped>

.container {
  height: 84vh;
  width: 100vw;
}
</style>