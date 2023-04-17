<template>
    <div class="d-flex align-content-center justify-content-center">
        <div class=" w-50" v-for="company in companies" :key="company">
            <h2>Edit Company Details</h2>
            <form @submit.prevent="submit">
                <div class="form-group my-2">
                    <label for="">Company name</label>
                    <input type="text" class="form-control" v-model="company.company_name"  placeholder="Enter The Company">
                </div>
                <div class="form-group my-2">
                    <label for="">Company Url</label>
                    <input type="text" class="form-control" v-model="company.url"  placeholder="Enter The Company URL">
                </div>
                <div class="form-group my-2">
                    <label for="">Image</label>
                    <div class="card-body">
                        <img :src="'http://127.0.0.1:8000/storage/company/'+company.company_logo" style="width:60%; height: 14rem;">
                    </div>
                    <input type="file" class="form-control"  @change="onFileChange"   placeholder="Enter The Company">
                </div>

                <button type="submit" class="btn btn-primary my-2 px-4">Update Company Details</button>
            </form>

        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import {computed, onMounted, ref} from 'vue'
import {useRoute} from "vue-router";
import async from "async";
// const message=ref('');

const route = useRoute();
const companies = ref([]);
const id = computed(() => route.query.id);
const company_name = ref('');
const url = ref('');
const company_logo = ref(null);

const onFileChange=(e)=>{
    new_image.value=e.target.files[0];
}
const company = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/edit_company/${id.value}`);
    if (res.status == 200) {
        companies.value = res.data;
        company_name.value = res.data.company_name;
        url.value = res.data.url;
    }
};

const submit= async () =>{
    if(!title.value){
        alert('Please select a title')
    }
    else {
        const formData=new FormData();
        formData.append('title',title.value);
        formData.append('image',image.value);
        formData.append('new_image',new_image.value);
        const res = await axios.post(`http://127.0.0.1:8000/api/update_image/${route.params.id}`,formData)
        if(res.status==200){
            alert('successfully updated')
            getImage()
        }
    }
}
onMounted(() => {
    company();
});
</script>