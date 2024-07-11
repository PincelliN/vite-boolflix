<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from "../store"
export default {
    name: "AppCard",
    props: ['info'],
    data() {
        return {
            store,
            show: true,
        }
    },
    methods: {
        flagLanguages() {
            let country = this.info.original_language;
            if (country == "en") {
                country = "us"
            }
            if (country == "ja") {
                country = "jp"
            }
            if (country == "te") {
                country = "de"
            }

            return country
        },
        vote() {
            const voteStar = Math.ceil(Math.ceil(parseInt(this.info.vote_average)) / 2);
            return voteStar;
        }
    }


}
</script>
<template>

    <div class="info" @mouseleave="show = true" v-show="show == false">
        <h5>Titolo:{{ info.title ? info.title : info.name }}</h5>
        <h5>Titolo originale:{{ info.original_title ? info.original_title : info.
            original_name }}</h5>

        <span>
            <i v-for="n in vote()" class="fa-solid fa-star"></i>
            <i v-for="n in (5 - vote())" class="fa-regular fa-star"></i>
        </span><br>
        <span :class="`fi fi-${flagLanguages()}
            `"></span>


    </div>
    <div class="poster" @mouseover="show = false" v-show="show == true">
        <img :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path" alt="">
    </div>
</template>

<style lang="scss" scoped>
.info {
    margin: 10px;
    width: calc((100% / 4) - 20px);
    color: white;
    height: 200px;
    overflow-y: scroll;

}

.poster {
    margin: 10px;
    width: calc((100% / 4) - 20px);
    height: 200px;



    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.none {
    display: none;
}
</style>