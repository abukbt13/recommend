<template>

    <div class="showall">
    <div class="card" v-for="company in companies" :key="company">
      <div class="card-header">
        <p>{{ company.company_name }}</p>
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
          <li v-for="languagedetail in languagedetails" :key="languagedetail">{{ languagedetail.language }}</li>
        </ul>
        <a :href="companydetail.url" target="_blank" class="btn ms-4 btn-outline-danger btn-danger text-white w-75" @click="showMoreCompanydetails(companydetail.company_name)">More About</a>
      </div> 

</template>

<script setup>

import async from "async";
import {computed, onMounted, reactive, ref} from "vue";

const route = useRoute();
  import { useRouter } from "vue-router";
  import axios from "axios";
  import { useRoute } from 'vue-router';

const hover=ref(false);

const companies=ref([]);
const companydetails=ref([]);
const   languagedetails=ref([]);

const namedlanguage = computed(() => route.query.language);
const languages = async () => {
  const res = await axios.get(`http://127.0.0.1:8000/api/show_all_companies/${namedlanguage.value}`);
  if (res.status == 200) {
    companies.value = res.data;
    console.log(res.data);
  }
};
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
onMounted(() => {
  languages(namedlanguage.value);
});
</script>

<style scoped>
.showall{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
</style>