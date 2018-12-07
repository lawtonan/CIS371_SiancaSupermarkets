<template>
<div id="checkout" style="padding: 70px 30% 0px;">
    <v-container fluid>
        <table>
            <tr id="header">
                <th>name</th>
                <th>price</th>
            </tr>
            <template v-for="(l, index) in list">
                <tr v-bind:key="l,index">
                    <td> {{l.name}} </td>
                    <td>{{l.price}}</td>
                    <v-btn v-on:click="remove(index)">Remove from Cart</v-btn>
                </tr>
            </template>
        </table>
    </v-container>
    <p id="subtotal">Subtotal: {{subtotal}}</p>
    <p id="total">Total: {{total}}</p>
    <v-btn v-on:click="getTotals">Calculate</v-btn>

</div>
</template>

<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            list: [],
            subtotal: 0,
            total: 0,
            name: "", 
            price: 0, 
            uname: ""
        }
    },
    methods: {
        remove: function (index) {
            this.list.splice(index, 1);
            this.getTotals();
        },
        getTotals: function () {
            let x = 0.00
            Object.entries(this.list).forEach(([key, val]) => {
                x += (val.price)
            });
            this.subtotal = x.toFixed(2);
            this.total = (this.subtotal * 1.06).toFixed(2);
        },
        display: function (current) {
            this.list = [];
            this.items = firebase.database().ref("users");
            this.items.orderByChild("user").equalTo(current).on('child_added', snap => {
                this.name = (snap.val().name);
                console.log(this.name);
                this.price = (snap.val().price);
                console.log(this.price);
                this.list.push({
                    name: this.name,
                    price: this.price
                });
                console.log(this.list);
            });

        }

    },
    mounted() {
        this.user = firebase.auth().currentUser.email;
        this.uname = this.user.split(".")[0];

        this.display(this.uname);
        this.getTotals();
    }

};
</script>
