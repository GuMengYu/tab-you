<template>
  <v-card class="text-center d-flex flex-column gap-2 py-6 px-2" variant="flat" rounded="pill" width="100" color="tertiaryContainer">
    <span class="text-caption">{{now.date}}</span>
    <span class="text-h2 font-weight-bold text-onPrimaryContainer">{{now.hour}}</span>
    <span class="text-h2 font-weight-bold text-tertiary">{{now.minutes}}</span>
  </v-card>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'

const timestamp = useTimestamp()
const now = computed(() => {
  const time = dayjs(timestamp.value)
  return {
    date: time.format('dddd, MMM D'),
    time: time.format('HH:mm:ss'),
    hour: new Date(timestamp.value).getHours(),
    minutes: new Date(timestamp.value).getMinutes()
  }
})
</script>

<style scoped lang="scss">
.clock {
  place-self: center;
}
</style>
