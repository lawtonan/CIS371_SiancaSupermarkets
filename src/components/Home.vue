<template>
  <v-container style="padding: 70px 0px 0px;">
    <v-img aspect-ratio="5.5" :src="require('../assets/logoblack.png')">
    </v-img>
    <h1>Departments</h1>
    <carousel :perPage=2 :navigationEnabled="true">
      <slide>
        <div>
          <v-btn color="primary" to="Clothing">Clothing</v-btn>
        </div>
        <img :src="require('../assets/hanger.png')">
      </slide>
      <slide>
        <div>
          <v-btn color="error" to="Electronics">Electronics</v-btn>
        </div>
        <img :src="require('../assets/computer.png')">
      </slide>
      <slide>
        <div>
          <v-btn color="warning" to="Hosue">Home</v-btn>
        </div>
        <img :src="require('../assets/house.png')">
      </slide>
      <slide>
        <div>
          <v-btn color="success" to="Food">Food</v-btn>
        </div>
        <img :src="require('../assets/burger.png')">
      </slide>
      <slide>
         <div>
          <v-btn color="info" to="Sale">Sales</v-btn>
        </div>
         <img :src="require('../assets/dollar.png')">
      </slide>
      <!-- <slide>
        <img :src="require('../assets/logo.png')">
      </slide> -->
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