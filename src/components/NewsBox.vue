<template>
  <div class="flex gap-[2.4rem]">
    <img class=" w-40 h-[12.7rem]" :src="img" alt="retro" />
    <div>
      <h5 class="text-[3.2rem] leading-[3.2rem] font-bold text-blue-grayish">
        0<slot name="id"></slot>
    </h5>
      <h6 class="text-[1.8rem] leading-[2.4rem] font-extrabold text-blue-vdark mt-[1.2rem] mb-[0.9rem]">
        <slot name="header"></slot>
     </h6>
      <p class="text-2xl text-blue-grayishdark font-normal">
        <slot name="sub"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NewsBox",
  props: {
    img: String
  },
  mounted() {
    console.log(this.img + 'sss');
  }
};
</script>

<style lang="scss" scoped></style>
