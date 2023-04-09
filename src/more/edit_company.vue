<template>
    <div class="upload d-flex flex-column align-items-center">
        {{ companies }}
        <div class="form">
            <h2>Upload company Details here</h2>

            <form @submit.prevent="submit">
                <div class="form-group my-2">
                    <label for="">Company name</label>
                    <input type="text" class="form-control" v-model="company_name"  placeholder="Enter The Company">
                </div>
                <div class="form-group my-2">
                    <label for="">Company Url</label>
                    <input type="text" class="form-control" v-model="url"  placeholder="Enter The Company URL">
                </div>
                <div class="form-group my-2">
                    <label for="">Picture</label>
                    <input type="file" class="form-control"  @change="onFileChange"   placeholder="Enter The Company">
                </div>

                <button type="submit" class="btn btn-primary my-2 px-4">Save Company Details</button>
            </form>
        </div>
<!--        {{companies}}-->



    </div>

</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
const route=useRoute()
const companies = ref()
const id = computed(() => route.query.id);
const company = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/edit_company/${id.value}`);
    if (res.status == 200) {
        companies.value = res.data;
        console.log(res.data);
    }
};

// alert(id)
// console.log(id);
onMounted(
    company(id.value)

)
</script>

<style scoped>

</style>