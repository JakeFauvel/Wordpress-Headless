<template>
  <div class="home">
    <h1>HOMEPAGE CONTENT</h1>
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
<style lang="scss" scoped>
  @import '../styles/pages/home';
</style>
