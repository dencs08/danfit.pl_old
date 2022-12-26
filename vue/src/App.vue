<template>
  <Banner class="z-[9999]"></Banner>
  <router-view></router-view>
</template>

<script  lang="ts">
import { Banner } from './components'
export default {
  components: {
    Banner
  }
}
</script>

<style lang="scss">
@import './styles/app.scss';
</style>
