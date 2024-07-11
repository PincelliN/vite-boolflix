<script>
import Appheader from './components/Appheader.vue';
import { store } from './store.js';

export default {
  name: "App",
  components: {
    Appheader
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>
  <div class="container">
    <Appheader />
  </div>
</template>

<style lang="scss">
@use '/src/styles/general.scss'
</style>
