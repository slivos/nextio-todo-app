<template>
  <NuxtLayout>
    <BaseOverview>
      <TasksSkeleton v-if="loading" />

      <ClientOnly v-else>
        <TasksList
          v-if="finishedTasks.length"
          title="Your finished tasks"
          :data="finishedTasks"
        />

        <EmptyResults v-else title="You don't have any finished tasks" />
      </ClientOnly>
    </BaseOverview>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Finished tasks",
});

const tasksStore = useTasksStore();
const { getFinishedTasks } = tasksStore;
const { finishedTasks, loading } = storeToRefs(tasksStore);

loading.value = true;

onMounted(async () => {
  await getFinishedTasks();
});
</script>
