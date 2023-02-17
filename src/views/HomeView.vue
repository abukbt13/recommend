<template>
  <div class="home">
    <div class="companies">
        <div class="card" v-for="company in companies" :key="company" @mouseleave="showContent">
          <div class="card-header text-center">
            <span>{{company.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+company.company_logo" style="width:100%; height: 14rem;">
            <p>hello world</p>
          </div>
          <div class="card-footer">
            <div class="btn btn-primary text-white btn-outline-info">Visit this hosting</div>{{company.id}}
            <button   @click="showId(company.id)" class="btn float-end btn-danger text-white btn-outline-info">More Details</button>
          </div>
        </div>
    </div>
    <br>
    <br>
    <hr>
    <br>
    <br>
    <div class="companies">
      <div class="card" v-for="companyphp in companiesphp" :key="companyphp" @mouseleave="showContent">
        <div class="card-header text-center">
          <span>{{companyphp.company_name}}</span>
        </div>
        <div class="card-body">
          <img :src="'http://127.0.0.1:8000/storage/company/'+companyphp.company_logo" style="width:100%; height: 14rem;">
          <p>hello world</p>
        </div>
        <div class="card-footer">
          <div class="btn btn-primary text-white btn-outline-info">Visit this hosting</div>
          <button   @click="showId(companyphp.id)" class="btn float-end btn-danger text-white btn-outline-info">More Details</button>
        </div>
      </div>
    </div>

  </div>
  <div class="footer">
<Footer/>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";

import axios from "axios"
import {onMounted, ref} from "vue";


const companies=ref([]);
const showId= (id) =>{
  alert(id)
}
const username=localStorage.getItem('username')
const getcompanies=async() =>{
  const res = await axios.get('http://127.0.0.1:8000/api/showhosting');
  companies.value=res.data;
};

const companiesphp=ref([]);

const getcompaniesphp=async() =>{
  const res = await axios.get('http://127.0.0.1:8000/api/showhostingphp');
  companiesphp.value=res.data;
};

onMounted(()=>{
  getcompanies();
  getcompaniesphp();
})
</script>
<style>
.companies{
  /*width:100%;*/
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>