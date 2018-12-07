<template>
<v-app style="padding: 70px 0px 0px;">

    <h1>Add or Remove Items</h1>
    <!-- <div>
        <v-btn @click="remove">Remove Items</v-btn>
        <v-btn @click="add">Add Items</v-btn>
    </div> -->
    <table v-if="view">
        <tr>
            <th>Amount</th>
            <th>Department</th>
            <th>Item</th>
            <th>Price</th>
            <th>Sale</th>
            <th>Remove Item</th>
        </tr>
        <template v-for="l in list">
            <tr v-bind:key=l>
                <td class>{{l.amount}}</td>
                <td>{{l.department}}</td>
                <td>{{l.name}}</td>
                <td>{{l.price}}</td>
                <td>{{l.sale}}</td>
                <td>
                    <v-btn color="green" @click="addItem(l.name, l.amount)" icon>
                        <v-icon>add</v-icon>
                    </v-btn>
                    <v-btn color="red" @click="removeItem(l.name, l.amount)" icon>
                        <v-icon>remove</v-icon>
                    </v-btn>
                </td>
            </tr>
        </template>
    </table>

    <v-card ref="form" v-if="!view">
        <v-card-text>
          <v-text-field
            ref="amount"
            v-model="amount"
            :rules="[() => !!amount || 'This field is required']"
            :error-messages="errorMessages"
            label="Amount"
            @input="$v.amount.$touch()"
            placeholder="ex: 50"
            required
          ></v-text-field>
          <v-autocomplete
            ref="department"
            :rules="[() => !!department || 'This field is required']"
            :items="departments"
            v-model="department"
            label="Department"
            @input="$v.department.$touch()"
            required
            placeholder="Select ... "
          ></v-autocomplete>
          <v-text-field
            ref="item"
            :rules="[() => !!item || 'This field is required']"
            v-model="item"
            label="Item"
            @input="$v.item.$touch()"
            placeholder="ex: Banana"
            required
          ></v-text-field>
          <v-text-field
            ref="price"
            v-model="price"
            :rules="[() => !!price || 'This field is required']"
            label="Price"
            @input="$v.price.$touch()"
            required
            placeholder="ex: 1.20"
          ></v-text-field>
          <v-autocomplete
            ref="sale"
            :rules="[() => !!sale || 'This field is required']"
            :items="value"
            v-model="sale"
            label="Sale"
            @input="$v.sale.$touch()"
            required
            placeholder="yes / no"
          ></v-autocomplete>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="createItem()">Add</v-btn>
        </v-card-actions>
      </v-card>

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
            value: ["yes", "no"],
            departments: ["food", "electronics", "clothing", "home"],
            ammount: '',
            item: '',
            price: '',
            dselect: null,
            sselect: null
        }
    },
    methods: {
        add: function() {
          this.view = false;
        },
        remove: function() {
          this.view = true;
        },
        display: function () {
            this.list = [];
            this.items = firebase.database().ref("store");
            this.items.on('child_added', snap => {
                this.list.push(snap.val());
            });
            //this.list = snap.val();
        },
        // ADDS ITEMS FOR ADMIN
        addItem: function(current, amount){
          this.items = firebase.database().ref("store");
          this.items.orderByChild("name").equalTo(current).on('child_added', snap => {
            this.item = this.items.child(`${snap.key}/amount`);
            this.item.set(amount+1);
            this.display();
          });
        },
        removeItem: function(current, amount){
          this.items = firebase.database().ref("store");
          this.items.orderByChild("name").equalTo(current).on('child_added', snap => {
            this.item = this.items.child(`${snap.key}/amount`);
            this.item.set(amount-1);
            this.display();
          });
        },
        createItem: function(){
          console.log(this.ammount)
          // this.child.push.set({ammount: })
        }
    },
    beforeMount() {
        this.display();
    }
}
</script>

