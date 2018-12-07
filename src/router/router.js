import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';


import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import Add from '@/components/Add.vue';
import Sale from '@/components/Sale.vue';
import Cart from '@/components/Cart.vue';
import Search from '@/components/Search.vue';
import Item from '@/components/Item.vue';
import Clothing from '@/components/Clothing.vue';
import Electronics from '@/components/Electronics.vue';
import Food from '@/components/Food.vue';
import House from '@/components/House.vue';



Vue.use(Router);

const router = new Router({
  routes: [

    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login',
      component: Login
    },

    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/sale',
      name: 'Sale',
      component: Sale
    },
    {
      path: '/clothing',
      name: 'Clothing',
      component: Clothing
    },
    {
      path: '/electronics',
      name: 'Electronics',
      component: Electronics
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/house',
      name: 'House',
      component: House
    },
    
    
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  next();
  // if (requiresAuth && !currentUser) next('login');
  // else if (!requiresAuth && currentUser) next('home');
  // else next();
});


export default router;