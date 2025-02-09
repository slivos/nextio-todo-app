<template>
  <div class="min-h-screen flex flex-col">
    <UVerticalNavigation :links="links" />

    <main class="flex-1">
      <UContainer>
        <slot />
      </UContainer>
    </main>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    label: "Dashboard",
    icon: "i-ph-circles-four",
    to: "/",
  },
  {
    label: "Personal",
    icon: "svg:square",
    iconClass: "w-[10px] h-[10px]",
  },
  {
    label: "Career",
    icon: "svg:square",
    iconClass: "w-[10px] h-[10px]",
  },
  {
    label: "Workout",
    icon: "svg:square",
    iconClass: "w-[10px] h-[10px]",
  },
  {
    label: "Travel",
    icon: "svg:square",
    iconClass: "w-[10px] h-[10px]",
  },
  {
    label: "Finished tasks",
    icon: "i-ph-check-square",
  },
];
</script>
