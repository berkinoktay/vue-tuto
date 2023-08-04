<template>
  <Button text="Open Modal" @click="open = true" />
  <Teleport to="body">
    <Transition class="duration-500" name="modalFade">
      <div
        v-show="open"
        @click.self="open = false"
        class="fixed top-0 left-0 z-[100] flex items-center justify-center w-full h-full bg-black/50"
      >
        <div class="insideModal duration-300 min-h-[300px] bg-white min-w-[80%]">
          <div class="flex justify-end p-2.5">
            <Button @click="open = false" text="x" size="sm">Close Modal</Button>
          </div>
          <slot></slot>
          <div class="bg-red-400 outline-1 outline-dashed outline-gray-700">
            <slot name="test-feed"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport, ref } from 'vue'
import Button from '@/components/Button/Button.vue'

const open = ref<boolean>(false)
</script>

<style scoped lang="scss">
.modalFade-enter-from,
.modalFade-leave-to {
  opacity: 0;
  .insideModal {
    scale: 0;
  }
}
</style>
