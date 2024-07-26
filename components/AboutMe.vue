<script setup lang="ts">

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
  <section class="w-full flex bg-[#303131] px-5 py-20 justify-center items-center">
    <article class="w-full m-auto lg:w-[90%] lg:flex lg:flex-1">

      <div class="w-full flex justify-center mb-20">
        <div
            class="relative w-[140px] h-[140px] lg:w-[240px] lg:h-[240px] rounded-full bg-[#4e3a23] flex justify-center items-center">
          <div
              class="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-[#303131] flex justify-center items-center">
            <h1 class="absolute text-3xl lg:text-5xl text-[#cccccc] font-black border-b-4 border-[#f9a826]">Sobre
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
  </section>
</template>

<style>

button:hover {
  color: #f9a826;
  border: 2px solid #f9a826;
  background: #303131;
}

</style>