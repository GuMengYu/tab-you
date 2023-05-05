<template>
  <v-list class="bg-surfaceVariant rounded-md mb-4">
    <v-list-item>
      <v-list-item-title class="text-caption"> 主题 </v-list-item-title>
      <template #append>
        <App-Select v-model="appearance" size="small" :items="appearanceItems" />
      </template>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="text-caption"> 主题色 </v-list-item-title>
      <template #append>
        <App-Select v-model="color" size="small" :items="colorItems" />
      </template>
    </v-list-item>
  </v-list>
  <!--  <v-btn-->
  <!--    fixed-->
  <!--    bottom-->
  <!--    right-->
  <!--    class="align-self-end text-capitalize mt-2"-->
  <!--    color="primary"-->
  <!--    :style="{-->
  <!--      position: 'fixed',-->
  <!--      right: '16px',-->
  <!--      bottom: '16px',-->
  <!--      borderRadius: '16px',-->
  <!--      height: '64px',-->
  <!--      zIndex: 1,-->
  <!--      transtion: 'all 0.3s ease-in-out',-->
  <!--    }"-->
  <!--    @click="handleCustomPalette"-->
  <!--  >-->
  <!--    <v-icon size="large">-->
  <!--      {{ mdiPalette }}-->
  <!--    </v-icon>-->
  <!--  </v-btn>-->
  <input v-show="false" ref="upload" type="file" accept="image/png,image/jpeg,image/webp" @change="handleChange" />
</template>

<script lang="ts" setup>
import { mdiDesktopTowerMonitor, mdiPalette, mdiPlus, mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'

import AppSelect from '@/components/menu/Select.vue'
import { useDynamicChangeTheme } from '@/hooks/useTheme'
import { generateVuetifyTheme } from '@/plugins/vuetify'
import type { APPEARANCE } from '@/store/setting'
import { useSettingStore, WallpaperColor } from '@/store/setting'

import AppSettingsGroup from './Group.vue'
const { t } = useI18n()
const setting = useSettingStore()
const { customTheme, wallpaperColor } = storeToRefs(setting)
const toast = useToast()
const { applyTheme } = useDynamicChangeTheme()
const upload = ref<HTMLInputElement>()
const appearanceItems = computed(() => [
  {
    title: t('common.light'),
    value: 'light',
    activeClass: 'text-primary',
    rounded: true,
  },
  {
    title: t('common.dark'),
    value: 'dark',
    activeClass: 'text-primary',
    rounded: true,
  },
  {
    title: t('common.auto'),
    value: 'system',
    activeClass: 'text-primary',
    rounded: true,
  },
])

const defaultThemes = [
  {
    value: WallpaperColor.RedSandDunes,
    title: t('theme.RedSandDunes'),
    activeClass: 'text-primary',
    rounded: true,
  },
  {
    value: WallpaperColor.GreenMountainTop,
    title: t('theme.GreenMountainTop'),
    activeClass: 'text-primary',
    rounded: true,
  },
  {
    value: WallpaperColor.OrangeDesert,
    title: t('theme.OrangeDesert'),
    activeClass: 'text-primary',
    rounded: true,
  },
  {
    value: WallpaperColor.BlueMountains,
    title: t('theme.BlueMountains'),
    activeClass: 'text-primary',
    rounded: true,
  },
  {
    value: WallpaperColor.GreenRockyMountains,
    title: t('theme.GreenRockyMountains'),
    activeClass: 'text-primary',
    rounded: true,
  },
]
const colorItems = computed(() => {
  if (customTheme.value.length) {
    return [
      ...defaultThemes,
      {
        value: 'Customize',
        title: t('theme.Customize'),
        activeClass: 'text-primary',
        rounded: true,
      },
    ]
  }
  return [...defaultThemes]
})
const appearance = computed({
  get() {
    return setting.appearance
  },
  set(value: APPEARANCE) {
    setting.appearance = value
  },
})

const color = computed({
  get() {
    return wallpaperColor.value
  },
  set(value: WallpaperColor) {
    wallpaperColor.value = value
  },
})
function handleCustomPalette() {
  upload.value?.click()
}
async function handleChange(e: Event) {
  const { files = [] } = e.target as HTMLInputElement
  if (files?.length) {
    if (files[0].size > 2 * 1024 * 1024) {
      toast.error(t('message.pic_limit'))
      return
    }
    try {
      const objectURL = URL.createObjectURL(files[0])
      const image = new Image()
      image.src = objectURL
      const newThemes = await generateVuetifyTheme(image, 'Customize')
      applyTheme(newThemes)
      // store customize theme in localstorage
      customTheme.value = newThemes
      color.value = WallpaperColor.Customize
      // location.reload()
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
