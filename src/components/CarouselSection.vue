<script setup lang="ts">
import { Carousel3d, Slide } from '@nanoandrew4/vue3-carousel-3d';
import { reactive } from 'vue';

const slides = reactive([
  {
    id: 0,
    imageUrl: 'src/assets/carousel/01.jpg',
  },
  {
    id: 1,
    imageUrl: 'src/assets/carousel/02.jpg',
  },
  {
    id: 2,
    imageUrl: 'src/assets/carousel/03.jpg',
  },
  {
    id: 3,
    imageUrl: 'src/assets/carousel/04.jpg',
  },
  {
    id: 4,
    imageUrl: 'src/assets/carousel/05.jpg',
  },
  {
    id: 5,
    imageUrl: 'src/assets/carousel/06.jpg',
  },
  {
    id: 6,
    imageUrl: 'src/assets/carousel/07.jpg',
  },
  {
    id: 7,
    imageUrl: 'src/assets/carousel/08.jpg',
  },
  {
    id: 8,
    imageUrl: 'src/assets/carousel/09.jpg',
  },
  {
    id: 9,
    imageUrl: 'src/assets/carousel/10.jpg',
  },
]);
</script>

<template>
  <div id="carousel">
    <Carousel3d :autoplay="true" :autoplay-timeout="2000">
      <Slide
          class="carousel-slide"
          v-for="slide in slides"
          :index="slide.id"
          :key="slide.id"
          style="border-width: 0; width: 200px"
      >
        <img class="slide-image" :src="slide.imageUrl" alt="Image">
      </Slide>
    </Carousel3d>
  </div>
</template>

<style>
/* Add any necessary styles here */

.carousel-slide {
  max-width: 400px;
  width: min-content;
  border: 0px;

}
.carousel-3d-slider {
  width: 200px !important;
}

.slide-image {
  width: 200px;
}
</style>
