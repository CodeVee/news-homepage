<template>
    <div class="bg-white-off pl-[2.4rem] pr-8 pt-11 w-[25.6rem] flex flex-col">
        <button class="mb-32 self-end" @click="hideMenu">
            <img src="src/assets/images/icon-menu-close.svg" alt="menu-close">
        </button>
        <ul class="flex flex-col gap-[2.4rem]">
            <li><a class="font-normal text-3xl text-blue-vdark" href="#">Home</a></li>
            <li><a class="font-normal text-3xl text-blue-vdark" href="#">News</a></li>
            <li><a class="font-normal text-3xl text-blue-vdark" href="#">Popular</a></li>
            <li><a class="font-normal text-3xl text-blue-vdark" href="#">Trending</a></li>
            <li><a class="font-normal text-3xl text-blue-vdark" href="#">Categories</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MobileNav',
    emits: ['hide'],
    methods: {
        hideMenu() {
            this.$emit('hide');
        }
    }
}
</script>
