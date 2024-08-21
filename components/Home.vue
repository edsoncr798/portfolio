<script setup lang="ts">
import mePhoto from '~/assets/images/me.png'


</script>

<template>
  <section class="flex not-show px-5 w-full min-h-screen bg-[#2b2c2c] border-b lg:border-none ">

    <article class="grid grid-cols-1 md:grid-cols-2 bg-[#2b2c2c] text-white w-full md:w-[80%] m-auto ">

      <div class="flex flex-col gap-8 text-center">
        <div class="animate-text text-start">
          <h1 class="text-5xl hidden lg:flex">Hola</h1>
          <span class="text-[45px] font-bold typed-name color_text">Soy Edson</span>
          <div class="h-[30px]"></div>
          <p class="text-2xl">Desarrollador <span class="typed-career">Front End web <br> & mobil</span></p>
          <span class="text-2xl  typed-career2 color_text">Vue JS</span>
        </div>
        <button class="text-xl p-4 w-[230px] rounded bg-[#f9a826]">Contratame</button>
      </div>

      <div class="w-full pt-[60px] md:pt-0 flex justify-center lg:justify-end">
        <div class="relative object-contain rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#4e3a23] flex justify-center">
          <img :src="mePhoto"
               class="w-[70%] rounded-b-[100px] bottom-0  absolute object-contain lg:rounded-b-[150px]"
               alt="img-me">
        </div>
      </div>

    </article>
  </section>
</template>

<style scoped>
.color_text {
  background-color: rgb(249, 168, 38);
  background-image: linear-gradient(45deg, rgb(249, 168, 38), #ecc78e);
  background-size: 100%;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

</style>