<template>
  <NuxtLayout>
    <BaseOverview>
      <TasksSkeleton v-if="loading" />

      <ClientOnly v-else>
        <TasksList
          v-if="tasks.length"
          :data="tasks"
          :title="`Your tasks in category: ${$route.query.name}`"
        />

        <EmptyResults
          v-else
          :title="`No active tasks in category: ${$route.query.name}`"
        />
      </ClientOnly>
    </BaseOverview>
  </NuxtLayout>
</template>

<script setup lang="ts">
const tasksStore = useTasksStore();
const { getTasks } = tasksStore;
const { tasks, loading } = storeToRefs(tasksStore);
const route = useRoute();

useHead({
  title: `Category: ${route.query.name}`,
});

loading.value = true;

onMounted(async () => {
  await getTasks(`filter[category][_eq]=${route.params.id}`);
});
</script>
