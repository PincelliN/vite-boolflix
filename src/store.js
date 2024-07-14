import { reactive } from "vue";

export const store = reactive({
  listApi: "https://api.themoviedb.org/3/search/",
  key: "?api_key=12c083f747a1bca75436acb77dccc08d&query=",
  genderApi:
    "https://api.themoviedb.org/3/genre/movie/list?api_key=12c083f747a1bca75436acb77dccc08d",
  creditApi:
    "https://api.themoviedb.org/3/movie/ id film/credits?api_key=12c083f747a1bca75436acb77dccc08d",
  type: ["movie", "tv"],
  movieList: [],
  tvList: [],
  castList: [],
  genreMovieList: [],
  genmovie: "",
  genreTvieList: [],
  gentv: "",
  filterApi: "",
  filtercastApi: "",
  displayInfo: null,
  urlactor: "",
});
