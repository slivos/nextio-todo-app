<template>
  <div class="flex">
    <h2 class="inline-flex items-center text-xl font-medium">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>
