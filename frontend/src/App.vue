<template>
  <div id="app">
    <h1 class="brand-header">Example Brand Name</h1>
  </div>
</template>

<script>
import * as api from './utils/api-calls';

export default {
  name: 'App',
  components: {
    // Components
  },

  mounted() {
    this.makeRequest('/teppichfliesen-products-de');
  }
  ,
  methods: {
    async makeRequest(resourcePath) {
      console.log(await api.getRequest(resourcePath));
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
}
</style>
