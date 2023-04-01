<template>
  <AdminHeader />
  <a href="/admindashboard" class="btn btn-success">Go Back</a>
  <table class="my-3 ps-5 pe-5 w-100 table table-bordered table-primary table-hover">
    <thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>First</th>
      <th>First</th>
      <th>First</th>
      <th colspan="2">Operation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Larry the Bird</td>
      <td>Larry the Bird</td>
      <td>Larry the Bird</td>
      <td><button class="btn btn-success">Edit</button></td>
    </tr>
    </tbody>
  </table>

</template>

<script setup>
import AdminHeader  from "@/components/AdminHeader.vue";

</script>

<style scoped>

</style>