
import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'HelloWorld' },
  { path: '/home', component: 'Home' },
  { path: '/cart', component: 'Cart' },
  { path: '/add', component: 'Add' },
  { path: '/search', component: 'Search' },
  { path: '/item', component: 'Item' },
  { path: '/signUp', component: 'SignUp' },
  { path: '/login', component: 'Login' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})