<script setup lang="ts">
import BannerGrid from "./components/BannerGrid.vue";
import MobileNav from "./components/MobileNav.vue";
import NavBar from "./components/NavBar.vue";
import NewsBox from "./components/NewsBox.vue";
</script>

<template>
  <div class="wrapper lg:w-[111rem] mx-auto px-[1.6rem] lg:px-0 lg:pt-[8.9rem] relative bg-white-off">
    <header class="mb-[3.2rem] lg:mb-[5.5rem]">
      <NavBar @show="displayMenu"/>
    </header>

    <main>
      <BannerGrid />
      <div class="grid lg:grid-cols-3 gap-[3.2rem] lg:gap-12 pb-32 lg:pb-48">
        <NewsBox>
          <template #img>
            <img class=" w-40 h-[12.7rem]" src="./assets/images/image-retro-pcs.jpg" alt="retro" />
          </template>
          <template #id>
            01
          </template>
          <template #header>
            Reviving Retro PCs
          </template>
          <template #sub>
            'What happenss when old PCs are given modern upgrades?'
          </template>
        </NewsBox>
        <NewsBox>
          <template #img>
            <img class=" w-40 h-[12.7rem]" src="./assets/images/image-top-laptops.jpg" alt="laptops" />
          </template>
          <template #id>
            02
          </template>
          <template #header>
            Top 10 Laptops of 2022
          </template>
          <template #sub>
            Our best picks for various needs and budgets.
          </template>
        </NewsBox>
        <NewsBox>
          <template #img>
            <img class=" w-40 h-[12.7rem]" src="./assets/images/image-gaming-growth.jpg" alt="gaming" />
          </template>
          <template #id>
            03
          </template>
          <template #header>
            The Growth of Gaming
          </template>
          <template #sub>
            How the pandemic has sparked fresh opportunities.
          </template>
        </NewsBox>
      </div>
    </main>
    <div v-show="showMenu" class="absolute h-full w-full left-0 top-0">
      <div class="flex lg:hidden h-full w-full ">
        <div class="bg-blue-vdark opacity-50 h-full flex-1"></div>
        <MobileNav @hide="hideMenu"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: { NavBar, BannerGrid, NewsBox, MobileNav },
  methods: {
    displayMenu() {
      this.showMenu = true;
    },
    hideMenu() {
      this.showMenu = false;
    }
  },
  data() {
    return {
      showMenu: false
    }
  }
};
</script>
