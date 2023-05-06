<template>
  <clock @click="showConfig = true" :style="{gridRow: '1/4'}" />
  <config-modal v-model:show="showConfig">
    <template #component>
      <clock />
    </template>
    <template #config>
      <v-switch />
    </template>
  </config-modal>
</template>

<script lang="ts" setup>
import Clock from "@/widgets/clock_vertical/clock.vue";
import ConfigModal from "@/components/configModal.vue";

const showConfig = ref(false)
const second = ref(false)
</script>

<style scoped>

</style>