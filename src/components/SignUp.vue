<template>

<div class="login">
        <h2>Create an new account</h2>
          <v-layout>
    <v-flex xs12 sm8 offset-sm5>
        <v-layout align-center>
        <v-flex xs4 >
          <v-text-field
            full-width="false"
            v-model="email"
            label="Email"
            single-line
            solo
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            single-line
            solo
          ></v-text-field>
      </v-flex >
      </v-layout>
      </v-flex >
      </v-layout>
        <v-btn color="primary" @click="signUp">Sign Up</v-btn>
       <span>Return to <router-link to="/login">login</router-link>.</span>
    </div>





  
</template>

<script>
import firebase from 'firebase';

    export default {
        name: 'signUp',
        data(){
            return{
                email: '',
                password: ''
            }
        },
        methods: {
            signUp: function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    function (){
                        alert('Your account has been created')
                    },
                    function (err) {
                        alert(err.message)
                    }
                );
            }
        }
    }
</script>

<style scoped>

h2{
        padding:15px;
    }
    .signUp {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>