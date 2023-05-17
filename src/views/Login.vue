<template>
  <div class="flex justify-center py-12 content items-center">

    <form @submit.prevent="login"
          class="flex flex-col justify-center w-80 rounded-3xl bg-transparent/20 items-center py-8">

      <div class="w-16 h-16 bg-gray-100/50 flex justify-center items-center rounded-full my-2">
        <UserIcon class="h-9 w-9 fill-white"/>
      </div>

      <div class="my-2 flex items-center border-b">
        <EnvelopeIcon class="h-5 w-5 fill-white"></EnvelopeIcon>
        <input v-model="email" class="py-3 px-4 border-none bg-transparent placeholder-white text-white" type="text"
               placeholder="Email ID">
      </div>

      <div class="my-2 flex items-center border-b">
        <LockClosedIcon class="h-5 w-5 fill-white"></LockClosedIcon>
        <input v-model="password" class="py-3 px-4 border-none bg-transparent placeholder-white text-white"
               type="password" placeholder="Password">
      </div>

      <div class="my-5 flex items-center">
        <input id="remember-me" class="rounded-full border-none" type="checkbox">
        <label for="remember-me" class="text-white ml-3 text-xs">Remember me</label>
        <a class="text-white text-xs ml-14">Forgot Password?</a>
      </div>

      <div class="my-3 flex items-center">
        <input
            class="py-2 px-24 cursor-pointer bg-transparent/40 rounded-2xl placeholder-white text-white hover:bg-gray-800/80"
            value="Login" type="submit" placeholder="Password">
      </div>

    </form>
  </div>


</template>
<script setup lang="ts">
import {EnvelopeIcon, LockClosedIcon, UserIcon} from '@heroicons/vue/24/solid'
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";

const router = useRouter()

const authStore = useAuthStore()

let email = ref('')
let password = ref('')

let login = () => {
  if (email.value === 'admin' && password.value === 'admin') {
    authStore.auth = true
    console.log('hola')

    router.push('/board')
  }
}

</script>