<template>
  <v-list class="bg-surfaceVariant rounded-md mb-4">
    <v-list-item>
      <v-list-item-title class="text-caption"> 背景类型 </v-list-item-title>
      <template #append>
        <AppSelect size="small" :items="[]" />
      </template>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-caption"> 切换频率 </v-list-item-title>
      <template #append>
        <AppSelect size="small" :items="[]" />
      </template>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-caption"> Unsplash 收藏 </v-list-item-title>
      <template #append>
        <v-text-field hide-details variant="solo" density="compact" />
      </template>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-caption"> 模糊度 </v-list-item-title>
      <template #append>
        <v-slider
          thumb-color="primary"
          thumb-size="16"
          track-size="2"
          track-fill-color="primary"
          track-color="secondary"
          hide-details
          style="width: 120px"
          :max="100"
          :min="0"
          :step="1"
        />
      </template>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-caption"> 亮度 </v-list-item-title>
      <template #append>
        <v-slider
          thumb-color="primary"
          track-fill-color="primary"
          track-color="secondary"
          track-size="2"
          thumb-size="16"
          hide-details
          style="width: 120px"
          :max="100"
          :min="0"
          :step="1"
        />
      </template>
    </v-list-item>
  </v-list>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppSelect from '@/components/menu/Select.vue'

const { t } = useI18n({ useScope: 'global' })
</script>
