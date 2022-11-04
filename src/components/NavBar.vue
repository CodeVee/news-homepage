<template>
    <nav class="flex justify-between items-center pt-11 lg:pt-0">
        <img class="w-[4.5rem] lg:w-24" src="../assets/images/logo.svg" alt="logo">
        <button class="lg:hidden" @click="showMenu" >
            <img src="../assets/images/icon-menu.svg" alt="menu">
        </button>
        
        <ul class="lg:flex gap-16 hidden">
            <li><a class="font-normal text-2xl text-blue-grayishdark hover:text-red-soft" href="#">Home</a></li>
            <li><a class="font-normal text-2xl text-blue-grayishdark hover:text-red-soft" href="#">News</a></li>
            <li><a class="font-normal text-2xl text-blue-grayishdark hover:text-red-soft" href="#">Popular</a></li>
            <li><a class="font-normal text-2xl text-blue-grayishdark hover:text-red-soft" href="#">Trending</a></li>
            <li><a class="font-normal text-2xl text-blue-grayishdark hover:text-red-soft" href="#">Categories</a></li>
        </ul>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'NavBar',
    emits: ['show'],
    methods: {
        showMenu() {
            this.$emit('show');
        }
    }
}
</script>
