<template>
<div class="nav d-flex">
  <ul class="list-unstyled" v-for="specific_language in specific_languages" :key="specific_language">
    <li> <a href="/frontend" class="btn m-1 btn-primary">{{ specific_language.name }}</a></li>
  </ul>
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
.nav{
  min-width: 100vw;
  max-width: 100vw;
  overflow-y: scroll;
  /*overflow: scroll;*/

  height: 4rem;
}
</style>