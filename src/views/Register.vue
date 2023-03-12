<template>
  <Header />

  <div class="container d-flex align-items-center justify-content-center">

      <!--      <label for="">{{error}}</label>-->
      <div class="col col-sm-12 col-md-6 col-lg-6 w-50">
        <form @submit.prevent="submit" autocomplete="on">
        <div class="naviated">
          <p style="font-size: 32px;" class="px-3 text-info  text-xl-center">Register Now </p>

        </div>
          <ul class="">
            <li class="bg-danger text-white p-3" v-for="error in errors" :key="error">
              {{ error }}
            </li>
          </ul>
        Name:
          <input type="text" v-model="name"  class="form-control" placeholder="Enter Full Name" required>
          Email:
          <input type="email" v-model="email"  class="form-control" placeholder="Enter Email" required>
           Languages Type:
          <select class="form-control" v-model="language_type">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="other">Other</option>
          </select>
          Occupation:
          <p>Are you a software developer</p>
          <select class="form-control" v-model="occupation">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          Password:
          <input type="password" v-model="password"  class="form-control" placeholder="Enter Password" required>

          <div class="d-flex justify-content-between pt-2">
            <div class="">
            <button type="submit" class="btn btn-outline-info">Register</button>
            </div>
            <div class="form-group d-flex">
              <p>Have  an account ? <a href="login" type="submit" class="btn btn-primary">Login here</a></p>

            </div>

          </div>
      </form>
      </div>

  </div>
  <div class="popup" v-show="popup">
    <p class="text-">You have been successfully registered</p>
    <p class="text-info text-bg-secondary">{{message}}</p>
    <a class="text-decoration-none btn btn-success" href="/verify">Verify your account</a>
  </div>
</template>


<script setup>
  import {onMounted, reactive, ref} from "vue";
  import {useRoute, useRouter} from "vue-router";
  import axios from "axios";

  const router = useRouter();
  import Header from '@/views/header.vue'
  const email=ref('');
  const password=ref('');
  // const c_password=ref('');
  const language_type=ref('');
  const occupation=ref('');
  const name=ref('');
  const errors=ref([]);
  const popup=false;
  const message=ref('');

  const submit=async () => {
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('password', password.value);
    formData.append('occupation', occupation.value);
    formData.append('language_type', language_type.value);

    const res = await axios.post('http://127.0.0.1:8000/api/register', formData);
    if (res.status == 200) {
      errors.value = res.data.errors
      message.value = res.data.message
      // popup.value=true
      // if(res.data.status=='success') {
        router.push('/verify')

    }


}


</script>
<style scoped>
.container{
  width: 100vw;
  height: 84vh;
}
.col{
  width: 12rem;
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