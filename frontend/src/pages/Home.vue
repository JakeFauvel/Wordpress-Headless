<template>
  <div class="home">
    <div>{{ siteConfig.siteName }}</div>
  </div>
</template>

<script>
export default {
  name: 'Home',

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
