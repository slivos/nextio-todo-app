<template>
  <div
    class="relative flex flex-col gap-10 bg-white rounded-t-2xl lg:rounded-2xl p-5 lg:ps-6 lg:pt-10 lg:pr-10 lg:pb-10 z-20"
    :class="{
      'rounded-2xl': !open,
      'drop-shadow-sidebar lg:drop-shadow-none': open,
    }"
  >
    <div class="flex items-center justify-between">
      <UIcon
        name="svg:logo"
        class="w-[145px] h-[32px] lg:w-[163px] lg:h-[36px] flex-shrink-0"
      />
      <UButton
        @click="toggleOpen"
        class="lg:hidden"
        :ui="buttonUI"
        :icon="open ? 'i-ph-x' : 'i-ph-list'"
        size="lg"
        color="black"
        variant="outline"
      />
    </div>

    <UVerticalNavigation
      class="hidden lg:block absolute top-[72px] lg:top-auto left-0 lg:left-auto w-full lg:relative bg-white p-5 pt-8 pb-10 lg:p-0 rounded-b-2xl lg:rounded-none"
      :class="{
        hidden: !open,
        block: open,
      }"
      :ui="navUI"
      :links="links"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["open"]);

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

const mapLinks = computed(() => {
  return categories.value.map((category) => ({
    label: category.name,
    icon: "svg:square",
    iconClass: "w-[10px] h-[10px]",
    to: `/categories/${String(category.name).toLowerCase()}/tasks?q=${
      category.id
    }`,
  }));
});

const open = ref(false);
const links = ref([
  {
    label: "Dashboard",
    icon: "i-ph-circles-four",
    iconClass: "text-black w-6 h-6",
    to: "/",
  },
  {
    as: "span",
    type: "span",
    label: "YOUR CATEGORIES",
    disabled: true,
  },
  ...mapLinks.value,
  {
    label: "Finished tasks",
    icon: "i-ph-check-square",
    iconClass: "text-black w-6 h-6",
    to: "/tasks/finished-tasks",
  },
]);

const toggleOpen = () => {
  open.value = !open.value;
  emit("open", open.value);
};

const buttonUI = {
  rounded: "rounded-lg",
  variant: {
    outline: `ring-1  ${open ? "ring-black" : "ring-lightGray-3"}`,
  },
};

const navUI = {
  label: "text-lg text-black font-medium",
};
</script>

<style scoped>
:deep(li:first-child .group),
:deep(li:last-child .group) {
  padding: 12px 24px;
}

:deep(li:nth-child(2) .group::before) {
  display: none;
}

:deep(li:nth-child(2) .group span) {
  font-size: 12px;
  font-weight: 700;
  color: #757575;
  letter-spacing: 2px;
}

:deep(.group) {
  border-radius: 99px;
  gap: 14px;
  padding: 8px 40px;
}

:deep(.group::before) {
  border-radius: 99px;
}

:deep(.group:hover) {
  .iconify {
    @apply text-black;
  }
}

:deep(.group:hover::before) {
  border: 1px solid #d6d6d6;
  @apply bg-white;
}
</style>
