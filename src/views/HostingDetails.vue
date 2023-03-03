<template>

  <div class="container">
    <div class="row d-flex align-content-center justify-content-center">
      <!--      <label for="">{{error}}</label>-->
      <div class="col col-sm-12 col-md-6 col-lg-6">
        <form @submit.prevent="submit" autocomplete="on">

          <p class="text-light bg-danger mt-1 p-2 justify-content-center">Hosting Details of different companiescompany_id</p>
          Company Name:
          <select class="form-control" v-model="company_name">
            <option  v-for="company in companies" v-bind:value="company.company_name">
              {{ company.company_name }}
            </option>
          </select>
          Language:
          <select class="form-control" v-model="language">
            <option  v-for="language in languages" v-bind:value="language.name">
              {{ language.name }}
            </option>
          </select>
          Type:
          <select class="form-control" v-model="type">
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          Least Price per storage provided:
          <input type="number" v-model="least_pricing_storage"  class="form-control" placeholder="Enter Price per storage" required>
          Storage:
          <input type="text" v-model="storage"  class="form-control" placeholder="Enter Storage" required>
          Can Host Free:
          <input type="text" v-model="can_host_free"  class="form-control" placeholder="Enter Can host free" required>
          <button type="submit" class="btn btn-outline-info my-2 form-control">Upload Company Details</button>
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


const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
const company_name=ref('');
const language=ref('');
const type=ref('');
const least_pricing_storage=ref('');
const storage=ref('');
const can_host_free=ref('');

const companies=ref([]);
const languages=ref([]);
// const error=ref('');

const submit=async () => {
  const formData = new FormData();
  formData.append('company_name', company_name.value);
  formData.append('language', language.value);
  formData.append('least_pricing_storage',least_pricing_storage.value);
  formData.append('can_host_free',can_host_free.value);
  formData.append('storage', storage.value);
  formData.append('type', type.value);

  const res = await api.post('hosting_details',formData);
  if(res.status==200) {
    alert('success')
    // router.push('/dashboard')rating
  }
}
const get_hosting_companies=async() =>{
  const res = await api.get('select_company');
  companies.value=res.data
  // console.log(res.data.details);
};
const get_languages=async() =>{
  const res = await api.get('select_language');
  languages.value=res.data.details;
  console.log(res.data.details);
};
onMounted(
    ()=>{
      get_hosting_companies()
      get_languages()
    }
)
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