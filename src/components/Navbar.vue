<template>
  <div class="bg-transparent border-b h-14 flex items-center justify-between py-3.5 px-14 ">
    <RouterLink to="/" class="text-white font-bold text-2xl hover:text-yellow-100 transition">Tareas</RouterLink>
    <RouterLink v-show="!authStore.auth" to="/login" class="text-white hover:text-yellow-100 transition">Iniciar Sesion</RouterLink>
    <p v-show="authStore.auth" class="font-xl text-white">Bienvenido</p>
  </div>
</template>
<script setup lang="ts">

import {useAuthStore} from "@/stores/auth";

const authStore = useAuthStore()
</script>