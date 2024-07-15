<script>
import { store } from '../store'
export default {
    name: 'AppCardActor',
    data() {
        return {
            store,
        }
    }
}</script>
<template>
    <div class="card">
        <img v-if="(store.urlactor != null)" class="img-fluid rounded-circle"
            :src='"https://image.tmdb.org/t/p/w342/" + store.urlactor' :alt="store.filtercastApi">
        <img v-else src="../assets/NO-IMAGE-it.jpg" :alt="store.filtercastApi" class="img-fluid rounded-circle">

        <div class="card-body">
            <p class="card-text text-center text-danger text-uppercase ">{{ store.filtercastApi }}</p>
        </div>
    </div>

</template>
<style lang="scss" scoped>
@use '../styles/general.scss';

.card {
    margin: 10px;
    background-color: transparent;
    min-width: calc((100% / 5) - 20px);
    height: 200px;

    img {
        height: 150px;
    }

}
</style>