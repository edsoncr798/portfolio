//
//
// export function useIntersectionObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
//   const target = ref<HTMLElement | null>(null);
//   const observer = ref<IntersectionObserver | null>(null);
//
//   onMounted(() => {
//     if (target.value) {
//       observer.value = new IntersectionObserver(callback, options);
//       observer.value.observe(target.value);
//     }
//   });
//
//   onUnmounted(() => {
//     if (observer.value && target.value) {
//       observer.value.unobserve(target.value);
//     }
//   });
//
//   return { target };
// }
