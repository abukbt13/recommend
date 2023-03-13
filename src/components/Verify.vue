<template>
<div>
  <form  @submit.prevent="submit" class="row w-25  flex-column d-flex justify-content-center ">
  <div class="div">
      <div class="errors bg-danger text-warning">{{ error }}</div>
      <div class="form-group">
        <label for="">Enter Email you register with</label>
        <input type="email" v-model="email" class="form-control">
      </div>
      <div class="form-group">
      <label for="">OTP</label>
      <input type="text" v-model="otp" minlength="4" maxlength="5" class="form-control">
      </div>
      <div class="form-group">
      <button class="btn mt-2 w-100 btn-success">Verify your Account</button>
      </div>
  </div>
  </form>
  </div>
  <div class="popup" v-show="popupdiv">
    <p class="text-">You have been successfully registered</p>
    <p class="text-info text-bg-secondary">{{message}}</p>
    <a class="text-decoration-none btn btn-success" href="/verify">Verify your account</a>
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
const router=useRouter()
const popupdiv=false;
const email=ref('');
const otp=ref('');
const error=ref('');
const submit=async () => {
  const formData = new FormData();
  formData.append('email', email.value);
  formData.append('otp', otp.value);

  const res = await axios.post('http://127.0.0.1:8000/api/verify', formData);
  if (res.status == 200) {
        if(res.data.status == 'success') {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username', res.data.user.name)
            localStorage.setItem('language', res.data.user.language)
            localStorage.setItem('role_as', res.data.user.role_as)
            if(res.data.user.role_as == '0'){
              router.push('/')
            }
            else{
              router.push('/admindashboard')
            }
        }
        else{
          error.value=res.data.message
        }
  }

}
</script>

<style scoped>
.row{
  height:100vh;
  width:100vw;
}
.popup{
  width: 20rem;
  height: 20rem;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align: center;
  padding: 1rem;
  position: absolute;
  top: 10rem;
  z-index: 1;
  left:19rem;
}
</style>