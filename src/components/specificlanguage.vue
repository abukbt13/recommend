<template>
    {{ companies }}
  <div class="card"  v-for="company in companies" :key="company" >
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
</template>

<script setup>

import async from "async";
import {computed, onMounted, reactive, ref} from "vue";

const route = useRoute();
  import { useRouter } from "vue-router";
  import axios from "axios";
  import { useRoute } from 'vue-router';
  const companies=ref([]);
const namedlanguage = computed(() => route.query.language);
const languages = async () => {
  const res = await axios.get(`http://127.0.0.1:8000/api/show_all_companies/${namedlanguage.value}`);
  if (res.status == 200) {
    companies.value = res.data;
    console.log(res.data);
  }
};
onMounted(() => {
  languages(namedlanguage.value);
});
</script>

<style scoped>

</style>