<template>
<Header />
  <form class="form" @submit.prevent="searchCompany">
    <input type="text" v-model="searchTerm" placeholder="Search...">
    <button type="submit">Search</button>
  </form>
  <Navbar/>
  <div class="home">
<!--    if user search"\???-->

    <div style="display: grid;grid-template-columns: 1fr;" class="searchbar" v-if="searchTerm" v-for="result in searchResults" :key="result.id">

        <div class="card">
          <div class="card-header text-center">
            <span>{{result.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+result.company_logo" style="width:100%; height: 14rem;">
            <p>hello world</p>
          </div>
          <div class="card-footer">
          </div>
        </div>

    </div>
    <div class="gen" v-else="">

<!--      Authenticated view??-->
      <div class="sow" v-if="username">
        <div class="card"  v-for="suggestfrontent in suggestfrontents" :key="suggestfrontent" >
          <div class="card-header text-center">
            <span>{{suggestfrontent.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+suggestfrontent.company_logo" style="width:100%; height: 14rem;">
          </div>
          <div class="card-footer">
            <button   @click="fetchDetails(suggestfrontent.id)" class="btn w-100 btn-danger text-white btn-outline-info">Click view Sumary</button>
          </div>
        </div>

        <div class="card"  v-for="suggestbackend in suggestbackends" :key="suggestbackend" >
          <div class="card-header text-center">
            <span>{{suggestbackend.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+suggestbackend.company_logo" style="width:100%; height: 14rem;">
          </div>
          <div class="card-footer">
            <button   @click="fetchDetails(suggestbackend.id)" class="btn w-100 btn-danger text-white btn-outline-info">Click view Sumary</button>
          </div>
        </div>

      </div>

<!--      //Authenticated Users view-->
      <div class="companies"   v-else="">
        <div class="card" v-for="company in companies" :key="company" @mouseleave="showContent">
          <div class="card-header text-center">
            <span>{{company.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+company.company_logo" style="width:100%; height: 14rem;">
          </div>
          <div class="card-footer">
            <button   @click="fetchDetails(company.id)" class="btn w-100 btn-danger text-white btn-outline-info">Click view Sumary</button>
          </div>
        </div>
      </div>

      <div class="hover"  v-show="hover" v-for="companydetail in companydetails" :key="companydetail">
        <div @click="closeHover"  class="close rounded bg-danger text-white p-1 mb-1 float-end">
          Close
        </div>
        <br><br>
        <h4 class="text-center text-uppercase text-primary bg-white">{{ companydetail.company_name }}</h4>
        <p class="text-white">{{ companydetail.company_name }} web hosting is a good company that provides cheap and secure hosting to your websites.</p>
        <p class="text-white text-decoration-underline">Languages it supports include:</p>
        <ul>
<!--          {{}}-->
          <li v-for="languagedetail in languagedetails" :key="languagedetail">{{ languagedetail.language }}i</li>
        </ul>
        <a :href="companydetail.url" target="_blank" class="btn ms-4 btn-outline-danger btn-danger text-white w-75" @click="showMoreCompanydetails(companydetail.company_name)">More About</a>
      </div>



    </div>

  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";

import axios from "axios"
import {onMounted, ref} from "vue";
import Header from "@/views/header.vue";
import async from "async";
import router from "@/router";
import {useRouter} from "vue-router";
import Navbar from "@/components/Navbar.vue";
const hover=ref(false);
const  usernamedetails=localStorage.getItem('username')
const companies=ref([]);
const othercompanies=ref([]);
const companydetails=ref([]);
const languagedetails=ref([]);
const searchTerm = ref('');
const searchResults = ref([]);

const searchCompany = async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/search', {params: {q: searchTerm.value}});
  if (res.status == 200) {
    // alert('success')
    searchResults.value = res.data;
    console.log(searchResults.value)
  }
}
const closeHover = () => {
 hover.value =false;
}
const fetchDetails= async (id) =>{

  const res = await axios.get(`http://127.0.0.1:8000/api/companydetails/${id}`);
  if (res.status == 200) {
    hover.value=true;
    companydetails.value=res.data;
  }
  const ress = await axios.get(`http://127.0.0.1:8000/api/companydetailslanguages/${id}`);
  if (ress.status == 200) {
   languagedetails.value=ress.data.company_details;
    console.log(company_details.value);
  }
}
function showMoreCompanydetails(name){
  // alert(name)
  const result = axios.get(`http://127.0.0.1:8000/api/showmoreCompanydetails/${name}`);
  if (result.status == 200) {
    router.push('/company_moredetail')
  }
}
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
const bestfrontends=ref([]);
const bestbackends=ref([]);
const suggestfrontents=ref([]);
const suggestbackends=ref([]);

const username=localStorage.getItem('username')
const getcompanies=async() =>{
  const res = await axios.get('http://127.0.0.1:8000/api/showrandom');
  companies.value=res.data;
};
const showothers=async() =>{
  const res = await axios.get('http://127.0.0.1:8000/api/showothers');
  othercompanies.value=res.data;
};
const frontendcompany=async() =>{
  const res = await axios.get('http://127.0.0.1:8000/api/bestfrontend');
  bestfrontends.value=res.data;
};
const backendcompany=async() =>{
  const res = await axios.get('http://127.0.0.1:8000/api/bestbackend');
  bestbackends.value=res.data;
};

const recommenduser=async() =>{
  const res = await api.get('recommenduser');
  console.log('hey')
  // console.log(res.data)
  suggestfrontents.value=res.data.usercompanies;
  suggestbackends.value=res.data.othercompanies;
};


onMounted(()=>{
  getcompanies();
  frontendcompany();
  backendcompany();
  showothers();
  recommenduser();
})
</script>
<style>
.searchbar{
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}
.sow{

  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}
.companies{
  /*width:100%;*/
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 500px) and (min-width: 200px) {

  .searchbar{
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }.companies{
    /*width:100%;*/
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }
  .sow{
    /*width:100%;*/
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }
  .companies{
    margin-top:3rem;
  }
  .card{
  width: 100%;
    margin-top:3rem;
  }
  .form{display: flex;
    background-color: #2c2c54;
   margin-top:5.4rem;
    margin-left: -19em;
    position:absolute;
    left:0;
    top:2rem;
  }
}
.hover{
  width:40vw;
  background-color:#4b7bec;
  opacity: 1;z-index: 1;
  padding: 1rem;
  position:fixed;
  top:30vh;
  left:30vw;
}
.form{
  position:absolute;
  top:0.2rem;
  left:20rem;
  background-color:white;
  z-index: 1;
}

</style>