<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-primary">
              <div class="card-header"><strong>LOGIN</strong></div>

              <div class="card-body">
                 <form @submit.prevent="doLogin">
                    <div class="row">
                        <div class="col-md-6">
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="text" class="form-control" v-model="loginForm.email">
                        </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                            <label>Password:</label>
                            <input type="password" class="form-control" v-model="loginForm.password">
                            </div>
                        </div>
                        </div><br />
                        <div class="form-group">
                        <button class="btn btn-primary">LOGIN</button>
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
          loginForm:{},
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
      doLogin(){
        /* start
        * Allow given code to server where API is store 
        // header('Access-Control-Allow-Origin: http://localhost:8082');
		// header('Access-Control-Allow-Headers: appType,language_id,version_id');

        end */

        var self = this;
        let uri = App.base_url+'empLogin';
        const config = { 
            headers: self.headerWithoutToken,
        }
        this.axios.post(uri,self.loginForm,config).then(response => {
            self.user_info = response.data;
            if(self.user_info.success == true){
                window.localStorage.setItem('user_data',JSON.stringify(self.user_info.data[0]));
                this.$router.push('/');
            }else{
                alert("Login not match");
                this.$router.push('/login');
            }
        });
      }
    }
  }
</script>