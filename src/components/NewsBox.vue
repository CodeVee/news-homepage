<template>
  <div class="flex gap-[2.4rem]">
    <slot name="img"></slot>
    <div>
      <h5 class="text-[3.2rem] leading-[3.2rem] font-bold text-blue-grayish">
        <slot name="id"></slot>
    </h5>
      <h6 class="text-[1.8rem] leading-[2.4rem] font-extrabold cursor-pointer text-blue-vdark hover:text-red-soft mt-[1.2rem] mb-[0.9rem]">
        <slot name="header"></slot>
     </h6>
      <p class="text-[1.5rem] leading-[2.6rem] text-blue-grayishdark font-normal">
        <slot name="sub"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NewsBox"
};
</script>
