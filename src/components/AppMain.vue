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
    <main class="empty" v-if="store.movieList.length == 0">
        <h4> Inizia a cercare i film e le tue serie preferite</h4>
    </main>
    <main v-else>
        <section>
            <AppCard v-for="(movie, i) in store.movieList" :info="movie" />
        </section>
        <section>
            <AppCard v-for="tv in store.tvList " :info="tv" />
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: black;
    padding: 20px;

    section {
        width: 80%;
        margin: 0 auto;
        border: 1px solid white;
        display: flex;
        justify-items: center;
        flex-wrap: wrap;
        align-content: flex-start;
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