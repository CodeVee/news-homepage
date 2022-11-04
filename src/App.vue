<script setup lang="ts">
import BannerGrid from "./components/BannerGrid.vue";
import NavBar from "./components/NavBar.vue";
import NewsBox from "./components/NewsBox.vue";
</script>

<template>
  <div class="wrapper lg:w-[111rem] mx-auto px-[1.6rem] lg:px-0 lg:pt-36">
    <header class="mb-24">
      <NavBar />
    </header>

    <main>
      <BannerGrid />
      <div class="grid lg:grid-cols-3 gap-[3.2rem] lg:gap-12 mb-32 lg:mb-48">
        <NewsBox v-for="news in feed" :key="news.id" :img="news.img">
          <template #id>
            {{news.id}}
          </template>
          <template #header>
            {{news.header}}
          </template>
          <template #sub>
            {{news.sub}}
          </template>
        </NewsBox>
      </div>
    </main>
  </div>
</template>

<style scoped></style>

<script lang="ts">
export default {
  components: { NavBar, BannerGrid, NewsBox },
  data() {
    return {
      feed: [...newsFeed],
      showMenu: false
    }
  }
};
const newsFeed = [
  { 
    id: 1,
    img: 'src/assets/images/image-retro-pcs.jpg',
    header: 'Reviving Retro PCs',
    sub: 'What happenss when old PCs are given modern upgrades?'
  },
  { 
    id: 2,
    img: 'src/assets/images/image-top-laptops.jpg',
    header: 'Top 10 Laptops of 2022',
    sub: 'Our best picks for various needs and budgets.'
  },
  { 
    id: 3,
    img: 'src/assets/images/image-gaming-growth.jpg',
    header: 'The Growth of Gaming',
    sub: 'How the pandemic has sparked fresh opportunities.'
  }
]
</script>
