export const useScrollBottom = () => {
  const isBottom = ref(false);

  const handleScroll = () => {
    const scrollPosition = Math.ceil(window.innerHeight + window.scrollY);
    const documentHeight = Math.ceil(document.documentElement.scrollHeight);

    // Only apply the check if the document is taller than the viewport
    if (documentHeight > window.innerHeight) {
      isBottom.value = scrollPosition >= documentHeight;
    } else {
      // If the page is short, always show the button
      isBottom.value = false;
    }
  };
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on mount in case the page is already scrolled
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { isBottom };
};
