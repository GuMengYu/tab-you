<template>
  <v-main class="overflow-y-auto h-100 main" :style="mainStyle">
    <clock />
    <v-card width="200" height="200" color="bg-surfaceVariant" rounded="md"> </v-card>
  </v-main>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTheme } from 'vuetify'

import { Grid, useSettingStore } from '@/store/setting'
import Clock from '@/widgets/clock.vue'

const settingStore = storeToRefs(useSettingStore())
const theme = useTheme()

const mainStyle = computed(() => {
  return {
    gridTemplateAreas: settingStore.grid.value === Grid.one ? 'time' : '',
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
