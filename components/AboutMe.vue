<script setup lang="ts">

import css from '~/static/images/png/css.png'
import html from '~/static/images/png/html.png'
import js from '~/static/images/png/js.png'
import react from '~/static/images/png/reactjs.png'
import vue from '~/static/images/vue.webp'
import ionic from '~/static/images/icon-ionic.svg'


const isCOpyLink = ref(false)
const seeCv = () => {
  window.open('https://drive.google.com/file/d/1bPZ8PKNWPkQ4Nd6NhBO0SEmfottmXvtO/view?usp=sharing', '_blank')
}

const copyLink = () => {
  const link = 'https://drive.google.com/file/d/1bPZ8PKNWPkQ4Nd6NhBO0SEmfottmXvtO/view?usp=sharing'
  navigator.clipboard.writeText(link)
  isCOpyLink.value = true
  setTimeout(() => {
    isCOpyLink.value = false
  }, 3000)
}

</script>

<template>
  <section class="section_container bg-[#303131]">
    <article class="section_content lg:flex">

      <div class="w-full flex justify-center mb-14">
        <div
            class="relative w-[140px] h-[140px] lg:w-[240px] lg:h-[240px] rounded-full bg-[#4e3a23] flex justify-center items-center">
          <div
              class="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-[#303131] flex justify-center items-center">
            <h1 class="absolute section_title border-b-4 border-[#f9a826]">Sobre
              mi</h1>
          </div>
        </div>
      </div>

      <div class="lg:pl-10 lg:pr-28">
        <p class="text-[#999999]">
          ¡Hola! Soy Edson, un apasionado desarrollador frontend con experiencia en diversas tecnologías como HTML,
          CSS, JavaScript, TypeScript y frameworks como React.js y Vue.js. He trabajado en varios proyectos destacados
          donde he utilizado Vue.js junto con librerías como Element Plus para crear interfaces web robustas y altamente
          funcionales. <br> <br> Me encanta trabajar en el diseño y desarrollo de aplicaciones web modernas que sean
          tanto
          visualmente atractivas como intuitivas para los usuarios. Actualmente, estoy enfocado en expandir mis
          habilidades con Vue.js y explorando nuevas técnicas para mejorar la experiencia del usuario en aplicaciones
          web.
        </p>
        <br>
        <p class="hidden lg:block text-white p-1">Link de CV:</p>
        <div class="flex lg:gap-4 text-white">
          <button @click="seeCv"
                  target="_blank"
                  class=" lg:hidden text-lg w-[150px] text-white rounded bg-[#f9a826] p-2 text-center">Ver CV
          </button>
          <label class="hover: hidden lg:block border-[#f9a826] border-2 bg-gray-600 rounded-2xl cursor-text p-2">https://bit.ly/4fhGQAz</label>
          <button @click="copyLink" class="hidden lg:block text-xl  w-[150px] rounded bg-[#f9a826]">
            {{ isCOpyLink ? 'Copiado!!' : 'Copiar' }}
          </button>
        </div>
      </div>
    </article>

    <article class="section_content pt-28 text-center relative">
      <span class="section_title">Habilidades</span>

      <div class="flex text-white flex-wrap justify-between gap-x-10 gap-y-16 mt-14 pb-24">

        <div class="skill_card">
          <img class="block m-auto h-[200px]" :src="html" alt="logo html">
          <div class="skill_level"></div>
          <h2 class="text-3xl font-light mt-7 mx-auto mb-5">HTML</h2>
          <p class="text-[#999999]">
            lore ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nisl in arcu.
          </p>
        </div>

        <div class="skill_card">
          <img class="block m-auto h-[200px]" :src="css" alt="logo css">
          <div class="skill_level"></div>
          <h2 class="text-3xl font-light mt-7 mx-auto mb-5">CSS</h2>
          <p class="text-[#999999]">
            lore ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nisl in arcu.
          </p>
        </div>


        <div class="skill_card">

          <img class="block m-auto h-[200px]" :src="js" alt="logo js">
          <div class="skill_level"></div>
          <h2 class="text-3xl font-light mt-7 mx-auto mb-5">JS</h2>
          <p class="text-[#999999]">
            lore ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nisl in arcu.
          </p>
        </div>


        <div class="skill_card">

          <img class="block m-auto h-[200px]" :src="react" alt="logo react">
          <div class="skill_level"></div>
          <h2 class="text-3xl font-light mt-7 mx-auto mb-5">REACT</h2>
          <p class="text-[#999999]">
            lore ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nisl in arcu.
          </p>
        </div>


        <div class="skill_card">

          <img class="block m-auto h-[200px]" :src="vue" alt="logo vue">
          <div class="skill_level"></div>
          <h2 class="text-3xl font-light mt-7 mx-auto mb-5">VUE</h2>
          <p class="text-[#999999]">
            lore ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nisl in arcu.
          </p>
        </div>


        <div class="skill_card">

          <img class="block m-auto h-[200px]" :src="ionic" alt="logo ionic">
          <div class="skill_level"></div>
          <h2 class="text-3xl font-light mt-7 mx-auto mb-5">IONIC</h2>
          <p class="text-[#999999]">
            lore ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nisl in arcu.
          </p>
        </div>

      </div>

    </article>

  </section>
</template>

<style>

button:hover {
  color: #f9a826;
  border: 2px solid #f9a826;
  background: #303131;
}

.skill_card{
  width: 300px;
  position: relative;
}

.skill_level{
    position: absolute;
    top: 18%;
    right: 0;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    border-radius: 50%;
    border: 10px solid black;
}

.skill_card:nth-child(1) .skill_level{
    background: #ff4f4f28;
    border-color: #ff4f4f;
    color: #ff4f4f;
}

.skill_card:nth-child(2) .skill_level {
    background: #4fa0ff28;
    border-color: #4fa0ff;
    color: #4fa0ff;
}

.skill_card:nth-child(3) .skill_level {
    background: #ffed4f28;
    border-color: #ffed4f;
    color: #ffed4f;
}

.skill_card:nth-child(4) .skill_level {
    background: #4fdfff28;
    border-color: #4fdfff;
    color: #4fdfff;
}

.skill_card:nth-child(5) .skill_level {
    background: #49d19128;
    border-color: #49d191;
    color: #49d191;
}

.skill_card:nth-child(6) .skill_level {
    background: #498afe28;
    border-color: #498afe;
    color: #498afe;
}

.skill_card:nth-child(7) .skill_level {
    background: #49d19128;
    border-color: #11814c;
    color: #0c7144;
}

</style>