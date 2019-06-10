import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import About from '@/components/About';
import Collection from '@/components/Collection';
import Product from '@/components/Product';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
