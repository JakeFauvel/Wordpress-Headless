<template>
  <div id="app">
    <h1 class="brand-header">{{ siteConfig.siteName }}</h1>
  </div>
</template>

<script>
import * as API from './utils/api-calls';
import Config from './mixins/config';

export default {
  name: 'App',
  mixins: [Config],
  components: {
    // Components
  },

  data() {
    return {
      siteConfig: null
    }
  },

  beforeMount() {
    this.siteConfig = window.globalConfig;
  },

  mounted() {
    console.log('Site config:', this.siteConfig);
    this.makeRequest('/teppichfliesen-products-de');
    this.makeRequest('/site-details-de');
    this.makeRequest('/service-menu-de');
  },

  methods: {
    async makeRequest(resourcePath) {
      console.log(resourcePath, await API.getRequest(resourcePath));
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './styles/main.scss';
</style>
