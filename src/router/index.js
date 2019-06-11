import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import About from '@/components/About';
import Collection from '@/components/Collection';
import Product from '@/components/Product';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
