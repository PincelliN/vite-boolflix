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
      let MovieApi = store.movielistApi + store.filterApi + "&num=20&offset=0";
      console.log(MovieApi);
      axios.
        get(MovieApi)
        .then(res => {
          console.log(res.data.results);
          store.movieList = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
}

</script>

<template>
  <Appheader @search="getMovies" />

</template>

<style lang="scss">
@use './styles/general.scss'
</style>
