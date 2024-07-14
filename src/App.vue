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
      let MovieApi = store.movielistApi + store.filterApi;
      /*       console.log(MovieApi); */
      axios.
        get(MovieApi)
        .then(res => {
          /*   console.log(res.data.results); */
          store.movieList = res.data.results;
          /*    console.log(store.movieList); */
        })
        .catch(err => {
          /*  console.log(err); */
        })
    },

    getVideo() {

      for (let index = 0; index < store.type.length; index++) {
        const element = store.type[index];

        let url
        if (store.filterApi == "") {
          url = "https://api.themoviedb.org/3/" + element + "/top_rated?api_key=12c083f747a1bca75436acb77dccc08d";
        } else {
          url = store.listApi + element + store.key + store.filterApi;
        }

        axios.
          get(url)
          .then(res => {
            /*    console.log(res.data); */
            if (element == "movie") {
              store.movieList = res.data.results;
            } else {
              store.tvList = res.data.results
            }

          })
          .catch(err => {
            /* console.log(err); */
          })
      }

    }
  },
  created() {
    this.getVideo();
  }

}

</script>

<template>
  <div class="container-fluid">
    <Appheader @search="getVideo" />
    <AppMain />
  </div>

</template>

<style lang="scss">
@use './styles/general.scss'
</style>
