import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

import type { ThemeDefinition } from '@/plugins/vuetify'

export enum APPEARANCE {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export enum WallpaperColor {
  RedSandDunes = 'RedSandDunes',
  GreenRockyMountains = 'GreenRockyMountains',
  GreenMountainTop = 'GreenMountainTop',
  OrangeDesert = 'OrangeDesert',
  BlueMountains = 'BlueMountains',
  Customize = 'Customize',
}
export enum Grid {
  one,
  two,
  three,
}
export interface SettingState {
  locale: string
  appearance: APPEARANCE
  customTheme: ThemeDefinition[]
  wallpaperColor: WallpaperColor
  rail: boolean
  grid: Grid
}
export const useSettingStore = defineStore('setting', {
  state: () => {
    return useLocalStorage<SettingState>(
      'setting',
      {
        locale: 'zhCN',
        appearance: APPEARANCE.SYSTEM,
        wallpaperColor: WallpaperColor.GreenRockyMountains,
        customTheme: [],
        rail: true,
        grid: Grid.one,
      },
      { mergeDefaults: true }
    )
  },
})
