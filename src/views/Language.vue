<template> <div class="row d-flex align-content-center justify-content-center">
  <!--      <label for="">{{error}}</label>-->
  <div class="col col-sm-12 col-md-6 col-lg-6">
    <form @submit.prevent="submit" autocomplete="on">
      <p style="font-size: 22px;" class="py-2 px-2 text-info text-bg-secondary">Upload Language here <button class="btn btn-primary float-end">
        <a class="text-white" href="/admindashboard">Go Back</a></button></p>
      Company Name:
      <select class="form-control" v-model="company_name">
      <option  v-for="company in companies" v-bind:value="company.company_name">
        {{ company.company_name }}
      </option>
      </select>
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

const company_name=ref('');
const name=ref('');

const companies=ref([]);

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
const submit=async () => {
  const formData = new FormData();
  formData.append('company_name', company_name.value);
  formData.append('name',name.value);

  const res = await api.post('language',formData);
  if(res.status==200) {
    alert('succcess')
    // router.push('/admindashboard')
  }
  }
const get_hosting_companies=async() =>{
  const res = await axios.get('http://127.0.0.1:8000/api/select_company');
  companies.value=res.data.details;
  // console.log(companies.value);
};
onMounted(
    ()=>{
      get_hosting_companies()
    }
)
</script>

<style scoped>

</style>