export const useAutoScroll = () => {
  const containerRef = ref<HTMLElement | null>(null);

  const scrollToBottom = () => {
    nextTick(() => {
      if (containerRef.value) {
        containerRef.value.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    });
  };

  return {
    containerRef,
    scrollToBottom,
  };
};
