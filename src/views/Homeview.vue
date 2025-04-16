<script lang="ts" setup>
import Advantages from '@/components/Advantages.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Aqui você define suas funções!
function onSwiper(swiper: any) {
  console.log('Swiper instance:', swiper)
}

function onSlideChange() {
  console.log('Slide mudou!')
}
</script>

<template>
  <div class="cotainer">
    <swiper
      :modules="[Navigation, Pagination, Autoplay, EffectFade]"
      :slides-per-view="1"
      :space-between="20"
      :centered-slides="true"
      :effect="'fade'"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
    >
      <swiper-slide>
        <img src="../../public/assets/images/Banner1Teste2.jpg" alt="Banner 1" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../public/assets/images/2.jpg" alt="Banner 2" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../public/assets/images/3.jpg" alt="Banner 3" />
      </swiper-slide>
    </swiper>
  </div>
  <Advantages />
</template>

<style scoped>
.container {
  height: 98vh;
}
</style>
