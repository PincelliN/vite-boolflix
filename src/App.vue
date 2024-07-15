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
    /* metodo per  ottenere i generi disponibili sia per i film che per le serie tv  */
    getGen() {
      for (let index = 0; index < store.type.length; index++) {
        const element = store.type[index];
        let genUrl = "https://api.themoviedb.org/3/genre/" + element + "/list?api_key=12c083f747a1bca75436acb77dccc08d";
        axios.
          get(genUrl)
          .then(res => {
            /*  console.log("1 res", res.data.genres); */
            if (element == "tv") {
              store.genreTvieList = res.data.genres;
              /*   console.log("2 res", store.genreTvieList); */
            } else {
              store.genreMovieList = res.data.genres;
              /*        console.log("3 res", store.genreMovieList); */
            }

            /*    console.log(store.movieList); */
          })
          .catch(err => {
            /*  console.log(err); */
          })
      }
    },
    /* metedo per ottenere le informazionio relative hai film è alle serie tv al momento della creazione facciamo una chiamata diversa per ottenere i film e le serie più viste */
    getVideo() {
      store.castList = [];
      store.genmovie = "";
      store.gentv = "";

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
            /* console.log(res.data.results); */
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

    },
    /* metodo per ottenere i film filtrandoli per genere */
    genMovieDiscover() {
      let genMovieUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=12c083f747a1bca75436acb77dccc08d&with_genres=' + store.genmovie;
      axios.
        get(genMovieUrl).then(res => store.movieList = res.data.results)
        .catch(err => { })
    },
    /* metodo per ottenere le serie tv filtrandole per genere */
    getTvDiscover() {
      let genMovieUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=12c083f747a1bca75436acb77dccc08d&with_genres=' + store.gentv;
      axios.
        get(genMovieUrl).then(res => store.tvList = res.data.results)
        .catch(err => { })
    },
  },
  created() {
    this.getVideo();
    this.getGen();
  }

}

</script>

<template>
  <div class="container-fluid">
    <Appheader @search="getVideo" />
    <AppMain @genmovie="genMovieDiscover" @gentv="getTvDiscover" />
  </div>

</template>

<style lang="scss">
@use './styles/general.scss'
</style>
