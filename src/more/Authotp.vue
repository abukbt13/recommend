<template>
    <Header/>
    <div class="container d-flex  align-items-center justify-content-center">


        <div class="col col-sm-12 col-md-6 col-lg-6 w-50">
            <form @submit.prevent="submit" autocomplete="on">
                <div class="naviated">
                    <p style="font-size: 32px;" class="px-3 text-info  text-xl-center"> Enter The OTP you have received in your Email:</p>

                </div>

                   <p class="bg-danger text-white text-center">{{error}}</p>


                <input type="number" v-model="otp"  class="form-control" placeholder="Enter email" required>

                <div class="d-flex justify-content-between pt-2">

                    <button type="submit" class="btn btn-outline-info">Continue &dash;</button>

                </div>
            </form>
        </div>

    </div>

</template>

<script setup>

import {computed, onMounted, reactive, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
const router = useRouter();
const route=useRoute();
import Header from "@/views/header.vue";
// const email=ref('');
const error=ref('');
const otp=ref('')
const email = computed(() => route.query.email);


const submit=async () => {
    const formData = new FormData();
    formData.append('email', email.value);
    formData.append('otp', otp.value);

    const res = await axios.post('http://127.0.0.1:8000/api/authotp', formData);
    if (res.status == 200) {
        error.value=res.data.error
        console.log(res.data)
        if(res.data='success') {
            router.push({
                path: '/resetPassword',
                query: {
                    email: email.value
                }
            });
        }
        else{
            error.value=res.data.error
        }
    }
}
</script>

<style scoped>
.container{
    width: 100vw;
    height: 100vh;
}
</style>