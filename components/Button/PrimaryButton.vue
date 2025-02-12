<template>
  <UButton
    :ui="buttonUI"
    :label="label"
    :icon="icon"
    color="black"
    size="xl"
    class="justify-center lg:justify-normal hover:bg-black-100 shadow-button min-h-12 px-4"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  icon: String,
});

const buttonUI = {
  rounded: "rounded-full",
};
</script>
