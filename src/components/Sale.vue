<template>
<v-app style="padding: 70px 0px 0px;">

    <h1>Sales Page</h1>
    <div>
        <v-btn @click="sales">Display Sales</v-btn>
        <v-btn @click="notSales">Display Not Sales</v-btn>
    </div>
    <table>
        <tr id="header">
            <th>Amount</th>
            <th>Department</th>
            <th>Name</th>
            <th>Price</th>
            <th>Sale</th>
            <th v-if="isAdmin && add">Add Sale</th>
            <th v-if="isAdmin && !add">Remove Sale</th>
        </tr>
        <template v-for="l in list">
            <tr v-bind:key=l>
                <td class>{{l.amount}}</td>
                <td>{{l.department}}</td>
                <td> {{l.name}} </td>
                <td>{{l.price}}</td>
                <td>{{l.sale}} </td>
                <td v-if="isAdmin">
                    <v-btn v-if="add" @click="addSale(l.name)" icon>
                      <v-icon>add</v-icon>
                    </v-btn>
                    <v-btn v-if="!add" @click="removeSale(l.name)" icon>
                        <v-icon>clear</v-icon>
                    </v-btn>
                </td>
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
    props: ['isAdmin'],
    data() {
        return {
            drawer: false,
            item: "",
            items: [],
            list: [],
            results: [],
            password: '',
            bool: false,
            add: false
        }
    },
    methods: {
        addSale: function (current) {
            alert(current);
            this.items = firebase.database().ref("store");
            this.items.orderByChild("name").equalTo(current).on('child_added', snap => {
              this.item = this.items.child(`${snap.key}/sale`);
              this.item.set("yes");
            });
            this.notSales();
        },
        removeSale: function (current) {
            alert(current);
            this.items = firebase.database().ref("store");
            this.items.orderByChild("name").equalTo(current).on('child_added', snap => {
              this.item = this.items.child(`${snap.key}/sale`);
              this.item.set("no");
            });
            this.sales();

        },
        sales: function () {
            this.list = [];
            this.add = false;
            this.items = firebase.database().ref("store");
            this.items.orderByChild("sale").equalTo("yes").on('child_added', snap => {
                this.list.push(snap.val());
                // console.log(snap.key);
                // console.log(snap.val());
            });
        },
        notSales: function () {
            this.list = [];
            this.add = true;
            this.items = firebase.database().ref("store");
            this.items.orderByChild("sale").equalTo("no").on('child_added', snap => {
                this.list.push(snap.val());
                // console.log(snap.key);
                // console.log(snap.val());
            });
        }
    }
}
</script>

<style>
.header {
    visibility: "hidden";
}
</style>
