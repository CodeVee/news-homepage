<template>
    <nav class="flex justify-between items-center">
        <img class=" w-24" src="../assets/images/logo.svg" alt="logo">
        <ul class="flex gap-16">
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
    name: 'NavBar'
}
</script>

<style scoped>

</style>