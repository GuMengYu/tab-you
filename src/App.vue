<template>
  <v-app class="material-you bg-transparent">
    <app-setting />
    <!--    <app-nav v-if="mdAndUp" class="material-you-nav" />-->
    <!--    <app-header class="material-you-header" />-->

    <app-content class="material-you-content" />
    <app-background />
    <!--    <app-login />-->
    <control-center-toggle
      variant="flat"
      class="position-absolute"
      color="primaryContainer"
      elevation="2"
      rounded="md"
      style="bottom: 24px; right: 24px"
    />
  </v-app>
</template>
<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify'

import ControlCenterToggle from '@/components/toggle/ControlCenterToggle.vue'
import { useCurrentTheme } from '@/hooks/useTheme'
import { useAppStore } from '@/store/app'

import AppBackground from './pages/background.vue'
import AppContent from './pages/Main.vue'
import AppSetting from './pages/setting/Setting.vue'

const { themeName } = useCurrentTheme()

const display = useDisplay()
const theme = useTheme()
watchEffect(() => {
  theme.global.name.value = themeName.value
})

const appStore = useAppStore()
appStore.init()
</script>
<style lang="scss">
$cubic-bezier: cubic-bezier(0.55, -0.01, 0, 1.03);
$transition-time: 350ms;
.material-you {
  height: 100vh;
  width: 100vw;
}
.material-you-content {
  transition: padding $transition-time $cubic-bezier;
}
</style>
