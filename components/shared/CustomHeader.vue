<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const links = ref();
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  links.value = document.querySelectorAll(".link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.value.forEach((link: Element) => {
          if (link) {
            const href = (link as HTMLAnchorElement).getAttribute('href')?.split('/')[1];
            const id = entry.target.id;
            if (href === id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          }
        });
      }
    });
  },
  {
    threshold: 0.5,
  });
});

</script>

<template>
  <header class="w-full h-[91px]">
    <nav class="fixed shadow z-50 w-full bg-[#2c2c2c] px-4">
      <div class="flex justify-between items-center h-[92px] cursor-pointer">
        <a href="/home" class="font-black text-2xl">Edson</a>
        <button
            class="flex p-[5.7px] flex-col items-center justify-center w-[3rem] h-[3rem] border-0 bg-transparent gap-[.65rem] cursor-pointer"
            @click="toggleMenu"
            :class="{'button-active': isMenuOpen}"
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>

      <transition name="slide">
        <ul class="menu-list" v-if="isMenuOpen">
          <li><a href="/homes" class="active">Inicio</a></li>
          <li><a href="/about">Acerca de mi</a></li>
          <li><a href="/experience">Experiencia</a></li>
          <li><a href="/portfolio">Portafolio</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>

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

.menu-list .active{
  color: #feb633;
}

.menu-list a:hover{
  color: #feb633;
}


.slide-enter-active,
.slide-leave-active{
  transition: max-height 1s ease;
}

.slide-enter-from,
.slide-leave-to{
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from{
  max-height: 350px;
}

</style>
