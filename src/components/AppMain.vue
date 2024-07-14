<script>
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
}
</script>
<template>

    <main>
        <h2 v-show="store.movieList.length > 0">{{ store.filterApi == '' ? "Top Film" : "Film" }}</h2>


        <section v-show="store.movieList.length > 0">
            <AppCard v-for="movie in store.movieList" :info="movie" />
        </section>
        <h2 v-show="store.tvList.length > 0">{{ store.filterApi == '' ? "Top Serie Tv" : "Serie Tv" }}</h2>

        <section v-show="store.tvList.length > 0">
            <AppCard v-for="tv in store.tvList " :info="tv" />
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