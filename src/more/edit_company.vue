<template>
    <div>
        <div v-for="company in companies" :key="company">

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
                        <img :src="'http://127.0.0.1:8000/storage/company/'+company.company_logo" style="width:100%; height: 14rem;">
                    </div>
                    <input type="file" class="form-control"  @change="onFileChange"   placeholder="Enter The Company">
                </div>

                <button type="submit" class="btn btn-primary my-2 px-4">Save Company Details</button>
            </form>

        </div>
    </div>
</template>

<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";

const route = useRoute();
const companies = ref([]);
const id = computed(() => route.query.id);

const company = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/edit_company/${id.value}`);
    if (res.status == 200) {
        companies.value = res.data;
    }
};

onMounted(() => {
    company();
});
</script>
