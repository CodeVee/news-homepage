<script setup lang="ts">
import BannerGrid from "./components/BannerGrid.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="wrapper w-[111rem] mx-auto pt-36">
    <header class="mb-24">
      <NavBar />
    </header>

    <main>
      <BannerGrid />
    </main>
  </div>
</template>

<style scoped></style>

<script lang="ts">
export default {
  components: { NavBar, BannerGrid },
};
</script>
