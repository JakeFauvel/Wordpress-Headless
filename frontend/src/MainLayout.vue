<template>
  <div id="app">
    <div class="nav">
      <div class="left">
        <h1 class="brand-name">{{ siteConfig.siteName }}</h1>
      </div>
      <div class="right">
        <router-link to="/products">Products</router-link>
        <router-link to="/company">Company</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/service">Service</router-link>
        <router-link to="/sales">Sales</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import siteConfig from './mixins/config';

export default {
  name: 'Home',
  mixins: [siteConfig],

  beforeMount() {
    this.siteConfig = window.globalConfig;
  },

  data() {
    return {
      siteConfig: null
    }
  }
}
</script>
<style lang="scss">
  @import './styles/main-layout';
</style>
