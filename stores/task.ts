import { defineStore } from "pinia";
import type { Response } from "~/types/response";

export const useTaskStore = defineStore("task", () => {
  const { getApiUrl } = useApiUrl();
  const tasksStore = useTasksStore();
  const { getTasks, getFinishedTasks } = tasksStore;

  const addTask = async (todo: string, categoryId: string) => {
    try {
      const res = await $fetch<Response>(getApiUrl("/items/todos"), {
        method: "POST",
        body: {
          todo: todo,
          category: categoryId,
        },
      });

      if (res.data) {
        await getTasks();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id: string, is_completed: boolean) => {
    try {
      const res = await $fetch<Response>(getApiUrl(`/items/todos/${id}`), {
        method: "PATCH",
        body: { is_completed: is_completed },
      });

      if (res.data) {
        console.log(res);
        await getTasks();
        await getFinishedTasks();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const res = await $fetch<Response>(getApiUrl(`/items/todos/${id}`), {
        method: "DELETE",
      });

      await getFinishedTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return { addTask, updateTask, deleteTask };
});
