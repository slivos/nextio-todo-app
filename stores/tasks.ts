import { defineStore } from "pinia";
import type { TaskProps } from "~/types/task-type";
import type { TasksListProps } from "~/types/tasks-list-type";

export const useTasksStore = defineStore("tasks", () => {
  const { getApiUrl } = useApiUrl();
  const tasks = ref<TaskProps[]>([]);
  const finishedTasks = ref<TaskProps[]>([]);

  const getTasks = async (query?: string) => {
    try {
      const res = await $fetch<TasksListProps>(
        getApiUrl(
          "/items/todos",
          `sort=date_updated&filter[is_completed][_eq]=false${
            query ? `&${query}` : ""
          }`
        )
      );

      if (res.data) tasks.value = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getFinishedTasks = async () => {
    try {
      const res = await $fetch<TasksListProps>(
        getApiUrl(
          "/items/todos",
          "sort=date_updated&filter[is_completed][_eq]=true"
        )
      );

      if (res.data) finishedTasks.value = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { tasks, finishedTasks, getTasks, getFinishedTasks };
});
