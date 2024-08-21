<script setup lang="ts">
import {ref} from 'vue';
import activeSectionStore from "~/store/activeSection.store";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const activeSection = computed(() => activeSectionStore.get_active_section())

</script>

<template>
  <header class="w-full h-[91px]">
    <nav class="fixed shadow z-50 w-full  bg-[#2c2c2c] px-4">

      <div class="flex justify-between items-center md:mx-auto md:w-[85%] h-[92px]">
        <a href="/" class="font-black text-2xl">Edson</a>

        <ul class="hidden md:flex text-white gap-4">
          <li :class="{ active: activeSection === 'home'}">
            <a class="animation-hover active  relative">Inicio</a>
          </li>
          <li :class="{ active: activeSection === 'about-me'}"><a class="animation-hover relative">Acerca de mi</a></li>
          <li :class="{ active: activeSection === 'experience'}"><a class="animation-hover relative">Experiencia</a></li>
          <li :class="{ active: activeSection === 'portfolio'}"><a class="animation-hover relative">Portafolio</a></li>
          <li :class="{ active: activeSection === 'contact'}"><a class="animation-hover relative" href="/contact">Contacto</a></li>
        </ul>

        <button
            class="flex md:hidden p-[5.7px] flex-col items-center justify-center w-[3rem] h-[3rem] border-0 bg-transparent gap-[.65rem] cursor-pointer"
            @click="toggleMenu"
            :class="{'button-active': isMenuOpen}"
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <transition class="lg:hidden" name="slide">
        <ul class="menu-list" v-if="isMenuOpen">
          <li :class="{ active: activeSection === 'home'}"><a class="animation-hover relative">Inicio</a></li>
          <li :class="{ active: activeSection === 'about-me'}"><a>Acerca de mi</a></li>
          <li :class="{ active: activeSection === 'experience'}"><a>Experiencia</a></li>
          <li :class="{ active: activeSection === 'portfolio'}"><a>Portafolio</a></li>
          <li :class="{ active: activeSection === 'contact'}"><a href="/contact">Contacto</a></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>

.animation-hover::before, .active::before{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60%;
  height: 10%;
  background: #feb633;
  z-index: -1;
  transform: scaleX(0%);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.animation-hover:hover::before, .active::before {
  transform: scaleX(100%);
}

.animation-hover:hover {
  color: #feb633;
  cursor: pointer;
  transition: all 0.5s;
}

.active{
  color: #feb633;
  cursor: pointer;
  transition: all 0.5s;
}


button > div {
  width: 100%;
  height: 2px;
  background-color: #999999;
  border-radius: 5px;
  transition: all 0.5s;
  transform-origin: left;
}

.button-active div:first-child {
  transform: rotate(45deg);
  background: #feb633;
}

.button-active div:nth-child(2) {
  opacity: 0;
}

.button-active div:last-child {
  transform: rotate(-45deg);
  background: #feb633;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #2c2c2c;
  color: white;
  overflow: auto;
}

.menu-list a {
  display: block;
  padding: 20px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.menu-list .active {
  color: #feb633;
}


.slide-enter-active,
.slide-leave-active {
  transition: max-height 1s ease;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 350px;
}

</style>
