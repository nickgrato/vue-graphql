<template>
<div class="product-page-wrapper">

    <!-- FEATURED PRODUCT  -->
    <div>
      <h2> Product Page </h2>
        <div v-if="featuredProduct">
            <div v-for="(imageContainer,i) in featuredProduct.images" :key="i" >
              <div v-for="(image,j) in imageContainer" :key="j">
                  <img :src="image.node.originalSrc" alt="works" style="width:500px; height: auto" />
              </div>
            </div>
        </div>
    </div>

    <div>
      <div> Name: {{featuredProduct.title}}</div>
      <div> Description: {{featuredProduct.description}}</div>
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
  name: 'Product',
  data () {
    return {
      featuredProduct:{}
    }
  },
  methods: {},
  created:function(){
    let productHandle = this.$route.params.id;
    console.log('productHandle',productHandle);
    dataService.getProductData(productHandle).then((resp)=>{
        console.log('product',resp);
        this.featuredProduct = resp.productByHandle;
    });
  }


}
</script>

<style>
  .product-page-wrapper{
    padding: 15px;
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>

