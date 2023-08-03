<template>
  <div class="mb-3">Stopwatch</div>
  <div
    class="mx-16 p-3 rounded font-mono text-red-400 font-bold inline-block border-2 border-solid border-cyan-300 bg-slate-200"
  >
    {{ min }}:{{ sec < 10 ? 0 : null }}{{ sec }}
  </div>

  <div class="mt-4 m-3 p-3 flex gap-3">
    <button
      @click="handleStartStop"
      class="border min-w-[80px] border-solid border-black p-3 rounded bg-slate-100"
    >
      {{ computedStr }}
    </button>
    <button @click="handleReset" class="border border-solid border-black p-3 rounded bg-slate-100">
      Reset
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const sec = ref(0)
const min = ref(0)
const str = ref(false)
const interval = ref(null)

const handleStartStop = () => {
  str.value = !str.value

  // Çalışıyorken
  if (str.value) {
    interval.value = setInterval(() => {
      sec.value++
      if (sec.value >= 60) {
        min.value++
        sec.value = 0
      }
    }, 1000)
  } else {
    // Dururken
    clearInterval(interval.value)
  }
}

const handleReset = () => {
  clearInterval(interval.value)
  str.value = false
  sec.value = 0
  min.value = 0
}

const computedStr = computed(() => {
  return str.value ? 'Durdur' : 'Başlat'
})
</script>

<style scoped></style>
