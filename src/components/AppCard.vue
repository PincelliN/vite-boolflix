<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from "../store"
import { info } from "sass";
import axios from "axios";
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
        getcredi() {
            let creditUrl = `https://api.themoviedb.org/3/movie/${this.info.id}/credits?${this.store.key}`
            console.log(creditUrl);
            axios.
                get(creditUrl)
                .then(res => {
                    let cast = 
            })
        },
        vote() {
            const voteStar = Math.ceil(Math.ceil(parseInt(this.info.vote_average)) / 2);
            return voteStar;
        }
    },
    created() {
        this.getcredi()
    }


}
</script>
<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img v-if="(info.poster_path != null)" :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path"
                    alt="Avatar" style="width:100%;height:100%">
                <img v-else src="../assets/NO-IMAGE-it.jpg" alt="Avatar" style="width:100%;height:100%">
            </div>
            <div class="flip-card-back p-2" style="overflow-y: auto;border: 1px solid white;overflow-x:hidden ;">
                <h5>Titolo:{{ info.title ? info.title : info.name }}</h5>
                <h5 v-show="(info.title != info.original_title || info.name != info.original_name)">Titolo originale:{{
                    info.original_title ? info.original_title : info.original_name }}</h5>
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

.fa-solid {
    color: yellow;
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    margin: 10px;
    background-color: transparent;
    min-width: calc((100% / 4) - 20px);
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
    overflow-y: auto;
    border: 1px solid white;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 3px;
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
</style>