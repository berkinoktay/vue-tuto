<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'
import Button from './components/Button/Button.vue'

import logo from './assets/logo.svg'

const routes: any = [
  { name: 'home', path: '/' },
  { name: 'posts', path: '/posts' },
  { name: 'todos', path: '/todos' }
]
const testEmit = () => 
{
  console.log('testEmit')
  console.log(performance.now(), ' - clickButton outside')
}
const logoRef = ref<string>(logo);

</script>

<template>
  <nav>
    <Button />
    <Button variant="secondary" size="sm" @clickTest="(e, id) => console.log('VUERULAZZZZ', e,id)" />
    <Button variant="danger" size="lg" />
    <Button variant="danger" size="lg" disabled :leftIcon="logoRef" :rightIcon="logoRef" />

    <ul class="w-full flex">
      <li
        class="flex-grow text-center border rounded-lg m-3 hover:transition-all hover:bg-lime-200 bg-lime-100"
        v-for="route in routes"
        :key="route.name"
      >
        <router-link :to="route.path">
          <div class="p-4">
            {{ route.name }}
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped></style>
