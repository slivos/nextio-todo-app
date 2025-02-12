<template>
  <client-only>
    <UBadge :ui="badgeUI">{{ category?.name }}</UBadge>
  </client-only>
</template>

<script setup lang="ts">
import type { CategoryProps } from "~/types/category-type";

interface Props {
  category: CategoryProps | undefined;
}

const { category } = defineProps<Props>();

const checkBadge = (name: string | undefined, equal: string) => {
  return name?.toLowerCase() === equal.toLowerCase();
};

const selectedColor = computed(() => {
  if (checkBadge(category?.name, "Personal")) {
    return "bg-blue-1 text-black";
  }

  if (checkBadge(category?.name, "Travel")) {
    return "bg-purple-1";
  }

  if (checkBadge(category?.name, "Workout")) {
    return "bg-orange-1";
  }

  if (checkBadge(category?.name, "Career")) {
    return "bg-green-1 text-black";
  }
});

const badgeUI = {
  rounded: "rounded-full",
  variant: {
    solid: selectedColor.value,
  },
};
</script>
