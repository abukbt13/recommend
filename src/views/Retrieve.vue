<template>
  <Header/>
  <div class="container d-flex  align-items-center justify-content-center">

          <label for="">{{error}}</label>
    <div class="col col-sm-12 col-md-6 col-lg-6 w-50">
      <form @submit.prevent="submit" autocomplete="on">
        <div class="naviated">
          <p style="font-size: 32px;" class="px-3 text-info  text-xl-center">Request Password reset </p>

        </div>
        <ul class="">
          <li class="bg-danger text-white p-3" v-for="error in errors" :key="error">
            {{ error }}
          </li>
        </ul>
        Enter The Email Address you registered with:
        <input type="email" v-model="email"  class="form-control" placeholder="Enter email" required>

        <div class="d-flex justify-content-between pt-2">

            <button type="submit" class="btn btn-outline-info">Request For Password Reset</button>

        </div>
      </form>
    </div>

  </div>

</template>

<script setup>

import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";
const router = useRouter();
import Header from "@/views/header.vue";
const email=ref('');
const error=ref('');
const otp=ref('');

const submit=async () => {
  const formData = new FormData();
  formData.append('email', email.value);

  const res = await axios.post('http://127.0.0.1:8000/api/request_reset_password', formData);
  if (res.status == 200) {

    otp.value=res.data.otp

    if(res.data.status=='success') {
      router.push({
        path: '/authotp',
        query: {
          email: email.value
        }
      });
    }
    else{
      error.value=res.data.error
    }
  }
}
</script>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;
}
</style>