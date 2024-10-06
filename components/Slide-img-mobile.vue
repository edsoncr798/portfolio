<script setup lang="ts">
import {Navigation, Pagination} from "swiper/modules";
const modules = [Pagination, Navigation]
import bipbip1 from "~/static/images/jpg/bipbip1.jpg";
import sici1 from "~/static/images/jpg/sici.jpg";
import pokedex from "~/static/images/jpg/pokedex.jpg";

const images = ref([
  {src: bipbip1, alt: 'Project 1'},
  {src: sici1, alt: 'Project 2'},
  {src: pokedex, alt: 'Project 3'},
  {src: bipbip1, alt: 'Project 3'},
  {src: sici1, alt: 'Project 3'},
  {src: pokedex, alt: 'Project 3'}
]);

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
      <swiper-slide v-for="(image, i) in images" :key="i">
        <img :src="image.src" :alt="image.alt">
      </swiper-slide>
    </swiper>
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
  height: 200px;
}

@media (min-width: 768px) {
  .swiper {
    height: 50%;
  }

  .swiper-slide img {
    height: 100%;
    border-radius: 10px;
  }
}

</style>