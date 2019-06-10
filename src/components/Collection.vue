<template>
  <div class="collection-page-wrapper">
    <h3>Example Colleciton</h3>
    <div v-if="products" style="display: flex; flex-wrap:wrap">
      <div v-for="(product,index) in products" :key="index" class="product-card">
        {{product.node.title}}
        <div v-if="product.node.images.edges.length == 0 ">
          <h1>NO IMAGE 😢 </h1>
        </div>
        <div v-else>
          <div v-for="(image,index) in product.node.images.edges" :key="index" >
            <img :src="image.node.originalSrc" alt="works" style="width:200px; height: auto" />
          </div>
        </div>
        <!-- <button v-on:click="addToCart(product.node.id)">
          ADD TO CART
        </button> -->
        <button class="button-primary">
           <router-link :to="{ path: 'product/' + product.node.handle }">VIEW PRODUCT</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { DataService } from '../core/services/data.service';

/**
 * Services
 */
const dataService = new DataService();

export default {
  name: 'Collection',
  data () {
    return {
      products:[]
    }
  },
  methods: {
  },
  created:function(){
    dataService.getProducts.then((resp)=>{
        this.products = resp;
    });
  }
}
</script>

<style>
.product-card{
  border:rgb(206, 206, 206) solid 1px;
  padding: 15px;
  margin: 5px;
}
.collection-page-wrapper{
  padding: 15px;
}
</style>