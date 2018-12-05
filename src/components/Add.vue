
<template>
  <v-app>

  <h1>PROOF IT IS DIIFERENT</h1>
  <table>
    <tr>
        <th>name</th>
        <th>email</th>
        <th>username</th>
        <th>phone</th>
        <th>birthdate</th>
        <th>image</th>
    </tr>
    <template v-for="l in list">
        <tr v-bind:key=l>
            <td class>{{l.amount}}</td>
            <td>{{l.department}}</td>
            <td> {{l.name}} </td>
            <td>{{l.price}}</td>
            <td>{{l.sale}} </td>
        </tr> 
    </template>
 </table>

  </v-app>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      
      items: [],
      list: [],
      results: []
    }
  },
  methods: {
    
    search: function(){
      for (var i = 0; i < this.list.length; i++){
        if (this.list[i][this.list.name]){
          this.results.push(this.list[i]);
        }
      }
      
    },
    logout: function(){
      
      firebase.auth().signOut().then(() => {
      this.$router.replace('login')
    })
    },
    display: function(){
      this.items = firebase.database().ref("store");
      this.items.on('child_added', snap => {
        this.list.push(snap.val());
        console.log(snap.key);
        console.log(snap.val());
        
      });
      //this.list = snap.val();
    }
    },
    beforeMount(){
        this.display();
}
}
</script>