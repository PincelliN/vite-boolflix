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
            creditValue: null,
            castList: [],
            castshow: true,

        }
    },
    methods: {
        /* metodo per modificare qualche valore della lingua dei film/seritv per ottimizare la libreria flag icon */
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

        /* metodo per dimezzare il voto e arrotondarlo per eccesso */
        vote() {
            const voteStar = Math.ceil((parseInt(this.info.vote_average)) / 2);
            return voteStar;
        },

        getcredi() {
            /* metodo per ottenere il cast di ogni card attraverso l'id */
            let creditUrl = `https://api.themoviedb.org/3/${this.creditValue}/${this.info.id}/credits?api_key=12c083f747a1bca75436acb77dccc08d`;
            /* console.log(creditUrl); */
            axios.
                get(creditUrl)
                .then(res => {
                    const cast = res.data.cast;
                    /*   console.log(" guarda qui", cast); */
                    if (cast != []) {
                        if (cast.length > 5) {
                            this.castList = cast.slice(0, 5);
                        } else {
                            this.castList = cast.slice(0, cast.length);
                        }
                        if (this.castList.length == 0) {
                            this.castshow = false;
                        }
                    }
                }).catch(err => {
                    /*  console.log("errore" + err); */

                })
        },
        /* metodo per associare l'assegnazione di un valore al emit legato al click */
        getCastFilm(actor) {
            this.store.filtercastApi = actor;
            this.$emit('searchcast');
            /*   console.log(store.filtercastApi);
              console.log('Event emitted: searchcast', actor); */
        }



    },
}
</script>
<template>
    <!-- quando il mouse esce dalla carda pulisco la lista del cast -->
    <div class="flip-card" @mouseleave=" this.castList = []">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <!-- condizione nel caso il poster non fosse disponibile -->
                <img v-if="(info.poster_path != null)" :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path"
                    alt="Avatar" style="width:100%;height:100%">
                <img v-else src="../assets/NO-IMAGE-it.jpg" alt="Avatar" style="width:100%;height:100%">
            </div>
            <!--1- condizione per assegnare il valore al creditValue che utiliziamo per fare la ricerca legate al cast delle serie e dei film-->
            <div @mouseover="info.title ? this.creditValue = 'movie' : this.creditValue = 'tv'"
                @mouseleave=" this.castshow = true" class="flip-card-back p-2"
                style="overflow-y: auto;border: 1px solid white;overflow-x:hidden ;">
                <h5><strong class="text-danger">Titolo:</strong> {{ info.title ? info.title : info.name }}</h5>
                <!-- condizione per visualizzare il titolo originale solo se è diverso dal titolo -->
                <h5 v-show="(info.title != info.original_title || info.name != info.original_name)">
                    <strong class="text-danger">Titolo originale:</strong> {{ info.original_title ? info.original_title
                        :
                        info.original_name }}
                </h5>
                <!-- ciclo v-for utilizzato con un numero per visualizzare le stelline in modo colorato relativamente al voto ottenuto -->
                <span>
                    <i v-for="n in vote()" class="fa-solid fa-star"></i>
                    <i v-for="n in (5 - vote())" class="fa-regular fa-star"></i>
                </span>
                <br>
                <!-- utilizzo della libreria flag-icon -->
                <span :class="`fi fi-${flagLanguages()}`"></span>
                <br>
                <span>
                    <!-- al click utilizzo il metodo per ottenere il cast -->
                    <h6 @click="this.getcredi()" class="text-start "><strong class="text-danger">Cast:</strong> </h6>
                    <ul class=" p-3">
                        <!-- emit attraverso il metodo getcastFilm -->
                        <!-- condizzione per visualizzare la lista del cast oppure il messaggio no info cast  -->
                        <li v-if="this.castshow == true" v-for="cast in this.castList"
                            @click="this.getCastFilm(cast.name)" class="text-start">{{ cast.name
                            }}
                        </li>
                        <li v-else="this.castshow== false">No Info Cast</li>
                    </ul>
                </span>
                <br>
                <span v-show="info.overview != ''"><strong class="text-danger text-start">Trama:</strong>{{ info.
                    overview
                    }}</span>

            </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>
@use '../styles/general.scss';



/* caratteristiche generali del contenitore Card */
.flip-card {
    margin: 10px;
    background-color: transparent;
    min-width: calc((100% / 5) - 20px);
    height: 200px;
    perspective: 1000px;
}

/* contenitore necessario per posizionare il lato anteriore e quello posteriore */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/*rotazione orizzontale del animazione */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

/* stile retro card */
.flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    overflow-y: auto;
    border: 1px solid white;
    overflow-x: hidden;

    .fa-solid {
        color: yellow;
    }

    strong {
        cursor: pointer;

    }

    ul {
        list-style: none;

        li {
            cursor: pointer;

            &:hover {
                background-color: gray;
            }
        }
    }

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