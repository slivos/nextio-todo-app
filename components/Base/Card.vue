<template>
  <UCard :ui="cardUI">
    <template v-if="$slots.header" #header>
      <slot name="header"></slot>
    </template>

    <slot />

    <template v-if="$slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps({
  ui: Object,
});

const cardUI = {
  rounded: props.ui?.rounded ?? "rounded-2xl",
  divide: props.ui?.divide ?? "divide-none",
  ring: props.ui?.ring ?? "ring-0",
  shadow: props.ui?.shadow ?? "shadow-none",
  ...props.ui,
};
</script>
