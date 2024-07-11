<script>
import { store } from '../store';
export default {
  name: "Appheader",
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div class="row">
    <div class="col-12">
      <nav class="navbar navbar-light bg-dark justify-content-between">
        <a class="navbar-brand text-light mx-5">Booxflix</a>
        <form class="form-inline d-flex mx-5">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
            v-model="store.filterIpa">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Cerca</button>
        </form>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '/src/styles/general.scss'
</style>
