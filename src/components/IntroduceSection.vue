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
      <img class="photo" src="../assets/we_are.JPG">
    </div>
    <!--    <div class="place">-->
    <!--        <h2 class="ceremony">Весільна церемонія проходила</h2>-->
    <!--        <h3 class="time">О 15:00</h3>-->
    <!--        <a class="hotel map-link" target="_blank" href="https://maps.app.goo.gl/ib7t4RfgJVGCRfo79">Парк-готель Швейцарія</a>-->
    <!--        <h4 class="point">с. Обарів, Рівненська обл.</h4>-->
    <!--        <h2 class="ceremony">Дякуємо, що були з нами!</h2>-->
    <!--    </div>-->
    <div class="verse">
      <h1 style="font-size: 2.5em; margin-bottom: 50px">
        Любов довготерпить, любов милосердствує,
        не заздрить, любов не величається,
        не надимається, не поводиться
        нечемно, не шукає тільки свого,
        не рветься до гніву, не думає лихого,
        не радіє з неправди, але тішиться правдою,
        усе зносить, вірить у все,
        сподівається всього, усе терпить!
      </h1>
      <h1 style="font-size: 2em; font-weight: bold">Перше послання до Коринтян 13:4-7</h1>
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

  .place, .verse {
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

    & .place, & .verse {
      width: 80% !important;

      & .ceremony,
      & .time {
        margin-bottom: 20px !important;
      }

      & .point {
        margin-bottom: 10px !important;
      }
    }

    .verse h1 {
      margin-top: 20px;
      margin-bottom: 20px !important;
    }
  }
}
</style>
