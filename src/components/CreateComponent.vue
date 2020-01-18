<template>
  <div>
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="post.body" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
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
          post:{},
        //   base_url:
        }
    },
    methods: {
      addPost(){
        var user_data = window.localStorage.getItem('user_data');
        console.log(JSON.parse(user_data));
        // console.log(this.post);
        console.log(App.base_url);
        // let uri = 'http://localhost:4000/posts/add';
        // this.axios.post(uri, this.post).then(() => {
        // this.$router.push({name: 'posts'});
    // });
      }
    }
  }
</script>