import { defineStore } from "pinia";
import type { Response } from "~/types/response";

export const useTaskStore = defineStore("task", () => {
  const { getApiUrl } = useApiUrl();
  const tasksStore = useTasksStore();
  const { getTasks, getFinishedTasks } = tasksStore;
  const { loading } = storeToRefs(tasksStore);
  const { containerRef, scrollToBottom } = useAutoScroll();
  containerRef.value = document?.body;

  const addTask = async (todo: string, categoryId: string, query?: string) => {
    try {
      const res = await $fetch<Response>(getApiUrl("/items/todos"), {
        method: "POST",
        body: {
          todo: todo,
          category: categoryId,
        },
      });

      if (res.data) {
        await getTasks(query);
        scrollToBottom();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (
    id: string,
    is_completed: boolean,
    query?: string
  ) => {
    loading.value = true;
    try {
      const res = await $fetch<Response>(getApiUrl(`/items/todos/${id}`), {
        method: "PATCH",
        body: { is_completed: is_completed },
      });

      if (res.data) {
        await getTasks(query);

        if (!query) {
          await getFinishedTasks();
        }
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
