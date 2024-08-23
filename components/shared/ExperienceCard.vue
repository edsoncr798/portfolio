<script setup lang="ts">

defineProps<{
  title?: string;
}>();

</script>

<template>
  <article class="w-[45%] border p-8 rounded-lg block mt--20 mx-0 relative hover:bg-[#f9a826] hover:border-none">
    <p class="text-blue-400">
      <slot>
        {{ title }}
      </slot>
    </p>
  </article>

</template>

<style scoped>

</style>