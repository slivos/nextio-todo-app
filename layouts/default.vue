<template>
  <div class="relative min-h-screen grid-cols-[343px,1fr] p-3 lg:grid lg:p-6">
    <div
      class="pointer-events-none absolute left-0 top-0 z-10 h-full min-h-screen w-full lg:hidden"
      :class="{
        'bg-overlay lg:bg-transparent': overlay,
      }"
    ></div>
    <Sidebar @open="overlay = !overlay" />

    <main class="flex-1">
      <div
        class="mx-auto max-w-7xl px-2 py-5 lg:mx-0 lg:max-w-full lg:px-[60px] lg:py-9"
      >
        <slot />
      </div>
    </main>

    <ButtonPrimaryButton
      v-if="!isBottom"
      class="fixed bottom-10 right-5 min-h-[52px] w-[calc(100%-40px)] lg:bottom-16 lg:right-[84px] lg:min-h-12 lg:w-auto"
      label="New task"
      icon="i-ph-plus"
      @click="isOpen = true"
    />
    <ModalAddTaskModal :is-open="isOpen" @update:isOpen="isOpen = $event" />
  </div>
</template>

<script setup lang="ts">
const overlay = ref(false);
const isOpen = ref(false);

const { isBottom } = useScrollBottom();
</script>
