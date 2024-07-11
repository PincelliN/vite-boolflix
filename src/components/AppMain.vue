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
        <section>
            <AppCard v-for="movie in store.movieList" :info="movie" />
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
</style>