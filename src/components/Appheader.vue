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
          <h1 class="navbar-brand text-danger text-uppercase">Boolflix</h1>
          <form class="d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
              v-model="store.filterApi">
            <button class="btn btn-outline-danger my-2 my-sm-0 mx-sm-1" type="submit"
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
