<template>
  <div id="app">
    <div class="main-nav">
      <div  class="flex-align-center">
        <img class="main-nav-logo" src="./assets/logo.png">
         <h3><router-link to="/">{{shop.name}}</router-link></h3>
      </div>

      <div class="nav-links">
          <div class="nav-link">
           <router-link to="/collection">COLLECTIONS</router-link>
        </div>
        <div class="nav-link">
           <router-link to="/about">ABOUT</router-link>
        </div>
      </div>
    </div>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import { GraphQLClient } from "graphql-request";
import { DataService } from './core/services/data.service';


/**
 * Services
 */
const dataService = new DataService();

export default {
  name: 'app',
  data () {
    return {
      products:[],
      shop:[],
      featuredProduct:{}
    }
  },
  methods: {
    addToCart (itemId){
      console.log('item id',itemId);
    },
    async getProductClick (handleId){
      dataService.getProductData(handleId).then((resp)=>{
        console.log('product',resp);
        this.featuredProduct = resp.productByHandle;
      });
    },
    async getShopData () {
      dataService.getShopData.then((resp)=>{
        this.shop = resp;
      });
    }
  },
  created:function(){
    dataService.getProducts.then((resp)=>{
        this.products = resp;
    });
    dataService.getShopData.then((resp)=>{
        this.shop = resp;
    });
  }


}
</script>

<style>
body{
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.product-card{
  border:rgb(206, 206, 206) solid 1px;
  padding: 15px;
  margin: 5px;
}
.main-nav{
  background-color: rgb(216, 240, 216);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px 0px 5px;
}
.main-nav-logo{
  width: 30px;
  height: auto;
  margin-right: 10px;
}
.nav-link{
  font-size: 14px;
  margin-left: 10px;
}
.nav-links{
  display: flex;
  align-items: center;
}
.nav-link a{
  text-decoration: none;
  color: #666;
}
.nav-link a:hover{
  font-weight: 600;
}
.nav-link .router-link-active{
  font-weight: 600;
}
.button-primary{
 border: 1px solid #666;
 text-decoration:none;
}
.button-primary a{
  text-decoration: none;
  color: #666;
}
.flex-align-center{
  display: flex;
  align-items: center;
}
h3 a{
  text-decoration: none!important;
  color: #666;
}

.margin-top-20{
  margin-top: 20px;
}

</style>