<template>

  <div class="bg-white/80 relative py-4 px-6 rounded hover:bg-gray-400/90 group transition">

    <button class="absolute top-4 right-4 hidden group-hover:block z-10 hover:bg-gray-200/60 p-1 rounded transition text-cyan-300 hover:text-cyan-600">
      <PencilIcon class="h-4 w-4 fill-current transition"></PencilIcon>
    </button>

    <div class="flex flex-col w-52">
      <p class="text-gray-500 group-hover:text-white">{{ title.substring(0, 50) }}</p>
    </div>

    <div class="flex justify-between mt-4">

      <label  class="cursor-pointer" for="task-modal" title="see more">
        <EyeIcon class="w-5 h-5 fill-gray-500 group-hover:fill-white hover:fill-cyan-900"></EyeIcon>
      </label>

      <button>
        <UserCircleIcon class="w-5 h-5 group-hover:fill-white fill-cyan-700 hover:fill-cyan-900 "></UserCircleIcon>
      </button>

    </div>

    <Modal id="task-modal">
      <p class="text-gray-700">
        {{ title }}
      </p>
    </Modal>

  </div>
</template>
<script setup lang="ts">
import {EyeIcon, PencilIcon, UserCircleIcon} from '@heroicons/vue/24/solid'
import {ref} from "vue";
import Modal from "@/components/Modal.vue"

const title = ref("Mauris sit amet ullamcorper neque. Aenean id nulla nulla. Duis ac dignissim justo. Mauris quis magna et mi aliquam semper.")

</script>