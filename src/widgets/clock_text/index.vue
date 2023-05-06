<template>
  <clock @click="showConfig = true" />
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
import Clock from "@/widgets/clock_text/clock.vue";
import ConfigModal from "@/components/configModal.vue";

const showConfig = ref(false)
const second = ref(false)
</script>

<style scoped>

</style>