<div class="card" >
<div class="card-header text-center">
  <span>{{bestfrontends.company_name}}</span>
</div>
<div class="card-body">
  <img :src="'http://127.0.0.1:8000/storage/company/'+bestfrontends.company_logo" style="width:100%; height: 14rem;">
  <p>This is best frontend</p>
</div>

<div class="card-footer">
  <button   class="btn w-100 btn-danger text-white btn-outline-info">view More Details</button>

</div>
</div>
<div class="card" >
<div class="card-header text-center">
  <span>{{bestbackends.company_name}}</span>
</div>
<div class="card-body">
  <img :src="'http://127.0.0.1:8000/storage/company/'+bestbackends.company_logo" style="width:100%; height: 14rem;">
  <p>This is best frontend</p>
</div>

<div class="card-footer">
  <button   @click="showId(bestbackends.id)" class="btn w-100 btn-danger text-white btn-outline-info">view More Details</button>

</div>
</div>

<div class="card" v-for="other in othercompanies" :key="other" @mouseleave="showContent">
<div class="card-header text-center">
  <span>{{other.company_name}}</span>
</div>
<div class="card-body">
  <img :src="'http://127.0.0.1:8000/storage/company/'+other.company_logo" style="width:100%; height: 14rem;">
  <p>hello world</p>
</div>
<div class="card-footer">
  <button   @click="fetchDetails(other.id)" class="btn w-100 btn-danger text-white btn-outline-info">view More Details</button>
</div>
</div>




<!--User Centered-->



<h2>Most people also love</h2>
<!--      <div class="usercard">-->
<!--        <div class="card" v-for="alsoloved in alsoloveds" :key="alsoloved" @mouseleave="showContent">-->
<!--          <div class="card-header text-center">-->
<!--            <span>{{alsoloved.company_name}}</span>-->
<!--          </div>-->
<!--          <div class="card-body">-->
<!--            <img :src="'http://127.0.0.1:8000/storage/company/'+alsoloved.company_logo" style="width:100%; height: 14rem;">-->
<!--            <p>hello world</p>-->
<!--          </div>-->
<!--          <div class="card-footer">-->
<!--            <button   @click="showId(company.id)" class="btn float-end btn-danger text-white btn-outline-info">view More Details</button>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
<!--</div>-->
<!--    <div class="companies"   v-else="{usernamedetails}">-->
<!--        <div class="card" v-for="company in companies" :key="company" @mouseleave="showContent">-->
<!--          <div class="card-header text-center">-->
<!--            <span>{{company.company_name}}</span>-->
<!--          </div>-->
<!--          <div class="card-body">-->
<!--            <img :src="'http://127.0.0.1:8000/storage/company/'+company.company_logo" style="width:100%; height: 14rem;">-->
<!--            <p>hello world</p>-->
<!--          </div>-->
<!--          <div class="card-footer">-->
<!--           <button   @click="fetchDetails(company.id)" class="btn w-100 btn-danger text-white btn-outline-info">view More Details</button>-->
<!--          </div>-->
<!--        </div>-->

<!--    </div>-->