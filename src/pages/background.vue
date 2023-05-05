<template>
  <div class="background-overlay">
    <v-img
      cover
      :style="backgroundFilter"
      class="background"
      src="https://images.unsplash.com/photo-1682343161289-d7fb6268cf1a?ixid=Mnw4ODczOHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4MzE3MTMyMQ&ixlib=rb-4.0.3&w=1512&h=982&dpr=2&auto=format&q=60&fit=crop"
    ></v-img>
  </div>
</template>

<script lang="ts" setup>
const brightness = ref(73)
const blur = ref(0)
const backgroundFilter = computed(() => {
  return {
    filter: `brightness(${brightness.value}%) blur(${blur.value}px)`,
  }
})
</script>

<style scoped lang="scss">
.background-overlay {
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  opacity: 1;
  transition: transform 0.2s, opacity 0s;
  .background {
    transform: scale(1.1) translateX(0);
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
}
</style>
