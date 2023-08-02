<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import Button from './components/Button/Button.vue'
import router from './router'
console.log(router.getRoutes())
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
</script>

<template>
  <nav>
    <Button />
    <Button variant="secondary" size="sm" @clickTest="(e, id) => console.log('VUERULAZZZZ', e,id)" />
    <Button variant="danger" size="lg" />
    <Button variant="danger" size="lg" disabled />

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
