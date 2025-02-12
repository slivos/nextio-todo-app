<template>
  <NuxtLayout>
    <BaseOverview>
      <TasksList v-if="tasks.length" :data="tasks">
        <template #title>
          <span
            >Your tasks in category:
            <span class="capitalize">
              {{ $route.params.slug }}
            </span></span
          >
        </template>
      </TasksList>
    </BaseOverview>
  </NuxtLayout>
</template>

<script setup lang="ts">
const tasksStore = useTasksStore();
const { getTasks } = tasksStore;
const { tasks } = storeToRefs(tasksStore);
const route = useRoute();

await getTasks(`filter[category][_eq]=${route.query.q}`);
</script>
