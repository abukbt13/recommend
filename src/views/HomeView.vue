<template>
  <Header />
  <div class="home">
    <div class="sow" v-if="username">
      <div class="usercard">
        <div class="card" v-for="userslanguage in userslanguages" :key="userslanguage" @mouseleave="showContent">
          <div class="card-header text-center">
            <span>{{userslanguage.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+userslanguage.company_logo" style="width:100%; height: 14rem;">
            <p>hello world</p>
          </div>
          <div class="card-footer">
            <div class="btn btn-primary text-white btn-outline-info">Visit this hosting</div>{{userslanguage.id}}
            <button   @click="showId(userslanguage.id)" class="btn float-end btn-danger text-white btn-outline-info">More Details</button>
          </div>
        </div>
        <div class="card" v-for="languageloved in languageloveds" :key="languageloved" @mouseleave="showContent">
          <div class="card-header text-center">
            <span>{{languageloved.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+languageloved.company_logo" style="width:100%; height: 14rem;">
            <p>hello world</p>
          </div>
          <div class="card-footer">
            <div class="btn btn-primary text-white btn-outline-info">Visit this hosting</div>{{languageloved.id}}
            <button   @click="showId(languageloved.id)" class="btn float-end btn-danger text-white btn-outline-info">More Details</button>
          </div>
        </div>
      </div>

      <h2>Most people also love</h2>
      <div class="usercard">
        <div class="card" v-for="alsoloved in alsoloveds" :key="alsoloved" @mouseleave="showContent">
          <div class="card-header text-center">
            <span>{{alsoloved.company_name}}</span>
          </div>
          <div class="card-body">
            <img :src="'http://127.0.0.1:8000/storage/company/'+alsoloved.company_logo" style="width:100%; height: 14rem;">
            <p>hello world</p>
          </div>
          <div class="card-footer">
            <div class="btn btn-primary text-white btn-outline-info">Visit this hosting</div>{{alsoloved.id}}
            <button   @click="showId(alsoloved.id)" class="btn float-end btn-danger text-white btn-outline-info">More Details</button>
          </div>
        </div>

      </div>
    </div>
    <div class="companies"   v-else="{usernamedetails}">
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


      <div class="card" >
        <div class="card-header text-center">
          <span>{{bestfrontends.company_name}}</span>
        </div>
        <div class="card-body">
          <img :src="'http://127.0.0.1:8000/storage/company/'+bestfrontends.company_logo" style="width:100%; height: 14rem;">
            <p>This is best frontend</p>
        </div>

        <div class="card-footer">
          <div class="btn btn-primary text-white btn-outline-info">Visit this hosting</div>
          <button   class="btn float-end btn-danger text-white btn-outline-info">More Details</button>

        </div>
      </div>
      <div class="card" >
        <div class="card-header text-center">
          <span>{{bestbackends.company_name}}</span>
        </div>
        <div class="card-body">
          <img :src="'http://127.0.0.1:8000/storage/company/'+bestbackends.company_logo" style="width:100%; height: 14rem;">
            <p>This is best frontend</p>
        </div>

        <div class="card-footer">
          <div class="btn btn-primary text-white btn-outline-info">Visit this hosting</div>
          <button   class="btn float-end btn-danger text-white btn-outline-info">More Details</button>

        </div>
      </div>
      <div class="card" v-for="other in othercompanies" :key="other" @mouseleave="showContent">
        <div class="card-header text-center">
          <span>{{other.company_name}}</span>
        </div>
        <div class="card-body">
          <img :src="'http://127.0.0.1:8000/storage/company/'+other.company_logo" style="width:100%; height: 14rem;">
          <p>hello world</p>
        </div>
        <div class="card-footer">
          <div class="btn btn-primary text-white btn-outline-info">Visit this hosting</div>{{other.id}}
          <button   @click="showId(other.id)" class="btn float-end btn-danger text-white btn-outline-info">More Details</button>
        </div>
      </div>

    </div>



  </div>
  <div class="footer">
<!--<Footer/>-->
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue";

import axios from "axios"
import {onMounted, ref} from "vue";
import Header from "@/views/header.vue";

const  usernamedetails=localStorage.getItem('username')
const companies=ref([]);
const othercompanies=ref([]);
const showId= (id) =>{
  alert(id)
}
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
const bestfrontends=ref([]);
const bestbackends=ref([]);
const userslanguages=ref([]);
const languageloveds=ref([]);
const alsoloveds=ref([]);

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

const recommendlanguage = async () => {
  const res = await api.get('recommendlanguage');
  console.log(res.data)
  userslanguages.value=res.data;
};

const recommendlanguageloveds = async () => {
  const res = await api.get('languageloved');
  console.log(res.data)
  languageloveds.value=res.data;
}
const languagealsoloveds = async () => {
  const res = await api.get('languagealsoloveds');
  console.log(res.data)
  alsoloveds.value=res.data;
}

onMounted(()=>{
  getcompanies();
  frontendcompany();
  backendcompany();
  showothers();
  recommendlanguage();
  recommendlanguageloveds();
  languagealsoloveds();
})
</script>
<style>
.usercard{
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
</style>