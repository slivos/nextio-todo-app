<template>
  <div class="flex flex-col gap-11">
    <BaseOverviewSkeleton v-if="isLoading" />
    <ClientOnly v-else>
      <h1
        class="text-3.5xl font-medium leading-10.5 lg:text-4.5xl lg:leading-13"
      >
        <span>{{ greeting }}</span>
        <span class="ms-3 hidden text-xl font-medium text-gray-3 lg:inline">
          {{ today }}</span
        >
      </h1>
    </ClientOnly>
    <slot />
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(false);

isLoading.value = true;

const today = computed(() => {
  const d = new Date();
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
});

const greeting = computed(() => {
  const hours = new Date().getHours();
  let message;

  if (hours < 12) {
    message = "Good Morning";
  } else if (hours >= 17) {
    message = "Good Evening";
  } else {
    message = "Good Afternoon";
  }

  return `${message} Daniel`;
});

onMounted(() => {
  isLoading.value = false;
});
</script>
