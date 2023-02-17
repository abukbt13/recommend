<template>
  <div class="container">
    <div class="row d-flex align-content-center justify-content-center">
      <!--      <label for="">{{error}}</label>-->
      <div class="col col-sm-12 col-md-6 col-lg-6">
        <form @submit.prevent="submit" autocomplete="on">

          <p style="font-size: 22px;" class="py-2 px-2 text-info text-bg-secondary">Register Here <button class="btn btn-primary float-end">
            <a class="text-white" href="/login">Login</a></button></p>          Name:
          <input type="text" v-model="name"  class="form-control" placeholder="Enter Full Name" required>
          Email:
          <input type="email" v-model="email"  class="form-control" placeholder="Enter Email" required>
           Languages:
          <input type="text" v-model="language"  class="form-control" placeholder="Enter Languages" required>
           Occupation:
          <input type="text" v-model="occupation"  class="form-control" placeholder="Enter Occupation" required>
          Password:
          <input type="password" v-model="password"  class="form-control" placeholder="Enter Password" required>
          <button type="submit" class="btn btn-outline-info my-2 form-control">Register</button>
      </form>
      </div>
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
  const c_password=ref('');
  const language=ref('');
  const occupation=ref('');
  const name=ref('');
  // const error=ref('');

  const submit=async () => {
  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('email', email.value);
  formData.append('password',password.value);
  formData.append('occupation', occupation.value);
  formData.append('language', language.value);

  const res = await axios.post('http://127.0.0.1:8000/api/register',formData);
  if(res.status==200) {
  alert('success')
  // router.push('/dashboard')
  localStorage.setItem('token', res.data.token)
  localStorage.setItem('username', res.data.user.name)

}




}
</script>
<style scoped>
.row{
  min-height:50vh;
}
.shoes{
  background-color: grey;
  min-height: 25vh;
  max-height:50vh;
  overflow-y:scroll;

}
</style>