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
                    <input type="text" class="form-control"   v-model="language"   placeholder="Enter The Company URL">
                </div>
                <div class="form-group my-2">
                    <label for="">Type</label>
                    <input type="text" class="form-control"   v-model="type"   placeholder="Enter The Company URL">
                </div>
                <div class="form-group my-2">
                    <label for="">Least Pricing Storage</label>
                    <input type="text" class="form-control"   v-model="least_pricing_storage"   placeholder="Enter The Company URL">
                </div>
                <div class="form-group my-2">
                    <label for="">Can Host Free</label>
                    <input type="text" class="form-control"   v-model="can_host_free"   placeholder="Enter The Company URL">
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
const company_name=ref('')
const language=ref('')
const type=ref('')
const least_pricing_storage=ref('')
const can_host_free=ref('')



const  getApplication = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/edithostingdeail/${route.params.id}`);
    if(res.status==200){
        console.log(res.data)
        company_name.value=res.data[0].company_name
        language.value=res.data[0].language
        type.value=res.data[0].type
        least_pricing_storage.value=res.data[0].least_pricing_storage
        can_host_free.value=res.data[0].can_host_free
    }

};


const submit= async () =>{

        const formData=new FormData();
        formData.append('company_name',company_name.value);
        formData.append('language',language.value);
        formData.append('type',type.value);
        formData.append('least_pricing_storage',least_pricing_storage.value);
        formData.append('can_host_free',can_host_free.value);
        const res = await axios.post(`http://127.0.0.1:8000/api/update_hosting_details/${route.params.id}`,formData)
        if(res.status == 200){

            alert('company Successfully updated')
            getApplication();
        }
}
onBeforeMount(()=>{
    getApplication();
})

</script>

