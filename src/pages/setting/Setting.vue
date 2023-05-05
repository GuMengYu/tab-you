<template>
  <v-navigation-drawer
    v-model="app.showControlCenter"
    floating
    location="right"
    width="360"
    class="bg-surface rounded-s-lg"
  >
    <v-container class="pa-2">
      <app-settings-theme />
      <app-settings-background />
      <app-settings-other />
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

import { useAppStore } from '@/store/app'
import { useSettingStore } from '@/store/setting'
const app = useAppStore()
const setting = useSettingStore()
const theme = useTheme()
import AppSettingsBackground from './components/Backgroud.vue'
import AppSettingsOther from './components/Other.vue'
import AppSettingsTheme from './components/Theme.vue'
const { t } = useI18n()

function onClickOutside() {
  app.showControlCenter = false
}
</script>
