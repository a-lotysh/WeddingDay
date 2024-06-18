<script setup lang="ts">
import Carousel from './CarouselSection.vue';
</script>

<template>
  <div class="branch">
    <div><hr></div>
    <img class="photo" src="../assets/branch.png">
    <div><hr></div>
  </div>
  <div class="photo-release-section">
    <Carousel />
    <div class="text-intro">Ваші фото вже
      <a class="text-intro-link" href="https://drive.google.com/drive/folders/1uVJkmbmzo-ncD4H0VUKfhRW20oV_2Dtc?usp=sharing" target="_blank">туууут!</a>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.photo-release-section {
  height: 345px;

  text-align: center;
  align-content: center;
}

.branch {
  text-align: center;
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr min-content 1fr;

  & > div {
    align-self: center;

    & > hr {
      border: none;
      border-top: 3px double;
    }
  }

  & img {
    height: 90px;
    margin: 0 10px;
    transform: rotate(180deg);
  }
}

.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}

.text-intro {
  font-size: 2em;
}

.introduce-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  text-align: center;
  align-items: center;
  font-size: 15px;

  &.title {
    justify-content: center;
    font-size: 3em;
  }

  & .photo-section {
    width: 50%;
    padding: 0 50px 50px 50px;

    & .photo {
      width: 100%;
    }
  }

  .place {
    width: 50%;

    & .ceremony {
      font-size: 4em;
      margin-bottom: 30px;
    }

    & .time {
      font-size: 3em;
      margin-bottom: 30px;
    }

    & .hotel {
      font-size: 2em;
    }

    & .point {
      font-size: 2em;
      margin-bottom: 20px;
    }

    & .map-link {
      font-size: 2em;
      color: var(--color-text);
      text-decoration: underline;
    }

    & .map-link:hover {
      background: none;
      color: var(--color-text);
    }
  }
}

@media (max-width: 768px) {
  .introduce-section {
    flex-direction: column;
    font-size: 10px;

    & .photo-section {
      padding: 0;
      width: 60%;
      min-width: 310px;
    }

    & .place {
      width: 80% !important;

      & .ceremony,
      & .time {
        margin-bottom: 20px !important;
      }

      & .point {
        margin-bottom: 10px !important;
      }
    }
  }
}

.text-intro-link {
  color: var(--vt-c-text-light-1);
  text-decoration: underline;
}
.text-intro-link:hover {
  cursor: pointer;
  background-color: transparent;
  color: var(--vt-c-text-light-2);
}
</style>
