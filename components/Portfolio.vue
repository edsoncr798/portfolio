<script setup lang="ts">
import bipbip from '~/static/images/jpg/bipbip.jpg';
import sici from '~/static/images/jpg/sici.jpg';
import pokedex from '~/static/images/jpg/pokedex.jpg';
import {Navigation, Pagination} from "swiper/modules";

const modules = [Pagination, Navigation ]


const images = [
  {src: bipbip, alt: 'Project 1'},
  {src: sici, alt: 'Project 2'},
  {src: pokedex, alt: 'Project 3'},
  {src: pokedex, alt: 'Project 3'},
  {src: sici, alt: 'Project 3'},
  {src: pokedex, alt: 'Project 3'},
  {src: bipbip, alt: 'Project 3'}
];


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
    </article>
    <swiper
        :slidesPerView="3"
        :spaceBetween="10"
        :pagination="{
    type: 'bullets',
    }"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide v-for="(image, i) in images" :key="i">
        <img :src="image.src" :alt="image.alt">
      </swiper-slide>
    </swiper>


  </section>
</template>

<style scoped>

swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 200px;
  margin: 20px auto;
}

</style>