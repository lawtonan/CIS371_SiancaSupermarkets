<template>
  <v-container style="padding: 70px 0px 0px;">
    <v-img aspect-ratio="5" :src="require('../assets/logoblack.png')">
    </v-img>
    <h1>Departments</h1>
    <carousel perPage=2 :navigationEnabled="true">
      <slide>
        <v-btn flat><img :src="require('../assets/hanger.png')"></v-btn>
      </slide>
      <slide>
        <v-btn flat><img :src="require('../assets/computer.png')"></v-btn>
      </slide>
      <slide>
        <v-btn flat><img :src="require('../assets/house.png')"></v-btn>
      </slide>
      <slide>
         <v-btn flat><img :src="require('../assets/burger.png')"></v-btn>
      </slide>
      <slide>
         <v-btn flat href="./#/sale"><img :src="require('../assets/dollar.png')"></v-btn>
      </slide>
      <slide>
        <img :src="require('../assets/logo.png')">
      </slide>
    </carousel>
  </v-container>
</template>
<script>
import firebase from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
      this.$router.replace('login')
    })
    }
  }
}
</script>