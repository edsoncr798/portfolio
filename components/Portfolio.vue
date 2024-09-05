<script setup lang="ts">

import bipbip from '~/static/images/jpg/bipbip.jpg'
import sici from '~/static/images/jpg/sici.jpg'
import pokedex from '~/static/images/jpg/pokedex.jpg'

const images = [
  { src: bipbip, alt: 'Project 1' },
  { src: sici, alt: 'Project 2' },
  { src: pokedex, alt: 'Project 3' }
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

      <div class="carousel">
        <div class="carousel-inner">
          <div
              v-for="(image, index) in images"
              :key="index"
              class="carousel-item"
              :class="{ active: index == currentIndex }"
          >
            <img :src="image.src" :alt="image.alt"/>
          </div>
        </div>
        <button @click="prev" class="carousel-control prev">‹</button>
        <button @click="next" class="carousel-control next">›</button>
      </div>
    </article>
  </section>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  margin: auto;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

</style>