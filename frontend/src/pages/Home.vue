<template>
  <div class="home">
    <div>{{ siteConfig.siteName }}</div>
  </div>
</template>

<script>
import siteConfig from '../mixins/config';

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
