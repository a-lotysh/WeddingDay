<script setup lang="ts">

</script>

<template>
  <div class="branch">
    <div><hr></div>
    <img class="photo" src="../assets/branch.png">
    <div><hr></div>
  </div>
  <div class="introduce-section">
    <div class="photo-section">
      <img class="photo" src="../assets/we_are.jpg">
    </div>
    <div class="place">
        <h2 class="ceremony">Ceremony</h2>
        <h3 class="time">3:00 PM</h3>
        <h4 class="hotel">Парк-готель Швейцарія</h4>
        <h4 class="point">Обарів, Рівненська обл.</h4>

        <a class="map-link" target="_blank" href="https://maps.app.goo.gl/ib7t4RfgJVGCRfo79">Map</a>
    </div>
  </div>
</template>

<style scoped lang="postcss">
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
  }
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
      margin-bottom: 50px;
    }

    & .time {
      font-size: 3em;
      margin-bottom: 50px;
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
</style>
