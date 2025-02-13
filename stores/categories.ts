import { defineStore } from "pinia";
import type { CategoriesProps } from "~/types/categories-type";
import type { CategoryProps } from "~/types/category-type";

export const useCategoriesStore = defineStore("categories", () => {
  const { getApiUrl } = useApiUrl();

  const categories = ref<CategoryProps[]>([]);

  const getCategories = async () => {
    try {
      const res = await $fetch<CategoriesProps>(getApiUrl("/items/categories"));

      if (res.data) categories.value = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { categories, getCategories };
});
