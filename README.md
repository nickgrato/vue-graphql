# Objective

> This is a "sandbox" application to impliment VueJS and GraphQl.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Configure API

In src > core > data.service.js

Add shopify name to URL.
const STORE='https://XXXXXX.myshopify.com/api/graphql'

Get Shopify token
1. Manage private apps
2. Choose private app or create new one
3. Enable Storefront access token

const TOKEN ='XXXXXXXXXXXXXXXX'