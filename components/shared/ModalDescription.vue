<script setup lang="ts">
import {mediaData} from "~/data/mediaData";

const emit = defineEmits(['closeModal']);


const props = defineProps({
  selectedImageId: {
    type: null,
    required: true
  }
});

const closeModal = () => {
  emit('closeModal');
};

const selectedImageData = computed(() => {
  return mediaData.find((item) => item.id === props.selectedImageId);
});

</script>

<template>
  <div v-if="selectedImageData"
       class="fixed inset-0 bg-black z-50">
    <div class="h-full w-full border-gray-100">
      <div
          class="absolute w-[30px] h-[30px] rounded-full bg-black top-2 right-2 text-white shadow text-center leading-7
        font-extrabold"
          @click="closeModal"
      >
        X
      </div>

      <div class="h-[500px] bg-amber-50">
        <video
            class="w-full h-[500px]"
            controls autoplay>
          <source :src=" selectedImageData.video" type="video/mp4">
        </video>
      </div>

      <div class="h-full">
        <h1 class="text-white text-4xl">{{ selectedImageData.name }}</h1>
        <p class="text-white">{{ selectedImageData.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>