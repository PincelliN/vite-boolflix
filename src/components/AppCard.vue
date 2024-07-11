<script>
import { store } from "../store"
export default {
    name: "AppCard",
    props: ['info'],
    data() {
        return {
            store,
        }
    },

}
</script>
<template>

    <div>
        <h3>Titolo:{{ info.
            title }}</h3>
        <h3>Titolo originale:{{ info.
            original_title
            }}</h3>
        <span>Voto:{{
            info.vote_average
        }}</span>
        <p>Trama:{{ info.overview
            }}</p>


    </div>
</template>

<style lang="scss" scoped>
div {
    margin: 10px;
    width: calc((100% / 4) - 20px);
    color: white;
    height: 200px;
    overflow-y: scroll;

    p {}
}
</style>