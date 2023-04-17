<template>
    <AdminHeader />
    <table class="my-3 ps-5 pe-5 w-100 table table-bordered table-primary table-hover">
        <thead>
        <tr>
            <td colspan="6" class="text-center">People Applications to advertise their hosting companies</td>
        </tr>
        <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Component URL</th>
            <th>Company LOGO</th>
            <th colspan="2">Operation</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="application in applications" :key="application" class="text-center">
            <td>{{ application.id}}</td>
            <td>{{ application.company_name}}</td>
            <td class="p-5">{{ application.user_id }}</td>
            <td class="p-5">{{ application.description }}</td>
            <td class="p-5"><button class="btn btn-danger" @click="sendFeedback(application.id)">Accept</button></td>
        </tr>
        </tbody>
    </table>
</template>

<script setup>
import AdminHeader  from "@/components/AdminHeader.vue";
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
const applications= ref ([]);
const router =useRouter()
const messages =ref('')
const getCompanies=async () => {
    // console.log('hjkl')
    const ress = await axios.get('http://127.0.0.1:8000/api/show_application');
    if (ress.status == 200) {
        applications.value=ress.data;
        console.log(ress.data);
    }
}
const  sendFeedback = async (id) =>{
    const ress = await axios.get(`http://127.0.0.1:8000/api/accept_application/${id}`);
    if (ress.status == 200) {
       messages.value=ress.data;
        console.log(company_details.value);
    }
}
onMounted(()=> {
    getCompanies();
})
</script>

<style scoped>
.upload{
    position: absolute;
    top: 4rem;
    left: 8rem;
    margin-top: 4rem;
    padding: 2rem;
}
form{
    width: 50vw;
    padding: 1rem;

}
</style>