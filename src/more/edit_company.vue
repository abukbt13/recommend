<template>
    <div class="d-flex align-content-center justify-content-center">
        <div class=" w-50" >
            <h2>Edit Company </h2>
            <form @submit.prevent="submit">
                <div class="form-group my-2">
                    <label for="">Company name</label>
                    <input type="text" class="form-control" v-model="state.company_name"  placeholder="Enter The Company">
                </div>
                <div class="form-group my-2">
                    <label for="">Company Url</label>
                    <input type="text" class="form-control" v-model="state.url"  placeholder="Enter The Company URL">
                </div>


                <button type="submit" class="btn btn-primary my-2 px-4">Update Company Details</button>
            </form>

        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import {computed, onMounted, reactive} from 'vue'
import {useRoute} from "vue-router";

const route = useRoute();

const state = reactive({
    company_name: '',
    url: '',
});

const id = computed(() => route.query.id);

const getCompany = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/edit_company/${id.value}`);
    if (res.status == 200) {
        console.log(res.data)
        state.company_name = res.data.company_name;
        state.url = res.data.url;
    }
}

onMounted(() => {
    getCompany();
});
</script>

