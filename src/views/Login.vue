<template>
  <Header />
  <div class="container d-flex align-items-center justify-content-center">

      <div class="col col-sm-12 col-md-6 col-lg-6">
        <p style="font-size: 22px;" class="py-2 text-xl-center px-2 text-info text-bg-secondary">Login Here</p>
       <p class="text-uppercase text-white bg-danger p-2" v-if="error">{{error}}</p>
        <form @submit.prevent="submit" autocomplete="on">

         Email:
          <input type="email" v-model="email"  class="form-control" placeholder="Enter Email" required autocomplete="email">
           Password:
          <input type="password" v-model="password"  class="form-control" placeholder="Enter Password" required>
          <div class="d-flex justify-content-between pt-2">
            <div class="">
              <button type="submit" class="btn btn-outline-info">Login</button>
            </div>
            <div class="form-group d-flex">
              <p>Forget password?. Dont worry<a href="retrieve" type="submit" class="btn btn-primary">Retrieve password</a></p>

            </div>
          </div>
          <p>Create An account?. <a href="register" class="btn text-decoration-underline">Click here</a> </p>
        </form>
      </div>
  </div>
</template>


<script setup>
import {onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
const error=ref('')
const router = useRouter();
import Header from "@/views/header.vue";
const email=ref('');
const password=ref('');
// const error=ref('');

const submit=async () => {
  const formData = new FormData();
  formData.append('email', email.value);
  formData.append('password',password.value);

  const res = await axios.post('http://127.0.0.1:8000/api/login',formData);
  if(res.status==200) {

    if(res.data.status=='success'){
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', res.data.user.name)
      localStorage.setItem('language', res.data.user.language_type)
      localStorage.setItem('role_as', res.data.user.role_as)
      if(res.data.user.role_as == '0'){
        router.push('/')
      }
      else{
        router.push('/admindashboard')
      }
    }else{

      error.value = res.data.message
    }
  }





}
</script>
<style scoped>

.container {
  height: 84vh;
  width: 100vw;
}
</style>