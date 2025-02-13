export const useScrollBottom = () => {
  const isBottom = ref(false);

  const handleScroll = () => {
    const offset = 64; // The offset in pixels
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    // Only apply the check if the document is taller than the viewport
    if (documentHeight > window.innerHeight) {
      if (scrollPosition + offset >= documentHeight) {
        isBottom.value = true;
      } else {
        isBottom.value = false;
      }
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
