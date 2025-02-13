<template>
  <div
    class="relative z-20 flex flex-col gap-10 rounded-t-2xl bg-white p-5 lg:rounded-2xl lg:pb-10 lg:pr-10 lg:ps-6 lg:pt-10"
    :class="{
      'rounded-2xl': !open,
      'drop-shadow-sidebar lg:drop-shadow-none': open,
    }"
  >
    <div class="flex items-center justify-between">
      <UIcon
        name="svg:logo"
        class="h-[32px] w-[145px] flex-shrink-0 lg:h-[36px] lg:w-[163px]"
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
      class="absolute left-0 top-[72px] hidden w-full rounded-b-2xl bg-white p-5 pb-10 pt-8 lg:relative lg:left-auto lg:top-auto lg:block lg:rounded-none lg:p-0"
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
const { getCategories } = categoriesStore;
const { categories } = storeToRefs(categoriesStore);

await getCategories();

const mapLinks = computed(() => {
  return categories.value.map((category) => ({
    label: category.name,
    icon: "svg:square",
    iconClass: "w-[10px] h-[10px]",
    to: `/categories/${category.id}/tasks?name=${category.name}`,
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
