<template>
  <NuxtLayout>
    <BaseOverview>
      <TasksList
        v-if="tasks.length"
        title="Your tasks for today"
        :count="tasks.length"
        :data="tasks"
      />

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
              class="px-0 inline-flex"
              >See all finished tasks</UButton
            >
          </div>
        </template>
      </TasksList>
    </BaseOverview>
  </NuxtLayout>
</template>

<script setup lang="ts">
const tasksStore = useTasksStore();
const { getTasks, getFinishedTasks } = tasksStore;
const { tasks, finishedTasks } = storeToRefs(tasksStore);

await getTasks();
await getFinishedTasks();
</script>
