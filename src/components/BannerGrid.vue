<template>
    <div class="lg:h-[51.1rem] grid lg:grid-cols-3 lg:gap-12 mb-28">
        <img class="hidden lg:block col-span-2" src="../assets/images/image-web-3-desktop.jpg" alt="web-3">
        <img class="lg:hidden mb-[2.4rem]" src="../assets/images/image-web-3-mobile.jpg" alt="web-3">
        <div class="bg-blue-vdark row-start-4 lg:row-start-1 lg:col-start-3 row-span-2 py-[2.4rem] px-8 lg:pt-[3.2rem] lg:px-[2.4rem]">
            <h2 class="capitalize text-orange-soft font-bold text-[4rem] leading-[4rem] mb-[3.4rem]">
                new
            </h2>
            <h3 class="font-extrabold text-[2rem] text-white-off hover:text-orange-soft cursor-pointer">Hydrogen VS Electric Cars</h3>
            <h4 class="font-normal text-2xl text-blue-grayish mt-[.8rem]">
                Will hydrogen-fueled cars ever catch up to EVs?
            </h4>
            <span class="block h-[1px] my-12 bg-blue-grayishdark"></span>
            <h3 class="font-extrabold text-[2rem] text-white-off hover:text-orange-soft cursor-pointer">The Downsides of AI Artistry</h3>
            <h4 class="font-normal text-2xl text-blue-grayish mt-[.8rem]">
                What are the possible adverse effects of on-demand AI image generation?
            </h4>
            <span class="block h-[1px] my-12 bg-blue-grayishdark"></span>
            <h3 class="font-extrabold text-[2rem] text-white-off hover:text-orange-soft cursor-pointer">Is VC Funding Drying Up?</h3>
            <h4 class="font-normal text-2xl text-blue-grayish mt-[.8rem]">
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </h4>
        </div>
        <h1 class="text-blue-vdark font-extrabold text-[4rem] lg:text-[5.6rem] leading-[4rem] lg:leading-[5.6rem] mb-[1.6rem] lg:mb-0">The Bright Future of Web 3.0?</h1>
        <div class="flex flex-col justify-between mb-[6.4rem] lg:mb-0">
            <p class="text-2xl text-blue-grayishdark font-normal mb-[2.4rem] lg:mb-0">
                We dive into the next evolution of the web that claims to put the power of the platforms back 
                into the hands of the people. But is it really fulfilling its promise?
            </p>
            <button class="font-bold bg-red-soft uppercase w-[18.5rem] h-[4.8rem] text-white-off hover:text-blue-vdark text-2xl tracking-[4.38px]">
                Read more
            </button>
        </div>  
    </div>
</template>

<script lang="ts">
export default {
    name: 'BannerGrid'
}
</script>
