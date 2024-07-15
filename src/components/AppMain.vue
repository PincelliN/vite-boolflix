<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "./AppCard.vue";
import AppCardActor from "./AppCardActor.vue";


export default {
    name: "AppMain",
    components: {
        AppCard,
        AppCardActor
    },
    data() {
        return {
            store
        }
    },
    methods: {
        /* metodo per ottenere le informazioni relative al attore scelto attraverso l'emit dovuto al click nella lista degli attori */
        getActorShow() {
            /*  console.log('Event received: searchcast', this.store.filtercastApi); */
            let actorUrl = `https://api.themoviedb.org/3/search/person?api_key=12c083f747a1bca75436acb77dccc08d&query=${this.store.filtercastApi}`
            axios.
                get(actorUrl)
                .then(res => {
                    /*  console.log("ATTORI", res.data.results[0]); */
                    this.store.urlactor = res.data.results[0].profile_path;
                    /*console.log(this.store.urlactor); */
                    this.store.castList = res.data.results[0].known_for;


                    /*  console.log(" qui", this.store.castList); */
                })
                .catch(err => {

                })
        }
    }
}
</script>
<template>

    <main>
        <div class="row " v-show="store.castList.length > 0">
            <div class="col-12 px-0">
                <h2>{{ store.filtercastApi }}</h2>
            </div>
            <div class="col-12 d-flex mx-5">
                <section>
                    <AppCardActor />
                    <!-- emit legato alla lista degli attori -->
                    <AppCard @searchcast="getActorShow" v-for="show in store.castList" :info="show" />
                </section>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 d-flex" v-show="store.movieList.length > 0">
                <!-- condizione per mostrare la sezione film e il nome del titolo della sezione  -->
                <h2>{{ store.filterApi == '' ? "Top Film" : "Film" }}</h2>
                <select name="movie" v-model="store.genmovie" @change="$emit('genmovie')">
                    <option name="movie" value=""> Scegli il Genere</option>
                    <option name="movie" v-for="gen in store.genreMovieList" :value="gen.id">{{ gen.name }}</option>
                </select>
            </div>
            <div class="col-12">
                <section>
                    <!-- emit per il click sugli attori e il props delle info relative hai film -->
                    <AppCard @searchcast="getActorShow" v-for="movie in store.movieList" :info="movie" />
                </section>
            </div>
        </div>
        <div class="row mt-3" v-show="store.tvList.length > 0">
            <!-- condizione per mostrare la sezione serie tv e il nome del titolo della sezione  -->
            <div class="col-12 d-flex ">
                <h2>{{ store.filterApi == '' ? "Top Serie Tv" :
                    "Serie Tv" }}</h2>
                <select name="tv" v-model="store.gentv" @change="$emit('gentv')">
                    <option name="tv" value=""> Scegli il Genere</option>
                    <option name="tv" v-for="gentv in store.genreTvieList" :value="gentv.id">{{ gentv.name }}
                    </option>
                </select>
            </div>
            <div class="col-12">
                <section>
                    <!-- emit per il click sugli attori e il props delle info relative alle serie tv -->
                    <AppCard @searchcast="getActorShow" v-for="tv in store.tvList " :info="tv" />
                </section>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
main {
    background-color: black;
    padding: 20px;

    h2 {
        width: 80%;
        margin: 0 auto;
        color: white;
    }

    section {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-items: center;
        align-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;

        /* info relative alla scroll bar personalizzata */
        &::-webkit-scrollbar {
            height: 3px;
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: red;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #b30000;
        }
    }
}
</style>