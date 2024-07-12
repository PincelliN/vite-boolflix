<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from "../store"
export default {
    name: "AppCard",
    props: ['info'],
    data() {
        return {
            store,
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
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path" alt="Avatar"
                    style="width:100%;height:100%">
            </div>
            <div class="flip-card-back" style="overflow-y: auto;">
                <h5>Titolo:{{ info.title ? info.title : info.name }}</h5>
                <h5>Titolo originale:{{ info.original_title ? info.original_title : info.original_name }}</h5>
                <span>
                    <i v-for="n in vote()" class="fa-solid fa-star"></i>
                    <i v-for="n in (5 - vote())" class="fa-regular fa-star"></i>
                </span>
                <br>
                <span :class="`fi fi-${flagLanguages()}`"></span>

            </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>
@use '/src/styles/general.scss';


/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    margin: 10px;
    background-color: transparent;
    width: calc((100% / 6) - 20px);
    height: 200px;
    perspective: 1000px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
.flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
}
</style>