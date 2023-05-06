<template>
  <v-dialog :model-value="show" persistent>

    <v-card class="align-self-center" rounded="md" color="surfaceVariant" width="50vw">
      <div class="w-100 d-flex justify-space-between align-center">
        <span class="ml-4">time setting</span>
        <v-btn icon variant="plain" @click="handleClose">
          <v-icon> {{ mdiClose }}</v-icon>
        </v-btn>
      </div>
      <div class="d-flex gap-2 pa-4">
        <div class="component pa-4 bg-grey-darken-1 flex-1-1-100 rounded-md">
          <slot name="component"></slot>
        </div>
        <div class="config pa-4 flex-1-1-100">
          <slot name="config"></slot>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { mdiClose } from "@mdi/js";

const emit = defineEmits(['update:show'])

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})
function handleClose() {
  emit('update:show', false)
}


</script>

<style scoped>

</style>