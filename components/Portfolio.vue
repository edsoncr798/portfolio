<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/swiper-bundle.css";

import bipbip from '~/static/images/jpg/bipbip.jpg'
import sici from '~/static/images/jpg/sici.jpg'
import pokedex from '~/static/images/jpg/pokedex.jpg'

const images = [
  {src: bipbip, alt: 'Project 1'},
  {src: sici, alt: 'Project 2'},
  {src: pokedex, alt: 'Project 3'}
];

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prev = () => {
  currentIndex.value =
      (currentIndex.value - 1 + images.length) % images.length;
};

</script>

<template>
  <section class="section_container bg-[#2b2c2c] border-y border-[#5a5a5a]">
    <article class="section_content text-center">
      <span class="section_title">Portafolio</span>
      <p class="text-[#999999] py-10">A lo largo de mi formación como desarrollador web, he trabajado en una serie de
        proyectos que no solo me han
        permitido consolidar mis conocimientos, sino que también me han desafiado a aprender nuevas tecnologías y
        enfoques. Desde proyectos académicos donde puse en práctica lo aprendido en el desarrollo full stack, hasta
        proyectos reales en los que he colaborado como parte de un equipo de desarrollo, cada experiencia ha sido
        fundamental en mi crecimiento profesional.

        En esta sección, te presento algunos de los proyectos que más me marcaron, tanto en mi etapa de formación como
        en mi carrera profesional. Estos proyectos reflejan mi capacidad para resolver problemas, aprender rápidamente
        nuevas herramientas, y contribuir efectivamente al éxito de un equipo.</p>
      <!--      <div class="carousel grid grid-cols-3 grid-flow-row gap-20">-->
      <!--        <div class="w-[100px] h-[150px]">-->
      <!--          <img :src="pokedex" class=" h-full w-full rounded-lg" alt="screnpoke">-->
      <!--        </div>-->

      <!--        <div class="w-[100px] h-[150px]">-->
      <!--          <img :src="bipbip" class=" h-full w-full rounded-lg" alt="scren-bipbip">-->
      <!--        </div>-->

      <!--        <div class="w-[100px] h-[150px]">-->
      <!--          <img :src="sici" class=" h-full w-full rounded-lg" alt="screnSici">-->
      <!--        </div>-->

      <!--        <div class="w-[100px] h-[150px]">-->
      <!--          <img :src="pokedex" class=" h-full w-full rounded-lg" alt="img">-->
      <!--        </div>-->

      <!--      </div>-->

      <swiper :slides-per-view="1" navigation pagination>
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt"/>
        </swiper-slide>
      </swiper>

    </article>
  </section>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
  display: block;
}

</style>