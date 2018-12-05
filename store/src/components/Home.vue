<template>
  <v-container style="padding: 70px 0px 0px;">
    <v-img aspect-ratio="5" :src="require('../assets/logoblack.png')">
    </v-img>
    <h1>SpotLight</h1>
    <carousel perPage=1 :navigationEnabled="true">
      <slide>
        <img :src="require('../assets/lemon.png')">
        <span>12.95</span>
        <v-btn href="./item">Details</v-btn>
      </slide>
      <slide>
        <img :src="require('../assets/lemon.png')">
        <img :src="require('../assets/avocado.jpg')">
      </slide>
      <slide>
        <img :src="require('../assets/lemon.png')">
        <img :src="require('../assets/avocado.jpg')">
        <img :src="require('../assets/orange.jpg')">
      </slide>
    </carousel>
    <h1>Sale</h1>
    <carousel perPage=1 :navigationEnabled="true">
      <slide>
        <img :src="require('../assets/lemon.png')">
      </slide>
      <slide>
        <img :src="require('../assets/lemon.png')">
        <img :src="require('../assets/avocado.jpg')">
      </slide>
      <slide>
        <img :src="require('../assets/lemon.png')">
        <img :src="require('../assets/avocado.jpg')">
        <img :src="require('../assets/orange.jpg')">
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