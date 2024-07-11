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
    <div>
      <h1>Boolflix</i></h1>
    </div>
    <div>
      <input type="text" placeholder="Cerca un film" v-model="store.filterApi">
      <button @click="$emit('search')">Cerca</button>
    </div>

  </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

header {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  background-color: black;

  h1 {
    color: white;
  }
}
</style>
