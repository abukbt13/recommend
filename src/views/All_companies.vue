<template>
  <Navbar/>
  <P>hELLO WORLD</P>
    <div class="showall">
      <div class="card" v-for="company in companies" :key="company">
        <div class="card-header">
          <p>{{ company.company_name }}</p>
        </div>
        <div class="card-body">
          <img :src="'http://127.0.0.1:8000/storage/company/'+company.company_logo" style="width:100%; height: 14rem;">
        </div>
        <div class="card-footer">
          <p>vbnm</p>
        </div>
      </div>
    </div>


</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import {onMounted, ref} from "vue";
import axios from "axios";

const companies=ref([]);
const getCompanies=async () => {
  const ress = await axios.get('http://127.0.0.1:8000/api/show_all_companies');
  if (ress.status == 200) {
    companies.value=ress.data;
    console.log(ress.data);
  }
}


onMounted(()=>{
  getCompanies()
})
</script>

<style scoped>
.showall{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

</style>