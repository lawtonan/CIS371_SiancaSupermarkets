<template>
  <v-container style="padding: 0px 0px 0px;">
    <v-img aspect-ratio="5" :src="'https://greatist.com/sites/default/files/styles/fb-1200x630/public/wp-content/uploads/2011/11/Apples.jpg?itok=Cqn_I8Ms'"
    >
    </v-img>
    <h1>SpotLight</h1>
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
</template