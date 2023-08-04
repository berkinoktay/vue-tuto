<template>
  <h2>I am at Counter</h2>
  <span
    class="flex shadow-md rounded-md bg-slate-200 gap-3 w-min items-center m-4 p-3 border border-solid border-neutral-400"
  >
    <div
      @click="count--"
      class="p-2 flex bg-red-700 text-white items-center select-none justify-center cursor-pointer text-2xl border border-solid border-red-300"
    >
      -
    </div>
    <div class="min-w-[20px] font-bold flex items-center justify-center">{{ count }}</div>
    <div
      @click="count++"
      class="p-2 flex bg-green-700 text-white items-center select-none justify-center cursor-pointer text-2xl border border-solid border-green-300"
    >
      +
    </div>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>
