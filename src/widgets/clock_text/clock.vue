<template>
  <section style="place-self: center center">
    <div id="time" class="clock text-surface" style="place-self: baseline center">
      <div id="time-container" data-hide="clock">
        <p id="date" data-hide="date" class="text-center text-body-1 font-weight-regular">{{ now.date }}</p>
        <h1 id="clock" class="hidden text-h2 text-primaryContainer" style="font-weight: 400; letter-spacing: initial !important">
          {{ now.time }}
        </h1>
      </div>
    </div>
  </section>

</template>

<script lang="ts" setup>
import dayjs from 'dayjs'

const timestamp = useTimestamp()
const type = ref(1)
const now = computed(() => {
  const time = dayjs(timestamp.value)
  return {
    date: time.format('dddd, MMM D'),
    time: time.format('HH:mm:ss'),
  }
})
</script>

<style scoped lang="scss">
.clock {
  place-self: center;
}
</style>
