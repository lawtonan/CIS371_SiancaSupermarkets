
<template>
  <v-app style="padding: 70px 0px 0px;">

  <h1>CHOOSE BETTER</h1>
  <v-btn @click="sales">Display All</v-btn>
  <table>
                    <tr id="header" hidden= true>
                    <th >amount</th>
                    <th>department</th>
                    <th>name</th>
                    <th>price</th>
                    <th>sale</th>
                    <th>add/remove from cart</th>
                    <th>add/remove from cart</th>
                  </tr>
                  <template v-for="l in list">
                  <tr v-bind:key=l>
                    <td class>{{l.amount}}</td>
                      <td>{{l.department}}</td>
                      <td> {{l.name}} </td>
                      <td>{{l.price}}</td>
                      <td>{{l.sale}} </td>
                      <td><v-btn @click="add(l.name)" flat icon><v-icon>add</v-icon></v-btn>
                      <v-btn @click="remove(l.name)" flat icon><v-icon>remove</v-icon></v-btn></td>
                      <td><v-btn @click="addAdmin(l.name)" flat icon><v-icon>add</v-icon></v-btn>
                      <v-btn @click="removeAdmin(l.name)" flat icon><v-icon>remove</v-icon></v-btn></td>
                      <td><v-btn @click="addSale(l.name)" flat icon><v-icon>add</v-icon></v-btn>
                      <v-btn @click="removeSale(l.name)" flat icon><v-icon>remove</v-icon></v-btn></td>
                     </tr> 
                     </template>
  </table>
        
  </v-app>
</template>

<script>


//document.
import firebase from 'firebase';

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      item: "",
      items: [],
      list: [],
      results: [],
      password: '',
      bool:false
    }
  },
  methods: {
    addSale: function(current){
       alert(current);
       this.items = firebase.database().ref("store");
      this.items.orderByChild("name").equalTo(current).on('child_added', snap => {
          this.list.push(snap.val());
          this.items.push().set(snap.val());
      });
      },
      removeSale: function(current){
        alert(current);
     // this.items = firebase.database().ref("store").child();
      //this.remove = this.items.child(`store/{this.}`)
    },
    sales: function(){
      this.list = [];
      this.items = firebase.database().ref("store");
      this.items.orderByChild("sale").equalTo("yes").on('child_added', snap => {
        this.list.push(snap.val());
        console.log(snap.key);
        console.log(snap.val());
      });
    }
}
}
</script>

<style>
.header{
  visibility:"hidden";
}
</style>