<template>
  <Header/>
  <div class="container d-flex  align-items-center justify-content-center">

    <!--          <label for="">{{error}}</label>-->
    <div class="col col-sm-12 col-md-6 col-lg-6 w-50">
      <form @submit.prevent="submit" autocomplete="on">

        <ul class="">
          <li class="bg-danger text-white p-3" v-for="error in errors" :key="error">
            {{ error }}
          </li>
        </ul>
        Email
        <input type="text" v-model="email"  class="form-control" placeholder="Enter Email" required>
        Password
        <input type="password" v-model="password"  class="form-control" placeholder="Enter Password" required>
        Confirm Password
       <input type="password" v-model="password2"  class="form-control" placeholder="Enter Password" required>
       <input type="number" v-model="otp"  class="form-control" placeholder="Enter otp" required>

        <div class="d-flex justify-content-between pt-2">

          <button type="submit" class="btn btn-outline-info">Reset Password Now</button>

        </div>
      </form>
    </div>

  </div>

</template>

<script setup>
import Header from "@/views/header.vue";

  import {onMounted, reactive, ref} from "vue";
  import {useRouter} from "vue-router";
  import axios from "axios";
  const router = useRouter();
  const email=ref('');
  const otp=ref('');
  const password=ref('');
  const password2=ref('');
  const error=ref('');

    const submit = async () => {
      const formData = new FormData();
      if(password.value===password2.value){
        formData.append('email', email.value);
        formData.append('password', password.value);
        formData.append('otp', otp.value);
        const res = await axios.post('http://127.0.0.1:8000/api/reset_password', formData);
        if (res.status == 200) {
          router.push('/login')
        }
      }
      else{
        alert('Please enter correct password')

      }
  }
</script>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;
}
</style>