<template>
  <v-list class="bg-surfaceVariant rounded-md">
    <v-list-item>
      <v-list-item-title class="text-caption"> 行 </v-list-item-title>
      <template #append>
        <v-slider
          v-model="grid.column"
          thumb-color="primary"
          thumb-size="16"
          track-size="2"
          track-fill-color="primary"
          track-color="secondary"
          hide-details
          style="width: 120px"
          :max="20"
          :min="1"
          :step="1"
        />
      </template>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-caption"> 列 </v-list-item-title>
      <template #append>
        <v-slider
          v-model="grid.row"
          thumb-color="primary"
          thumb-size="16"
          track-size="2"
          track-fill-color="primary"
          track-color="secondary"
          hide-details
          style="width: 120px"
          :max="20"
          :min="1"
          :step="1"
        />
      </template>
    </v-list-item>
  </v-list>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useSettingStore } from '@/store/setting'
const settingStore = useSettingStore()
const { grid } = storeToRefs(settingStore)

const { t } = useI18n({ useScope: 'global' })

</script>
