import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
import CandidateSearchComponent from './components/CandidateSearchComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      meta: {
        title: 'Home Page - Example App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      },
      component: HomeComponent
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  },
  {
    name: 'login',
    path: '/login',
    component: LoginComponent
  },
  {
    name: 'registration',
    path: '/registration',
    component: RegisterComponent
  },
  {
    name: 'candidate_search',
    path: '/candidate-search',
    component: CandidateSearchComponent
  }
];
const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');