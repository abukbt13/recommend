<template>
  <Header />

  <div v-show="register" class="container  d-flex align-items-center justify-content-center">

      <!--      <label for="">{{error}}</label>-->
      <div class="col col-sm-12 col-md-6 col-lg-6 w-50">
        <form @submit.prevent="submit" autocomplete="on">
        <div class="naviated">
          <p style="font-size: 32px;" class="px-3 text-info  text-xl-center">Register Now </p>

        </div>
          <ul class="">
            <li class="bg-danger text-white p-3" v-for="error in errors" :key="error">
              {{ error }}
            </li>
          </ul>
        Name:
          <input type="text" v-model="name"  class="form-control" placeholder="Enter Full Name" required>
          Email:
          <input type="email" v-model="email"  class="form-control" placeholder="Enter Email" required>
           Languages Type:
          <select class="form-control" v-model="language_type">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="other">Other</option>
          </select>
          Occupation:
          <p>Are you a software developer</p>
          <select class="form-control" v-model="occupation">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          Password:
          <input type="password" v-model="password"  class="form-control" placeholder="Enter Password" required>

          <div class="d-flex justify-content-between pt-2">
            <div class="">
            <button type="submit" class="btn btn-outline-info">Register</button>
            </div>
            <div class="form-group d-flex">
              <p>Have  an account ? <a href="login" type="submit" class="btn btn-primary">Login here</a></p>

            </div>

          </div>
      </form>
      </div>

  </div>
  <div class="loader p-4" v-show="loader">
    <p class="text-center">Your are being registered</p>
      <div class="d-flex flex-row align-items-center justify-content-center">
        <p>Registering</p>
        <div style="font-size: 40px; width: 4rem;height: 4rem;" class="spinner-border spiner-border-lg"></div>
      </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

    const name = ref('');
    const email = ref('');
    const password = ref('');
    const occupation = ref('');
    const language_type = ref('');
    const errors = ref([]);
    const message = ref('');
    const loader = ref(false);
    const register = ref(true);
    const router = useRouter();
    // const body=document.getElementsByName('body')

    const submit = async () => {
      // body.style.backgrount='black'
      register.value = false;
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('email', email.value);
      formData.append('password', password.value);
      formData.append('occupation', occupation.value);
      formData.append('language_type', language_type.value);


      loader.value = true;

      try {
        const res = await axios.post('http://127.0.0.1:8000/api/register', formData);
        if (res.status == 200) {
          errors.value = res.data.errors;
          message.value = res.data.message;
          router.push('/verify');
        }
      } catch (error) {
        alert('error in network');
      } finally {
        loader.value = false;
      }




}


</script>
<style scoped>
.container{
  width: 100vw;
  height: 84vh;
}
.col{
  width: 12rem;
}
.loader{
  background-color: #227093;
  width: 30rem;
  height: 20rem;
  position: fixed;
  left: 30vw;
  top:30vh;
  z-index: 1;
}

</style>