<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
    name: "AppMain",
    components: {
        AppCard,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getActorShow() {
            console.log('Event received: searchcast', this.store.filtercastApi);
            let actorUrl = `https://api.themoviedb.org/3/search/person?api_key=12c083f747a1bca75436acb77dccc08d&query=${this.store.filtercastApi}`
            axios.
                get(actorUrl)
                .then(res => {

                    console.log("ATTORI", res.data.
                        results);
                    this.store.castList = res.data.
                        results[0].known_for;


                    console.log(this.store.castList);
                })
                .catch(err => {

                })
        }
    }
}
</script>
<template>

    <main>
        <h2 v-show="store.castList.length > 0">{{ store.filtercastApi }}</h2>
        <section v-show="store.castList.length > 0">
            <AppCard @searchcast="getActorShow" v-for="show in store.castList" :info="show" />
        </section>

        <h2 v-show="store.movieList.length > 0">{{ store.filterApi == '' ? "Top Film" : "Film" }}</h2>
        <section v-show="store.movieList.length > 0">
            <AppCard @searchcast="getActorShow" v-for="movie in store.movieList" :info="movie" />
        </section>

        <h2 v-show="store.tvList.length > 0">{{ store.filterApi == '' ? "Top Serie Tv" : "Serie Tv" }}</h2>
        <section v-show="store.tvList.length > 0">
            <AppCard @searchcast="getActorShow" v-for="tv in store.tvList " :info="tv" />
        </section>

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

        overflow-x: scroll;
        overflow-y: hidden;

        &::-webkit-scrollbar {
            height: 3px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: red;
            border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #b30000;
        }
    }
}

.empty {
    height: 90vh;
    color: white;
    text-align: center;
    align-content: center;
    font-size: 50px;
}
</style>