<template>
  <div class="about-page-wrapper">
    <h3>About Page</h3>
    <div class="flex">
      <p>This is the about page, just a simple page to show some layout.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.about-page-wrapper{
  padding: 15px;
}
</style>
