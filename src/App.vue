<script>
import axios from "axios";
import Appheader from './components/Appheader.vue';
import { store } from './store';
import AppMain from './components/AppMain.vue';

export default {
  name: "App",
  components: {
    Appheader,
    AppMain
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
          console.log(store.movieList);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getMovies()

  }
}

</script>

<template>
  <Appheader @search="getMovies" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
