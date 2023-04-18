<template>
  <AdminHeader />
  <table class="my-3 ps-5 pe-5 w-100 table table-bordered table-primary table-hover">
    <thead>
    <tr>
      <th>#</th>
      <th>Company Name</th>
      <th>Component URL</th>
      <th>Company LOGO</th>
      <th colspan="2">Operation</th>
    </tr>
    </thead>
    <tbody>

    <tr v-for="company in companies" :key="company" class="text-center">
        <td>{{ company.id}}</td>
      <td class="p-5">{{ company.company_name }}</td>
      <td class="p-5">{{ company.url }}</td>
      <td>
          <img :src="'http://127.0.0.1:8000/storage/company/'+company.company_logo" style="width:200px; height: 100px;">
        </td>
        <td><router-link :to="`edit_company/${company.id}`">Edit</router-link></td>      <td class="p-5"><button class="btn btn-danger">Delete</button></td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import AdminHeader  from "@/components/AdminHeader.vue";
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
const companies= ref ([]);
const router =useRouter()
const getCompanies=async () => {
    const ress = await axios.get('http://127.0.0.1:8000/api/show_all_companies');
    if (ress.status == 200) {
        companies.value=ress.data;
        console.log(ress.data);
    }
}

onMounted(()=> {
    getCompanies();
})
</script>

<style scoped>
.upload{
    position: absolute;
    top: 4rem;
    left: 8rem;
    margin-top: 4rem;
    padding: 2rem;
}
form{
    width: 50vw;
    padding: 1rem;

}
</style>