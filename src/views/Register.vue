<template>
  <div class="navigate">
    <button class="m-4 p-2 btn back btn-primary"><a class="text-white" href="/">Go back</a></button>
  </div>
  <div class="container d-flex align-items-center justify-content-center">

      <!--      <label for="">{{error}}</label>-->
      <div class="col col-sm-12 col-md-6 col-lg-6 w-50">
        <form @submit.prevent="submit" autocomplete="on">
        <div class="naviated">
          <p style="font-size: 15px;" class="px-3 text-info text-bg-secondary">Register Here <button class="btn btn-primary btn-sm float-end">
            <a class="text-white" href="/login">Login</a></button></p>
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
  const errors=ref([]);

  const submit=async () => {
  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('email', email.value);
  formData.append('password',password.value);
  formData.append('occupation', occupation.value);
  formData.append('language', language.value);

  const res = await axios.post('http://127.0.0.1:8000/api/register',formData);
  if(res.status==200) {
    errors.value=res.data.errors
    if(res.data.status=='success'){
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', res.data.user.name)
      localStorage.setItem('language', res.data.user.language)
      localStorage.setItem('language', res.data.user.id)
      router.push('/')
    }




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

</style>