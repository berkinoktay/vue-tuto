<template>
  <button
    class="w-min-fit p-2 border border-solid border-black/50 rounded-xl text-white disabled:bg-gray-500/50 disabled:text-gray-50/50 disabled:cursor-not-allowed"
    :class="[classNameList, classname]"
    :variant="props.variant"
    :disabled="props.disabled"
    @click="(e) => emit('clickTest', e, 4)"
  >
    <div class="flex justify-center items-center w-fit">
      <img v-if="props.leftIcon" :src="props.leftIcon" class="mr-2" :class="imageSize" />
      {{ props.text }}
      <img v-if="props.rightIcon" :src="props.rightIcon" class="ml-2" :class="imageSize" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { VueElement, computed } from 'vue'

interface Props {
  text: string
  variant: 'primary' | 'secondary' | 'danger'
  size: 'sm' | 'md' | 'lg'
  fluid?: boolean
  disabled?: boolean
  classname?: string
  leftIcon?: string
  rightIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Button',
  variant: 'primary',
  size: 'md'
})

const emit = defineEmits<{
  (name: 'clickTest', event: any, id: number): void | any
}>()

// const clickButton = () => {
//   // If I want to send this emit inline I hagve to put the  @click="$emit('click')"
//   // in the template
//   console.log(performance.now(), ' - clickButton inside')
//   emit('clickTest')
// }

// Versions - typescript
// const props = defineProps<Props>()
// const props = defineProps(['text', 'variant', 'size', 'disabled'])
// const props = defineProps({
//   text:{
//     type: String,
//     required: true,
//     default: 'Button'
//   },
//   variant:{
//     type: String,
//     required: true,
//     default: 'primary'
//   },
//   size:{
//     type: String,
//     required: true,
//     default: 'md'
//   },
//   }
// )

const classNameList = computed(() => {
  return {
    'bg-blue-500': props.variant === 'primary',
    'bg-red-500': props.variant === 'danger',
    'bg-green-500': props.variant === 'secondary',
    'text-sm p-1  ': props.size === 'sm',
    'text-md p-2 ': props.size === 'md',
    'text-lg p-4': props.size === 'lg',
    [props.variant]: props.variant
  }
})
const imageSize = computed(() => {
  return {
    'w-5': props.size === 'sm',
    'w-6': props.size === 'md',
    'w-7': props.size === 'lg'
  }
})
</script>

<style scoped>
:deep(.classNameTest) {
  outline: 0;
}
</style>
