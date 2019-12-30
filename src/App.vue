<template>
  <div id="app">
    <sample />
  </div>
</template>

<script>
import sample from './components/sample.vue'

export default {
  name: 'app',
  components: {
    sample
  }
}
</script>

<style lang="scss">
@import 'assets/scss/import.scss';
</style>
