<template>
    <AdminHeader />
    <div class="d-flex align-content-center justify-content-center">
        <div class=" w-50" >
            <h2>Edit Company </h2>
                <h2 class="bg-success">{{message}}</h2>
            <form @submit.prevent="submit">
                <div class="form-group my-2">
                    <label for="">Company name</label>
                    <input type="text"  v-model="company_name"   class="form-control" >                </div>
                <div class="form-group my-2">
                    <label for="">Company Url</label>
                    <input type="text" class="form-control"   v-model="url"   placeholder="Enter The Company URL">
                </div>
                <input type="hidden" v-model="company_logo" id="">
                <img :src="'http://127.0.0.1:8000/storage/company/'+company_logo" style="width:200px; height: 100px;">
                <div class="my-2">
                    <label class="p-0" for="imagename"><b>Image</b></label>
                    <input type="file" @change="onFileChange"   id="title" class="form-control" />
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
import AdminHeader from "@/components/AdminHeader.vue";
const route=useRoute();
const company_name=ref('')
const company_logo=ref('')
const url=ref('')
const new_image=ref('')
const message=ref('')

const onFileChange=(e)=>{
    new_image.value=e.target.files[0];
}

const  getApplication = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/editit/${route.params.id}`);
    if(res.status==200){
        // console.log(res.data.company[0])
        company_name.value=res.data[0].company_name
        url.value=res.data[0].url
        company_logo.value=res.data[0].company_logo
    }

};

const submit= async () =>{
    if(!company_name.value){
        alert('Enter the company details')
    }
    else {
        const formData=new FormData();
        formData.append('company_name',company_name.value);
        formData.append('url',url.value);
        formData.append('new_image',new_image.value);
        formData.append('company_logo',company_logo.value);
        const res = await axios.post(`http://127.0.0.1:8000/api/update_company/${route.params.id}`,formData)
        if(res.status == 200){
            message.value = res.data
            // alert('company Successfully updated')
        }

    }
}
onBeforeMount(()=>{
    getApplication();
})

</script>

