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
    description: 'BipBip es una aplicación de transporte diseñada para facilitar ' +
        'la movilidad en la ciudad, donde los usuarios pueden registrarse como pasajeros' +
        'o conductores. Mi responsabilidad principal fue el desarrollo de todo el frontend, colaborando ' +
        'estrechamente con un equipo de desarrolladores para implementar las funcionalidades clave de la aplicación. ' +
        'Durante el proyecto, trabajé en la creación de una interfaz intuitiva y accesible para los usuarios, ' +
        'optimizando la experiencia tanto para conductores como para pasajeros. ' +
        'Este proyecto representa una solución de transporte accesible y eficiente para las personas en mi ciudad, brindando una plataforma que conecta a conductores y pasajeros de manera rápida y segura.',
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





</script>

<template>
  <div class="h-[600px] w-full shadow">
    <swiper
        :pagination="{ type: 'progressbar' }"
        :navigation="true"
        :modules="modules"
    >
      <swiper-slide v-for="(proyectImage, index) in proyectImages" :key="index">
        <div class="w-full h-full flex bg-white">
          <div class="w-[40%] m-auto relative">
            <div
                v-for="(image, imgIndex) in proyectImage.images" :key="imgIndex"
                class="w-[300px] opacity-0 mx-auto absolute left-[50%] z-10 -translate-x-1/2 h-[580px] bg-amber-500  rounded-3xl border-[10px] border-black"
            >
              <img class="rounded-xl w-full h-full object-cover" :src="image.src" :alt="image.alt">
            </div>
            <video
                class="mx-auto  rounded-3xl border-[10px] h-[580px] border-black object-cover w-[300px]"
                controls autoplay>
              <source :src="proyectImage.video" type="video/mp4">
            </video>
          </div>
          <div class="w-[60%] flex shadow-2xl p-2">
            <div class="grid relative self-center  justify-items-center w-[35%] gap-y-7 grid-cols-2">
              <h1 class="text-start text-black absolute left-0 -top-16 text-4xl">{{ proyectImage.name }}</h1>
              <div
                  v-for="(image, imgIndex) in proyectImage.images" :key="imgIndex"
                  class="w-[100px] border-4 border-black rounded-xl drop-shadow-2xl"
              >
                <img class="w-full rounded-lg h-full object-cover"
                     :src="image.src" alt="picture">
              </div>
            </div>

            <div class="text-blue-400 w-[65%] bg-red-50 h-full">
              <p class="pr-5 pl-2 text-start">{{ proyectImage.description }}</p>
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

.hola {
  background: #132333;
}


</style>