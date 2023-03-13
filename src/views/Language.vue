<template> <div class="row d-flex align-content-center justify-content-center">
  <!--      <label for="">{{error}}</label>-->
  <div class="col col-sm-12 col-md-6 col-lg-6">
    <form @submit.prevent="submit" autocomplete="on">
      <p style="font-size: 22px;" class="py-2 px-2 text-info text-bg-secondary">Upload Language here <button class="btn btn-primary float-end">
        <a class="text-white" href="/admindashboard">Go Back</a></button></p>
      <p class="text-white bg-danger">{{message}}</p>
      Language Name:
      <input type="text" v-model="name"  class="form-control" placeholder="Enter Language name" required>
      <button type="submit" class="btn btn-outline-info my-2 form-control">Upload Language</button>
    </form>
  </div>
</div>

</template>

<script setup>

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";

const router = useRouter();

const name=ref('');
const message=ref('');
const role_as=ref('')
role_as.value=localStorage.getItem('role_as')

if (role_as.value === null || role_as.value !== '1') {
  window.location.href = '/login';
}

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
const submit=async () => {
  const formData = new FormData();
  formData.append('name', name.value);

  const res = await api.post('language', formData);
  if (res.status == 200) {
    router.push('/admindashboard');
  }
}
</script>

<style scoped>

</style>