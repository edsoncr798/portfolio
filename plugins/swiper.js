
import { Swiper, SwiperSlide  } from 'swiper/vue'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Swiper', Swiper);
  nuxtApp.vueApp.component('SwiperSlide', SwiperSlide);
});


