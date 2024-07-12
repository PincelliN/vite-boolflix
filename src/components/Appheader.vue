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
  <header>
    <div class="row">
      <div class="col-12 ">
        <nav class="navbar navbar-light bg-dark justify-content-between px-5">
          <a class="navbar-brand text-light text-uppercase">Boolflix</a>
          <form class="d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
              v-model="store.filterApi">
            <button class="btn btn-outline-light my-2 my-sm-0 mx-sm-1" type="submit"
              @click.prevent="$emit('search')">Cerca</button>
          </form>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>
