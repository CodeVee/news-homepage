<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="wrapper w-[111rem] mx-auto pt-36">
    <header>
      <NavBar />
    </header>

    <main></main>
  </div>
</template>

<style scoped></style>

<script lang="ts">
export default {
  components: { NavBar },
};
</script>
