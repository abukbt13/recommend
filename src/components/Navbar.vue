<template>
  <div class="itemslinks" >
    <a href="/" class="btn btn-success me-2">HOME</a>
    <a href="/all_companies" class="btn btn-success me-2">All</a>
    <a href="/all_frontend" class="btn btn-success me-2">Frontend</a>
      <a href="/all_backend" class="btn btn-success me-2">Backend</a>
    <div class="d-flex flex-row" v-for="specific_language in specific_languages" :key="specific_language">

      <button @click="findCompanies(specific_language.name)" class="btn language btn-success p-2 ms-1">{{specific_language.name}}</button>
    </div>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router=useRouter()
 const findCompanies = ($language) =>{
  router.push({
        path: '/show_all_companies',
        query: {
          language: $language
        }
      });
 }

const specific_languages=ref([]);
const specificlanguages=async() =>{
  const res = await axios.get('http://127.0.0.1:8000/api/specificlanguages');
  specific_languages.value=res.data;
};
onMounted(()=>{
  specificlanguages();

})
</script>

<style scoped>
.itemslinks{
  z-index: 1;
  min-width: 3vw;
  max-width: 100vw;
  overflow-y: scroll;
  overflow-x: scroll;
  display: flex;
  position:fixed;
  flex-direction: row;
  margin-bottom: 4rem;
}
.language{
    width: 10rem;
}
</style>