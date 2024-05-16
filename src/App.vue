<script setup lang="ts">
import MainSection from './components/MainSection.vue';
import IntroduceSection from './components/IntroduceSection.vue';
import PhotoReleaseSection from './components/PhotoReleaseSection.vue';
</script>

<template>
  <main>
    <MainSection />
  </main>

  <section class="photo-release-section">
    <photo-release-section />
  </section>

  <section class="introduce-section">
    <introduce-section />
  </section>
</template>

<style scoped>
.photo-release-section {
  max-width: 1280px;
  margin: auto;
  width: 100%;
}

.introduce-section {
  height: 100vh;
  max-width: 1280px;
  margin: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
