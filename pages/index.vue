<template>
  <NuxtLayout>
    <BaseOverview>
      <TasksSkeleton v-if="loading" />

      <ClientOnly v-else>
        <TasksList
          v-if="tasks.length"
          title="Your tasks for today"
          :count="tasks.length"
          :data="tasks"
        />

        <EmptyResults v-else title="You don't have any tasks for today" />

        <TasksList
          v-if="finishedTasks.length"
          title="Your recently finished tasks"
          :data="finishedTasks?.slice(0, 3)"
        >
          <template v-if="finishedTasks.length > 3" #link>
            <div>
              <UButton
                variant="link"
                size="md"
                color="black"
                to="/tasks/finished-tasks"
                class="inline-flex px-0"
                >See all finished tasks</UButton
              >
            </div>
          </template>
        </TasksList>
      </ClientOnly>
    </BaseOverview>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Dashboard",
});

const tasksStore = useTasksStore();
const { getTasks, getFinishedTasks } = tasksStore;
const { tasks, finishedTasks, loading } = storeToRefs(tasksStore);

loading.value = true;

onMounted(async () => {
  await getTasks();
  await getFinishedTasks();
});
</script>
