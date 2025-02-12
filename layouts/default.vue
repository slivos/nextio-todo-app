<template>
  <div class="relative min-h-screen lg:grid grid-cols-[343px,1fr] p-3 lg:p-6">
    <div
      class="lg:hidden pointer-events-none absolute top-0 left-0 w-full min-h-screen h-full z-10"
      :class="{
        'bg-overlay lg:bg-transparent': overlay,
      }"
    ></div>
    <Sidebar @open="overlay = !overlay" />

    <main class="flex-1">
      <div
        class="px-2 lg:px-[60px] py-5 lg:py-9 mx-auto lg:mx-0 max-w-7xl lg:max-w-full"
      >
        <slot />
      </div>
    </main>

    <ButtonPrimaryButton
      class="fixed w-[calc(100%-40px)] lg:w-auto bottom-10 lg:bottom-16 right-5 lg:right-[84px] min-h-[52px] lg:min-h-12"
      label="New task"
      icon="i-ph-plus"
      @click="isOpen = true"
    />
    <ModalAddTaskModal :is-open="isOpen" @update:isOpen="isOpen = $event" />
  </div>
</template>

<script setup lang="ts">
const categoriesStore = useCategoriesStore();
const { getCategories } = categoriesStore;

const overlay = ref(false);
const isOpen = ref(false);

await getCategories();
</script>
