<script setup lang="ts">

import {Navigation, Pagination} from "swiper/modules";

const modules = [Pagination, Navigation]

import bipbip1 from "~/static/images/jpg/bipbip1.jpg";
import bipbip2 from "~/static/images/jpg/bipbip2.jpg";
import bipbip3 from "~/static/images/jpg/bipbip3.jpg";
import bipbip4 from "~/static/images/jpg/bipbip4.jpg";
import bipPlay from "~/static/videos/bipbipplay.mp4";
import sici1 from "~/static/images/jpg/sici1.jpg";
import sici2 from "~/static/images/jpg/sici2.jpg";
import sici3 from "~/static/images/jpg/sici3.jpg";
import sici4 from "~/static/images/jpg/sici4.jpg";
import siciPlay from "~/static/videos/siciplay.mp4";
import pokedex from "~/static/images/jpg/pokedex.jpg";

const proyectImages = ref([
  {
    name: 'Bipbip',
    description: 'En este proyecto, trabajé con Ionic Framework por primera vez lo cual fue un reto, ' +
        'tambien me ayudó a fortalecer mi conocimiento en el uso del Composition API. ' +
        'Uno de los mayores retos fue aprender a utilizar Firebase para implementar funciones ' +
        'esenciales en la app, como la autenticación mediante número de celular y verificacion del numero. ' +
        'Aunque al principio fue complicado, profundicé en la documentación para cada situación específica y pude superar esos obstáculos. ' +
        'Además, utilicé TailwindCSS para el diseño y me enfrenté al reto de integrar la API del mapa, lo cual también implicó aprender nuevas ' +
        'funciones a través de la documentación. Este proyecto me permitió mejorar mi capacidad de aprendizaje y resolución ' +
        'de problemas en un entorno real.',
    images: [
      {src: bipbip1, alt: 'Bipbip 1'},
      {src: bipbip2, alt: 'Bipbip 2'},
      {src: bipbip3, alt: 'Bipbip 3'},
      {src: bipbip4, alt: 'Bipbip 4'}
    ],
    video: bipPlay,
    alt: 'Project 1'
  },
  {
    name: 'Sici',
    images: [
      {src: sici1, alt: 'Sici 1'},
      {src: sici2, alt: 'Sici 2'},
      {src: sici3, alt: 'Sici 3'},
      {src: sici4, alt: 'Sici 4'}
    ],
    video: siciPlay,
    alt: 'Project 2'
  },
  {
    name: 'Pokedex',
    images: [
      {src: pokedex, alt: 'Pokedex'},
      {src: sici4, alt: 'Sici 4'},
      {src: sici4, alt: 'Sici 4'},
      {src: sici4, alt: 'Sici 4'}
    ],
    video: siciPlay,
    alt: 'Project 3'
  }
]);

const hoveredImage = ref<string | null>(null);


</script>

<template>
  <div class="h-[600px] w-full shadow">
    <swiper

        :navigation="true"
        :modules="modules"
    >
      <swiper-slide v-for="(proyectImage, index) in proyectImages" :key="index">
        <div class="w-full h-full flex bg-[#303131]">
          <div class="w-[40%] m-auto relative">
            <img v-if="hoveredImage" :src="hoveredImage" alt="images"
                 class="main-media top-1/2 -translate-y-1/2 rounded-3xl absolute left-1/2 -translate-x-1/2 border-[10px] h-[580px] border-black object-cover w-[300px]"/>
            <video
                v-else
                class="mx-auto main-media  rounded-3xl border-[10px] h-[580px] border-black object-cover w-[300px]"
                controls autoplay>
              <source :src="proyectImage.video" type="video/mp4">
            </video>
          </div>
          <div class="w-[60%] flex shadow-2xl p-2">
            <div class="grid relative self-center  justify-items-center w-[35%] gap-y-7 grid-cols-2">
              <h1 class="text-start text.[#cccccc] absolute left-0 -top-16 text-4xl">{{ proyectImage.name }}</h1>

              <div
                  v-for="(image, imgIndex) in proyectImage.images" :key="imgIndex"
                  class="w-[100px] cursor-pointer border-4 border-black rounded-xl drop-shadow-2xl"
                  @mouseover="hoveredImage = image.src"
                  @mouseleave="hoveredImage = null"
              >
                <img class="w-full rounded-lg h-full object-cover"
                     :src="image.src" alt="picture">
              </div>
            </div>

            <div class="w-[65%] h-full">
              <p class="pr-10 pl-2 text-start text-[#999999]">{{ proyectImage.description }}</p>
            </div>

          </div>
        </div>
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
  align-items: center;
}

.main-media {
  transition: opacity 5s ease-in-out;
}


.hola {
  background: #19324b;
}


</style>