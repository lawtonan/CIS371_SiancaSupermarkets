<template>
<v-app style="padding: 70px 0px 0px;">

    <h2>Departments</h2>
    <div>
        <v-btn color="primary" small href="./#/clothing">Clothing</v-btn>
        <v-btn color="success" small href="./#/Food">Food</v-btn>
        <v-btn color="warning" small href="./#/house">Home</v-btn>
    </div>
    <h1>Electronics</h1>
    <table v-if="view">
        <tr>
            <th>Amount</th>
            <th>Department</th>
            <th>Item</th>
            <th>Price</th>
            <th>Sale</th>
            <th>Add to Cart</th>
        </tr>
        <template v-for="l in list">
            <tr v-bind:key=l>
                <td class>{{l.amount}}</td>
                <td>{{l.department}}</td>
                <td>{{l.name}}</td>
                <td>{{l.price}}</td>
                <td>{{l.sale}}</td>
                <td><v-btn @click="purchase(l.name, l.price, l.amount)" color="success" icon><v-icon>add_shopping_cart</v-icon></v-btn></td>
            </tr>
        </template>
    </table>
</v-app>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'App',
    props: ['isAdmin'],
    data() {
        return {
            drawer: false,
            view: true,
            items: [],
            list: [],
            results: [],
        }
    },
    methods: {
        display: function () {
            this.list = [];
            this.add = false;
            this.items = firebase.database().ref("store");
            this.items.orderByChild("department").equalTo("electronics").on('child_added', snap => {
                this.list.push(snap.val());
            });
        },
        purchase: function (name, price, amount) {
            if (amount > 0) {
                this.items = firebase.database().ref("store");
                this.items.orderByChild("name").equalTo(name).on('child_added', snap => {
                    this.item = this.items.child(`${snap.key}/amount`);
                    this.item.set(amount - 1);
                    this.display();
                });
            }

            this.user = firebase.auth().currentUser.email;
            this.uname = this.user.split(".")[0];
            this.root = firebase.database().ref();
            this.child = this.root.child("users");
            this.child.push().set({
                user: this.uname,
                name: name,
                price: Number(price)
            });
            alert(this.uname);
        },
    },
    beforeMount() {
        this.display();
    }
}
</script>