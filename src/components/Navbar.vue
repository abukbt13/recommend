<template>
  <div class="itemslinks" >
    <button class="btn btn-success me-2">All</button>
    <button class="btn btn-success me-2">Frontend</button>
    <button class="btn btn-success me-2">Backend</button>
    <div class="d-flex flex-row" v-for="specific_language in specific_languages" :key="specific_language">

      <button class="btn language btn-success p-2 ms-1">{{specific_language.name}}</button></div>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

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
  min-width: 3vw;
  max-width: 100vw;
  overflow-y: scroll;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
}
.language{
    width: 10rem;
}
</style>