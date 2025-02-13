<template>
  <div class="flex flex-col gap-5">
    <h2 class="inline-flex items-center gap-2 text-xl font-medium">
      <span v-if="title">{{ title }}</span>

      <UBadge v-if="count" color="black" :ui="badgeUI">{{ count }}</UBadge>
    </h2>

    <div class="flex flex-col gap-2">
      <Task v-for="task in data" :key="task.id" :task="task" />

      <slot name="link"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TasksListProps } from "~/types/tasks-list-type";

const props = defineProps<TasksListProps>();

const badgeUI = {
  rounded: "rounded-full",
  base: "min-w-6 justify-center",
};
</script>
