<template>
  <v-main class="overflow-y-auto h-100 main" :style="mainStyle">
    <clock />
    <clock2 />
  </v-main>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTheme } from 'vuetify'

import { Grid, useSettingStore } from '@/store/setting'
import Clock from '@/widgets/clock_vertical/index.vue'
import Clock2 from '@/widgets/clock_text/index.vue'

const { grid } = storeToRefs(useSettingStore())
const theme = useTheme()

const mainStyle = computed(() => {
  return {
    gridTemplateColumns: `repeat(${grid.value.column}, 1fr)`,
    gridTemplateRows: `repeat(${grid.value.row}, 1fr)`,
  }
})
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  display: grid;
  gap: 1em;
  will-change: transform;
  transition: opacity 47.2ms, transform 0.4s, padding 0.25s;
}
</style>
