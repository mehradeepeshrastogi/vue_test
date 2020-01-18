<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-primary">
              <div class="card-header"><strong>Candidate Search</strong></div>

              <div class="card-body">
              <button class="btn btn-info" style="float:right;" @click="nextRecord()">NEXT</button>
                <table class="table table-striped">
                    <tbody>
                         <tr><th>Profile Pic</th><th>Name</th><th>Distance</th><th>Matching Percentage</th></tr>
                        <tr v-if="!seeker_info.length">
                            <th colspan="4" class="text-center"><strong><i>Sorry, No seeker are found</i></strong></th>
                        </tr>
                        <tr v-else v-for="(seeker,index) in seeker_info" :key="index">
                            <td><img v-if="seeker.user_pic!=''" v-bind:src="seeker.user_pic" style="width: 85px;height: 85px;object-fit: contain;border-radius: 50%;border: 2px solid #bbb3b3;padding: 1px;"></td>
                            <td>{{ seeker.first_name+' '+seeker.last_name }}</td>
                            <td>{{ seeker.distance }} - {{ seeker.city }}</td>
                            <td>{{ seeker.matchingPercent }}</td>
                        </tr>
                    </tbody>
                </table>
                
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
            user_info:{},
            seeker_info:[],
            search_data:{
                        "skills":[],
                        "city":"",
                        "current_status":[],
                        "search_key":"henry",
                        "industry_type":[],
                        "start":"0",
                        "education_level":[],
                        "language":[],
                        "user_id":"",
                        "experience":[],
                        "mobility":[]
            },
            headerWithToken:{
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                'language_id':'2',
                'version_id':'1',
                'appType':'4',
                'login_user_id':'',
                'authKey':''
            },
            loading:false,
            error:false,
            }
        },
        mounted () {
            this.candidateSearch();
        },
        methods: {
        candidateSearch(){
            /* start
            * Allow given code to server where API is store 
            // header('Access-Control-Allow-Origin: http://localhost:8082');
            // header('Access-Control-Allow-Headers: appType,language_id,version_id');

            end */

            var self = this;
            self.user_data = JSON.parse(window.localStorage.getItem('user_data'));
            self.search_data.user_id = self.headerWithToken.login_user_id = self.user_data.user_id;
            self.headerWithToken.authKey = self.user_data.authKey;
            let uri = App.base_url+'candidateSearch';
            const config = { 
                headers: self.headerWithToken,
            }
            this.axios.post(uri,self.search_data,config).then(response => {
               
                if(response.data.success == true){
                    self.seeker_info = response.data.allCandidates;
                    console.log(self.seeker_info);
                }else{
                    // alert("Login not match");
                    // this.$router.push('/login');
                }
            });
        },
        nextRecord(){
            var self = this;
            self.search_data.start =  parseInt(self.search_data.start) + 10;
            self.candidateSearch();
        }
    }
  }
</script>