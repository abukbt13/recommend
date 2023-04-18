<template>
    <div class="d-flex align-content-center justify-content-center">
        <div class=" w-50" >
            <h2>Edit Company </h2>
            <form @submit.prevent="submit">
                <div class="form-group my-2">
                    <label for="">Company name</label>
                    <input type="text"  v-model="company_name"   class="form-control" >                </div>
                <div class="form-group my-2">
                    <label for="">Company Url</label>
                    <input type="text" class="form-control"   v-model="url"   placeholder="Enter The Company URL">
                </div>
                <p></p>
                <button type="submit" class="btn btn-primary my-2 px-4">Update Company Details</button>
            </form>

        </div>
    </div>
</template>
<script setup>
import axios from 'axios'
import {computed, onBeforeMount, onMounted, reactive, ref} from 'vue'
import {useRoute} from "vue-router";
const route=useRoute();
const company_name=ref(null)
const url=ref(null)

const  getApplication = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/editit/${route.params.id}`);
    if(res.status==200){
        console.log(res.data.company[0])
        company_name.value=res.data.company[0].company_name
        url.value=res.data.company[0].url
    }

};

onBeforeMount(()=>{
    getApplication();
})

const submit= async () =>{
}
</script>

