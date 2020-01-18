<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-primary">
              <div class="card-header"><strong>Registration</strong></div>

              <div class="card-body">
                 <form @submit.prevent="doRegistration">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>First Name:</label>
                                <input type="text" class="form-control" v-model="registrationForm.first_name">
                            </div>
                        </div>
                    </div>


                     <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Last Name:</label>
                                <input type="text" class="form-control" v-model="registrationForm.last_name">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email:</label>
                                <input type="text" class="form-control" v-model="registrationForm.email">
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                            <label>Password:</label>
                            <input type="password" class="form-control" v-model="registrationForm.password">
                            </div>
                         </div>
                    </div>

                      <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>City:</label>
                                <input type="text" class="form-control" v-model="registrationForm.city">
                            </div>
                        </div>
                    </div>

                    <br />
                    <div class="form-group">
                        <button class="btn btn-primary">registration</button>
                    </div>
                </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import App from '../App.vue'
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
          registrationForm:{
              'latitude':'28.7041',
              'longitude':'77.1025',
              'enterprise_name':'test',
              'user_type':'employer'
          },
          user_info:{},
          headerWithoutToken:{
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            'language_id':'1',
            'version_id':'1',
            'appType':'4',
          },
          loading:false,
          error:false,
        }
    },
    methods: {
      doRegistration(){
        /* start
        * Allow given code to server where API is store 
        // header('Access-Control-Allow-Origin: http://localhost:8082');
		// header('Access-Control-Allow-Headers: appType,language_id,version_id');

        end */

        var self = this;
        let uri = App.base_url+'registration';
        const config = { 
            headers: self.headerWithoutToken,
        }
        console.log(self.registrationForm);
    
        this.axios.post(uri,self.registrationForm,config).then(response => {
            self.user_info = response.data;
            if(self.user_info.success == true){
                window.localStorage.setItem('user_data',JSON.stringify(self.user_info.data[0]));
                this.$router.push('/');
            }else{
                alert("sorry, you are not register");
                this.$router.push('/registration');
            }
        });
      }
    }
  }
</script>