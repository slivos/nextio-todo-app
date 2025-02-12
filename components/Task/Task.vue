<template>
  <BaseCard :ui="cardUI">
    <TaskCheckbox
      :class="{ 'me-8 lg:me-10': !task.is_completed }"
      :label="task.todo"
      :is-completed="task.is_completed"
      :category="currentCategory"
      @update:is-completed="handleUpdate"
    />

    <UButton
      v-if="task.is_completed"
      class="ms-3 lg:ms-4 ring-lightGray-1 hover:ring-red-1 hover:bg-white text-black hover:text-red-1 rounded-lg size-8 lg:size-10 p-2 lg:p-3 flex justify-center items-center"
      icon="i-ph-trash"
      size="lg"
      square
      variant="outline"
      @click="deleteTask(task.id)"
    />
  </BaseCard>
</template>

<script setup lang="ts">
import type { TaskProps } from "~/types/task-type";

interface Props {
  task: TaskProps;
}

const props = defineProps<Props>();

const taskStore = useTaskStore();
const { updateTask, deleteTask } = taskStore;
const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

const currentCategory = computed(() => {
  const category = categories.value.find(
    (cat) => cat.id === props.task.category
  );

  return category;
});

const handleUpdate = (isCompleted: boolean) => {
  updateTask(props.task.id, isCompleted);
};

const cardUI = {
  body: {
    base: "min-h-[64px]",
    background: "",
    padding: "flex items-center justify-between p-4 sm:p-4 lg:p-3 lg:ps-5",
  },
};
</script>
