<template>
    <div id="checkout">
        <v-container fluid>
            <table id="cart">
                <th><td>Item</td><td>Price</td></th>
                <template v-for="(item, index) in cart">
                <tr v-bind:key=item,index>
                    <td>{{item.name}}</td><td>{{item.price}}</td><td><button v-on:click="remove(index)">Remove from Cart</button></td>
                </tr>
                </template>
            </table>
        </v-container>
        <p id="subtotal">Subtotal: {{subtotal}}</p>
        <p id="total">Total: {{total}}</p>
        <v-btn v-on:click="getTotals">Calculate</v-btn>
        <v-flex xs4>
            <p>Card Number:</p>
            <v-text-field v-model="creditCard" placeholder="eg. 1111222233334444"/>
        </v-flex>
        <v-flex xs4>
            <p>Expiration Date:</p>
            <v-text-field v-model="expiration" placeHolder="eg. 11/22"/>
        </v-flex>
        <v-flex xs4>
            <p>Security Code:</p>
            <v-text-field v-model="security" placeHolder="eg. 123"/>
        </v-flex>
        <v-flex xs4>
            <p>Shipping Adress:</p>
            <v-text-field v-model="shipping"/>
        </v-flex>
        <v-flex xs4>
            <p>City:</p>
            <v-text-field v-model="city"/>
        </v-flex>
        <v-flex xs4>
            <p>State:</p>
            <v-text-field v-model="state"/>
        </v-flex>
    </div>
</template>


<script>

import { bus } from '../main';

export default {
    data() {
        return {
            cart: [],
            subtotal: 0,
            total: 0,
            creditCard: '',
            security: '',
            expiration: '',
            shipping: '',
            city: '',
            state: ''
        }
    },
    methods: {
        remove: function(index){
            this.cart.splice(index, 1);
        },
        getTotals: function(){
            let x = 0.00
            Object.entries(this.cart).forEach(([key, val]) => {
                x+=(val.price)});
            this.subtotal = x.toFixed(2);
            this.total = (this.subtotal * 1.06).toFixed(2);
        },
        createList: function(list){
            this.cart = list;
        }
    },

    
    mounted(){
        /*
        bus.$on('cartSent', data =>{
            this.cart = data;
            console.log("test");
        });*/
    }
};


</script>