<template>
  <v-btn icon v-bind="$attrs" style="z-index: 99999" @click="showControlCenter = !showControlCenter">
    <v-icon size="small" color="onPrimaryContainer">{{ showControlCenter ? mdiClose : mdiCog }} </v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { mdiClose, mdiCog } from '@mdi/js'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/store/app'
const { showControlCenter } = storeToRefs(useAppStore())
</script>
