<script setup lang="ts">
import { Carousel3d, Slide } from '@nanoandrew4/vue3-carousel-3d';
</script>

<template>
  <div id="carousel">
    <Carousel3d :autoplay="true" :autoplay-timeout="2000">
      <Slide class="carousel-slide" :index="0" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/01.jpg" alt="Image">
      </Slide>
      <Slide class="carousel-slide" :index="1" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/02.jpg" alt="Image">
      </Slide>
      <Slide class="carousel-slide" :index="2" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/03.jpg" alt="Image">
      </Slide>
      <Slide class="carousel-slide" :index="3" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/04.jpg" alt="Image">
      </Slide>
      <Slide class="carousel-slide" :index="4" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/05.jpg" alt="Image">
      </Slide>
      <Slide class="carousel-slide" :index="5" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/06.jpg" alt="Image">
      </Slide>
      <Slide class="carousel-slide" :index="6" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/07.jpg" alt="Image">
      </Slide>
      <Slide class="carousel-slide" :index="7" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/08.jpg" alt="Image">
      </Slide>
      <Slide class="carousel-slide" :index="8" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/09.jpg" alt="Image">
      </Slide>
      <Slide class="carousel-slide" :index="9" style="border-width: 0; width: 200px">
        <img class="slide-image" src="../assets/carousel/10.jpg" alt="Image">
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
