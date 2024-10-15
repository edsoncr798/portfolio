<script setup lang="ts">
import {Navigation, Pagination} from "swiper/modules";
const modules = [Pagination, Navigation]
import bipbip1 from "~/static/images/jpg/bipbip1.jpg";
import sici1 from "~/static/images/jpg/sici.jpg";
import pokedex from "~/static/images/jpg/pokedex.jpg";
import ModalDescription from "~/components/shared/ModalDescription.vue";
import {mediaData} from "~/data/mediaData";

const data = mediaData;

const openModal = ref(false);
const selectedImageId = ref(null);

const openModalDescription = (id) => {
  selectedImageId.value = id;
  openModal.value = true;
};

const closeModal = () => {
  openModal.value = false;
};

</script>

<template>
  <div>
    <swiper
        :slidesPerView="3"
        :spaceBetween="10"
        :pagination="{
    type: 'bullets',
    }"
        :modules="modules"
    >
      <swiper-slide v-for="image in data" :key="image.id">
        <img
            :src="image.images[0].src"
            :alt="image.alt"
            @click="openModalDescription(image.id)"
        >
      </swiper-slide>
    </swiper>
    <modal-description v-if="openModal" :selectedImageId="selectedImageId"  @closeModal="closeModal"/>
  </div>
</template>
<style scoped>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
  border-radius: 5px;
}

.swiper {
  width: 100%;
  height: 100%;
}



</style>