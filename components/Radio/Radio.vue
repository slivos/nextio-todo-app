<template>
  <client-only>
    <label class="flex w-full items-center gap-[14px] cursor-pointer">
      <input
        type="radio"
        :checked="isSelected"
        @change="onChange"
        class="form-radio w-5 h-5 border-gray-1 focus:ring-0 focus-within:ring-0 focus:outline-none focus-within:outline-none cursor-pointer"
        :class="{
          'hover:border-gray-2': !isSelected,
        }"
      />
      <span>{{ option.name }}</span>
    </label>
  </client-only>
</template>

<script setup lang="ts">
import type { CategoryProps } from "~/types/category-type";

interface Props {
  isSelected: boolean;
  option: CategoryProps;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:isSelected"]);

const onChange = (e: Event) => {
  console.log(e);
};
</script>

<style scoped>
:deep(.form-radio:checked) {
  @apply bg-white;
  @apply border-black;
  background-image: url("/assets/svg/ellipse.svg");
  background-size: 8px;
}
</style>
