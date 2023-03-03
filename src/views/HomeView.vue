<template>
<Header />
  <form @submit.prevent="searchCompany">
    <input type="text" v-model="searchTerm" placeholder="Search...">
    <button type="submit">Search</button>
  </form>

  <div class="home">
    <div style="display: grid;grid-template-columns: 1fr 1fr;gap:1rem;" class="searchbar" v-if="searchTerm" v-for="result in searchResults" :key="result.id">

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
      <div class="sow" v-if="username">
        <div class="card"  v-for="suggestfrontent in suggestfrontents" :key="suggestfrontent" >
          <div class="card-header text-center">
            <span>{{suggestfrontent.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+suggestfrontent.company_logo" style="width:100%; height: 14rem;">
            <p>hello world</p>
          </div>
          <div class="card-footer">
            <button    class="btn w-100 btn-danger text-white btn-outline-info">view More Details</button>
          </div>
        </div>
        <div class="break">
          <h2>Other people also like</h2>

        </div>
        <div class="card"  v-for="suggestbackend in suggestbackends" :key="suggestbackend" >
          <div class="card-header text-center">
            <span>{{suggestbackend.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+suggestbackend.company_logo" style="width:100%; height: 14rem;">
            <p>hello world</p>
          </div>
          <div class="card-footer">
            <button    class="btn w-100 btn-danger text-white btn-outline-info">view More Details</button>
          </div>
        </div>

      </div>
      <div class="companies"   v-else="">
        <div class="card" v-for="company in companies" :key="company" @mouseleave="showContent">
          <div class="card-header text-center">
            <span>{{company.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+company.company_logo" style="width:100%; height: 14rem;">
            <p>hello world</p>
          </div>
          <div class="card-footer">
            <button   @click="fetchDetails(company.id)" class="btn w-100 btn-danger text-white btn-outline-info">view More Details</button>
          </div>
        </div>
      </div>

      <div class="hover" v-show="hover" v-for="companydetail in companydetails" :key="companydetail" >
        <!--  {{companydetail}}-->
        <h4 class="text-center text-uppercase text-primary bg-white">{{companydetail.company_name}} </h4>
        <p class="text-white">Amazon web hosting is a good company that provides cheap and secure hosting to your websites </p>
        <p class="text-white text-decoration-underline">Lannguages it supports include</p>
        <ul>
          <li class="list-style-">Vue js</li>
          <li class="list-unstyled">Php </li>
          <li class="list-unstyled">Laravel</li>
          <li class="list-unstyled">React js</li>
        </ul>
        <a class="btn ms-4 btn-outline-danger btn-danger text-white w-75" href="https://aws.amazon.com/free/?trk=2d3e6bee-b4a1-42e0-8600-6f2bb4fcb10c&sc_channel=ps&s_kwcid=AL!4422!3!645125273264!e!!g!!amazon%20aws&ef_id=CjwKCAiAxvGfBhB-EiwAMPakqs_m8xmeVd-weqKcy2uVlxwYBhv7IPcfxFWt0bOipcOk5w2EeQvS6RoCS-4QAvD_BwE:G:s&s_kwcid=AL!4422!3!645125273264!e!!g!!amazon%20aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all">
          Visit the website
        </a>
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
const hover=ref(false);

const  usernamedetails=localStorage.getItem('username')
const companies=ref([]);
const othercompanies=ref([]);
const companydetails=ref([]);
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

const fetchDetails= async (id) =>{

  const res = await axios.get(`http://127.0.0.1:8000/api/companydetails/${id}`);
  if (res.status == 200) {
    hover.value=true;
    companydetails.value=res.data;
    // console.log(res.data.company_name);
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
  console.log(res.data)
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
.hover{
  width:40vw;
  background-color:#4b7bec;
  opacity: 1;z-index: 1;
  padding: 1rem;
  position:absolute;
  top:30vh;
  left:30vw;
}

</style>