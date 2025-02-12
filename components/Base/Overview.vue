<template>
  <div class="flex flex-col gap-11">
    <h1 class="text-3.5xl leading-10.5 lg:leading-13 lg:text-4.5xl font-medium">
      <span>Good Morning Daniel</span>
      <span class="text-gray-3 font-medium text-xl ms-3 hidden lg:inline">
        {{ today }}</span
      >
    </h1>

    <slot />
  </div>
</template>

<script setup lang="ts">
const today = computed(() => {
  const d = new Date();
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
});
</script>
