<script>
import axios from "axios";
import Appheader from './components/Appheader.vue';
import { store } from "./store";

export default {
  name: "App",
  components: {
    Appheader
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {
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
@use './styles/general.scss'
</style>
