<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" :id="id" class="modal-toggle"/>
  <label :for="id" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
      <label :for="id" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <slot />
    </label>
  </label>
</template>
<script setup lang="ts">

const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

</script>