// code tutorial from https://medium.com/@anas.mammeri/vue-1-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue';
import router from './router/router';
import firebase from 'firebase';
import VueCarousel from 'vue-carousel';
import VueFire from 'vuefire';

Vue.use(VueCarousel);
Vue.use(Vuetify);
Vue.use(VueFire);

Vue.config.productionTip = false;

let app = '';
firebase.initializeApp({
  apiKey: "AIzaSyAmCr9Dkj6mTPqvqmMCG9_kE9uZBaw-zy4",
    authDomain: "store-6bef4.firebaseapp.com",
    databaseURL: "https://store-6bef4.firebaseio.com",
    projectId: "store-6bef4",
    storageBucket: "store-6bef4.appspot.com",
    messagingSenderId: "714390830667"
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});      

//export const data = firebase.database();