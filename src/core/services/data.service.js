import { GraphQLClient } from "graphql-request";
import Query from '../const/product.query.const';
import { QueryService} from './query.service';

const STORE='https://XXXXXX.myshopify.com/api/graphql'
const TOKEN ='XXXXXX'
const client = new GraphQLClient(STORE, { headers: {  "X-Shopify-Storefront-Access-Token": TOKEN} })
const queryService = new QueryService();


export class DataService {

    getData = new Promise((resolve,reject)=>{
        client.request(Query.DataQuery).then(data => {
          this.data = data;
          resolve(data)
        })
    })

    /**
      * GET PRODUCTS
    */
    getProducts = new Promise((resolve,reject)=>{
        this.getData.then((data)=>{
          resolve(data.shop.products.edges)
        })
    });


    getProductData(handleId){
      let promise = new Promise((resolve,reject)=>{
        // Get Graphql query
        let productQuery = queryService.getProductQuery(handleId);
        // Fetch query data
        client.request(productQuery).then(data => {
            resolve(data)
        })
      });
      return promise;
    }

    /**
      * GET SHOP DATA
    */
    getShopData = new Promise((resolve,reject)=>{
      this.getData.then((data)=>{
        console.log(data);
        resolve(data.shop)
      })
    });

}

