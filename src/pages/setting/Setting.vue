<template>
  <v-navigation-drawer
    v-model="app.showControlCenter"
    floating
    location="right"
    width="360"
    class="bg-surface rounded-s-lg"
  >
    <v-container class="pa-2 d-flex flex-column gap-2">
      <app-settings-basic />
      <app-settings-background />
      <app-settings-grid />
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
import AppSettingsBasic from './components/Basic.vue'
import AppSettingsGrid from './components/Grid.vue'

const { t } = useI18n()

function onClickOutside() {
  app.showControlCenter = false
}
</script>
