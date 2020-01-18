<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">Recruiter Profile</div>

              <div class="card-body">
                 <table class="table table-striped">
                    <tbody>
                        <tr><td colspan="2"><img v-bind:src="user_data.user_pic"></td></tr>
                        <tr><td>Name </td><td>{{ user_data.first_name+' '+user_data.last_name }}</td></tr>
                        <tr><td>Email </td><td>{{ user_data.email }}</td></tr>
                        <tr><td>Email </td><td>{{ user_data.email }}</td></tr>
                        <tr><td>Contact No. </td><td>{{ user_data.mobile_number }}</td></tr>
                        <tr><td>Address </td><td>{{ user_data.address }}</td></tr>
                        <tr><td>Enterprise </td><td>{{ user_data.enterprise_name }}</td></tr>
                        <tr><td>city </td><td>{{ user_data.city }}</td></tr>
                    </tbody>
                 </table>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import Vue from 'vue';
import VueMeta from 'vue-meta';
Vue.use(VueMeta);

 export default {
        metaInfo: {
            title: "Create Component",
            meta: [
            { name: "description", content: "Learn coding with our free tutorials" },
            { name: "keywords", content: "react,vue,angular" }
            //you can also add open graph tags here
            ]
        },
        data(){
            return {
              post:{},
              user_data:{}
            //   base_url:
            }
        },
        mounted () {
          this.getUserData();
        },
        methods: {
          getUserData(){
            this.user_data = JSON.parse(window.localStorage.getItem('user_data'));
            console.log(this.user_data);
          }
        }
  }
</script>