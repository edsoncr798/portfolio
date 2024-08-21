<script setup lang="ts">

import CustomHeader from "~/components/shared/CustomHeader.vue";
import activeSectionStore from "~/store/activeSection.store";

const activeSection = computed(() => activeSectionStore.get_active_section())

</script>

<template>
  <custom-header :active-section="activeSection"/>
  <slot />
</template>

<style scoped>

</style>