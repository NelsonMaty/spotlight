<template>
  <div
    class="aspect-[9/10] w-72 flex-none overflow-hidden rounded-xl object-cover"
  >
    <img :src="source" alt="" class="h-full w-full object-cover" />
  </div>
</template>

<script setup>
const props = defineProps({
  source: String,
});
</script>
