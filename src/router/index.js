import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ShoppingCart from '@/components/ShoppingCart'
import CustomerList from '@/components/CustomerList'
import Example from '@/components/Example'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/customerlist',
      name: 'CustomerList',
      component: CustomerList
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
