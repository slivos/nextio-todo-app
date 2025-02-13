<template>
  <label class="flex w-full cursor-pointer items-center gap-[14px]">
    <input
      type="radio"
      :checked="isSelected"
      class="form-radio h-5 w-5 cursor-pointer border-gray-1 focus-within:outline-none focus-within:ring-0 focus:outline-none focus:ring-0"
      :class="{
        'hover:border-gray-2': !isSelected,
      }"
    />
    <span>{{ option.name }}</span>
  </label>
</template>

<script setup lang="ts">
import type { CategoryProps } from "~/types/category-type";

interface Props {
  isSelected: boolean;
  option: CategoryProps;
}

const props = defineProps<Props>();
</script>

<style scoped>
:deep(.form-radio:checked) {
  @apply bg-white;
  @apply border-black;
  background-image: url("/assets/svg/ellipse.svg");
  background-size: 8px;
}
</style>
