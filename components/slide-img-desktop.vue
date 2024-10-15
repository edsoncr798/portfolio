<script setup lang="ts">

import {Navigation, Pagination} from "swiper/modules";
import {mediaData} from "~/data/mediaData";


const modules = [Pagination, Navigation]
const hoveredImage = ref<string | null>(null);

const proyectImages = mediaData;

</script>

<template>
  <div class="h-[600px] w-full">
    <swiper
        :navigation="true"
        :modules="modules"
    >
      <swiper-slide v-for="(proyectImage, index) in proyectImages" :key="index">
        <div class="w-full h-full flex bg-[#303131]">
          <div class="w-[40%] m-auto relative">
            <img v-if="hoveredImage" :src="hoveredImage" alt="images"
                 class="transition duration-500 ease-in-out top-1/2 -translate-y-1/2 rounded-3xl absolute left-1/2 -translate-x-1/2 border-[10px] h-[580px] border-black object-cover w-[300px]"/>
            <video
                v-else
                class="mx-auto transition duration-500 ease-in-out  rounded-3xl border-[10px] h-[580px] border-black object-cover w-[300px]"
                controls autoplay>
              <source :src="proyectImage.video" type="video/mp4">
            </video>
          </div>
          <div class="w-[60%] min-w-[700px] flex shadow-2xl p-2">
            <div class="grid relative self-center  justify-items-center w-[35%] gap-y-7 grid-cols-2">
              <h1 class="text-start text.[#cccccc] absolute left-0 -top-16 text-4xl">{{ proyectImage.name }}</h1>

              <div
                  v-for="(image, imgIndex) in proyectImage.images" :key="imgIndex"
                  class="w-[100px] cursor-pointer border-4 border-black rounded-xl drop-shadow-2xl"
                  @mouseover="hoveredImage = image.src"
                  @mouseleave="hoveredImage = null"
              >
                <img class="w-full rounded-lg h-full object-cover"
                     :src="image.src" :alt="image.alt">
              </div>
            </div>

            <div class="w-[65%] min-w-[470px] h-full flex gap-y-4 flex-col justify-center ">
              <p class="pr-10 pl-2 text-start text-[#999999]">{{ proyectImage.description }}</p>

              <strong class="text-start">Tecnologías:</strong>
              <div class="flex gap-4">
                <img
                    v-for="(icon, index) in proyectImage.icon " :key="index"
                    class="w-[30px] hover:scale-150 transition duration-500 ease-in-out"
                    :src="icon.src" :alt="icon.alt"
                >
              </div>
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
  background: #19324b;
}


</style>