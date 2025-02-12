<template>
  <UCheckbox
    :ui="checkboxUI"
    :checked="isCompleted"
    :model-value="isCompleted"
    @change="emit('update:isCompleted', $event)"
  >
    <template #label>
      <span
        :class="{
          'line-through': isCompleted,
        }"
        class="text-base lg:text-lg font-medium text-black leading-5 break-all cursor-pointer"
        >{{ label }}</span
      >
      <Badge :category="category" />
    </template>
  </UCheckbox>
</template>

<script setup lang="ts">
import type { CategoryProps } from "~/types/category-type";

interface Props {
  label: string;
  isCompleted: boolean;
  category: CategoryProps | undefined;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:isCompleted"]);

const checkboxUI = {
  wrapper: "checkbox-wrapper",
  container: "h-8",
  base: "w-6 h-6 cursor-pointer",
  rounded: "rounded-md",
  border: "border-gray-1 hover:border-gray-2",
  inner: "ms-3 lg:ms-4",
  label: "flex items-center gap-3 lg:gap-4 flex-wrap min-h-8",
};
</script>

<style scoped>
:deep(.form-checkbox:checked) {
  @apply bg-black;
  background-image: url("/assets/svg/check.svg");
  background-size: 12px;
}
</style>
