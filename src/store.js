import { reactive } from "vue";

export const store = reactive({
  listApi: "https://api.themoviedb.org/3/search/",
  key: "?api_key=12c083f747a1bca75436acb77dccc08d&query=",
  type: ["movie", "tv"],
  movieList: [],
  tvList: [],
  filterApi: "",
  displayInfo: null,
});
