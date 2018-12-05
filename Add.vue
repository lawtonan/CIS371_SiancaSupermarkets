
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
                  <tr>
                    <td class>{{l.amount}}</td>
                      <td>{{l.department}}</td>
                      <td> {{l.name}} </td>
                      <td>{{l.price}}</td>
                      <td>{{l.sale}} </td>
                     </tr> 
                     </template>
</table>
    <v-toolbar app>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="./home" icon><v-icon>home</v-icon></v-btn>
      </v-toolbar-items>
      <v-toolbar-title>Sianca Supermarkets</v-toolbar-title> 
      <v-spacer></v-spacer>
      <v-text-field @input="search" prepend-icon="search" single-line></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="./cart" icon><v-icon>shopping_cart</v-icon></v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      app
      right >
      <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-btn flat href="./home" icon><v-icon>home</v-icon></v-btn>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-group no-action>
        <v-list-tile slot="activator">
          <v-list-tile-title>Admin</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-btn flat href="./add" icon> <v-icon>add</v-icon></v-btn>
          </v-list-tile-action>
          <v-list-tile-title>Add Items</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-btn flat href="./sale" icon> <v-icon>attach_money</v-icon></v-btn>
          </v-list-tile-action>
          <v-list-tile-title>Sale Items</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-tile>
        <v-list-tile-action>
          <v-btn @click="logout" flat href="./" icon><v-icon>arrow_back</v-icon></v-btn>
        </v-list-tile-action>
        <v-list-tile-title>Logout</v-list-tile-title>
      </v-list-tile>


          <v-btn @click="display" >Duislap</v-btn>
        

    </v-list>
    </v-navigation-drawer>

    <router-view></router-view>

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
