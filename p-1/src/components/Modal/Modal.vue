<template>
  <Button @click="open = true">Open Modal</Button>
  <Teleport to="body">
    <div
      v-if="open"
      @click.self="open = false"
      class="fixed top-0 left-0 z-[100] w-full h-full bg-black/50"
    >
      <div
        class="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 min-h-[300px] bg-white min-w-[80%]"
      >
        <div class="flex justify-end p-2.5">
          <Button @click="open = false" text="x" size="sm">Close Modal</Button>
        </div>
        <slot></slot>
        <div class="bg-red-400 outline-1 outline-dashed outline-gray-700">
          <slot name="test-feed"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport, ref } from 'vue'
import Button from '@/components/Button/Button.vue'

const open = ref<boolean>(false)
</script>

<style scoped lang="scss">
.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.containerContent {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  background-color: white;
}
.modal-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
</style>
