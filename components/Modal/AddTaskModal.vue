<template>
  <UModal :ui="modalUI" :model-value="isOpen" prevent-close :transition="false">
    <BaseCard :ui="cardUI">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-medium text-black">New task</h3>
          <UButton
            color="black"
            variant="link"
            icon="i-ph-x"
            size="lg"
            @click="emit('update:isOpen', false)"
          />
        </div>
      </template>

      <div class="flex flex-col gap-5">
        <UTextarea
          :ui="textareaUI"
          v-model="todo"
          :maxrows="5"
          autoresize
          placeholder="What you want to do?"
          class="rounded-xl"
        />

        <USelectMenu
          :ui="selectUI"
          :ui-menu="menuUI"
          v-model="category"
          :options="categories"
          selected-icon=""
          placeholder="Select category"
        >
          <template #default="{ open }">
            <UButton
              color="white"
              class="flex-1 justify-between rounded-full px-6 py-4 text-base text-black ring-gray-1 hover:bg-white"
              :class="{ 'ring-darkGray-1': open, 'hover:ring-gray-2': !open }"
            >
              {{ category?.name ? category.name : "Select category" }}

              <UIcon
                name="i-ph-caret-down"
                class="h-6 w-6 transition-transform"
                :class="[open && 'rotate-180 transform']"
              />
            </UButton>
          </template>

          <template #option="{ option, selected }">
            <Radio :is-selected="selected" :option="option" />
          </template>
        </USelectMenu>
      </div>

      <template #footer>
        <div class="flex items-center justify-end">
          <ButtonPrimaryButton
            class="w-full lg:w-auto"
            label="Add new task"
            icon="i-ph-plus"
            @click="handleAddTask"
          />
        </div>
      </template>
    </BaseCard>
  </UModal>
</template>

<script setup lang="ts">
import type { CategoryProps } from "~/types/category-type";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["update:isOpen"]);

const taskStore = useTaskStore();
const { addTask } = taskStore;
const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);
const route = useRoute();
const query = `filter[category][_eq]=${route.params.id}`;

const category = ref<CategoryProps>();
const todo = ref("");

const handleAddTask = async () => {
  if (!todo.value || !category.value) return;

  await addTask(
    todo.value,
    category.value.id,
    route.params.id ? query : "",
  ).finally(() => {
    category.value = undefined;
    todo.value = "";
  });
};

const modalUI = {
  overlay: {
    background: "bg-overlay",
  },
  container: "items-center",
  rounded: "rounded-2xl",
  shadow: "shadow-none",
  padding: "p-3 sm:p-3",
  width: "sm:max-w-full lg:max-w-[535px]",
};

const cardUI = {
  body: {
    padding: "p-5 py-0 sm:p-5 lg:p-6 lg:py-0",
  },
  header: {
    padding: "p-5 sm:p-5 lg:p-6 lg:pb-5",
  },
  footer: {
    padding: "p-5 sm:p-5 lg:p-6 lg:pt-5",
  },
};

const textareaUI = {
  rounded: "rounded-xl",
  placeholder: "placeholder-lightGray-4",
  color: {
    white: {
      outline:
        "shadow-none p-5 text-black text-lg font-medium ring-gray-1 focus:ring-1 focus:ring-darkGray-1 hover:ring-gray-2 min-h-[88px]",
    },
  },
};

const selectUI = {
  rounded: "rounded-full",
};

const menuUI = {
  rounded: "rounded-[20px]",
  shadow: "shadow-dropdown",
  padding: "py-3",
  ring: "ring-lightGray-5",
  option: {
    size: "text-lg font-medium",
    active: "bg-white",
    padding: "px-5 py-2",
  },
};
</script>
