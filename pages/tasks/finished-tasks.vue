<template>
  <NuxtLayout>
    <BaseOverview>
      <TasksList
        v-if="finishedTasks.length"
        title="Your finished tasks"
        :data="finishedTasks"
      />
    </BaseOverview>
  </NuxtLayout>
</template>

<script setup lang="ts">
const tasksStore = useTasksStore();
const { getFinishedTasks } = tasksStore;
const { finishedTasks } = storeToRefs(tasksStore);

await getFinishedTasks();
</script>
