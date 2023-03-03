<template>
<input v-model="searchkey" type="text">
  <button class="btn-primary" @click="searchdata">Search</button>
  {{searches}}
</template>

<script setup>

import axios from "axios";
import {onMounted, ref} from "vue";

const searches=ref([])
const searchkey=ref('')
const searchdata= async () => {
  const formData= new FormData();
  formData.append('searchkey','searchkey.value')
  const res=await axios.get('http://127.0.0.1:8000/api/search',formData)
  if(res.status===200){
    // alert('alert search eshtabloished')
    searches.value=res.data
    console.log(searches.value)
  }
}
</script>

<style scoped>

</style>