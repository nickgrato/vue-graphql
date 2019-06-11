<template>
  <div class="home-page-wrapper">
    <h1>{{ msg }}</h1>
    <p>In src > core > data.service.js</p>
    <p>Add shopify name to URL to const STORE='https://XXXXXX.myshopify.com/api/graphql'<p>

    <h3>Get Shopify token</h3>
    <ol>
      <li>Manage private apps</li>
      <li>Choose private app or create new one</li>
      <li>Enable Storefront access token</li>
      <li>Add key to const TOKEN ='XXXXXXXXXXXXXXXX'</li>
    </ol>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Vue GraphQl App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page-wrapper{
  padding: 15px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
