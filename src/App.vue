<template>
  <div class="absolute top-0 h-screen w-full bg-cover" :style="'background-image: url(' + bg + ')'"></div>
  <div class="relative min-h-screen">
    <header>
      <Navbar></Navbar>
    </header>
    <main>
      <RouterView/>
    </main>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import {ref, watch} from "vue";
import Footer from '@/components/Footer.vue'

const defaultBg = 'https://www.todofondos.net/wp-content/uploads/todofondos-4KparaPC5.jpg'
const route = useRoute()
const bg = ref()

watch(() => route.matched, (matched) => {
 bg.value = matched.length > 0 ? (matched[0].meta as any).bg ?? defaultBg : defaultBg
})
</script>
