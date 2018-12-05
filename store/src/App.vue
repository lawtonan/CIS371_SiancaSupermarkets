<template>
  <v-app>
    <v-toolbar app v-if="isLogin">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="./#/home" icon><v-icon>home</v-icon></v-btn>
      </v-toolbar-items>
      <v-toolbar-title>Sianca Supermarkets</v-toolbar-title> 
      <v-spacer></v-spacer>
      <v-text-field prepend-icon="search" single-line></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="./#/cart" icon><v-icon>shopping_cart</v-icon></v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      app
      right
    >
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
            <v-btn flat href="./#/add" icon> <v-icon>add</v-icon></v-btn>
          </v-list-tile-action>
          <v-list-tile-title>Add Items</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-btn flat href="./#/sale" icon> <v-icon>attach_money</v-icon></v-btn>
          </v-list-tile-action>
          <v-list-tile-title>Sale Items</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-tile>
        <v-list-tile-action>
          <v-btn flat href="./#/" icon><v-icon>arrow_back</v-icon></v-btn>
        </v-list-tile-action>
        <v-list-tile-title>Logout</v-list-tile-title>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>

    <router-view></router-view>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
    }
  },
  computed:{
      isLogin(){
          return this.$route.path !== '/login'
      },
      isSign(){
          return this.$route.path !== '/sign-up'
      }
  },
  name: 'App'
}
</script>

<style>
#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 70px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
