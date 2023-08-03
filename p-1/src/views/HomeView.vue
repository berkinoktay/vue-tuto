<template>
  <h2>I am at HOME</h2>  
  <div id="test-modal-parent" class="bg-cyan-300 outline outline-8 outline-lime-700 p-10 m-5">a</div>
  <Modal>
    <h1>Modal</h1>
    <p>Modal content</p>
    <template #test-feed>Test only fix</template>
  </Modal>

</template>

<script setup lang="ts">
import Modal from '@/components/Modal/Modal.vue'
</script>
