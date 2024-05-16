<script setup lang="ts">
// import CountdownTimer from './CountdownTimer.vue';
</script>

<template>
  <div class="main-section">
    <header class="header">
      <div class="logo">
        <img alt="Vue logo" src="../assets/logo.svg" />
      </div>

      <div class="welcome-text">
        <h2>Sonia & Andrii wedding</h2>
      </div>
    </header>
    <div class="preview-text">
      <div class="title">
        <h1>We’re Getting Married!</h1>
      </div>
      <div class="names">
        <h2>Sonia & Andrii wedding</h2>
      </div>
      <div class="event">
        <h3>19 . 05 . 24</h3>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Meddon&display=swap');

.main-section {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 180px 1fr 180px;

  background: url("../assets/bg.png") no-repeat fixed center;
  background-size: cover;

  font-family: 'Ceremonius', serif;

  align-items: center;
  text-align: center;
  color: var(--color-text);
  font-size: 15px;

  & .header {
    & .logo {
      position: fixed;
      display: block;
      margin: 0 auto 2rem;
      width: 115px;
      height: 110px;
      top: 50px;
      left: 100px;
    }
    & .welcome-text {
      font-size: 2.5em;
    }
  }

  & .preview-text {
    & .title {
      font-size: 3em;
    }

    & .names {
      font-size: 4.5em;
    }

    & .event {
      font-size: 5em;
    }
  }
}

/*
.timer {
  color: white;
  width: inherit;
}
*/

@media (max-width: 768px) {
  .main-section {
    font-size: 10px;

    & .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      & .logo {
        position: inherit;
        margin: 0 auto 2em;
        width: 80px;
        height: 75px;
      }
      & .welcome-text {
        font-size: 2.5em;
      }
    }

    & .preview-text {
      & .title {
        font-size: 2em;
      }

      & .names {
        font-size: 3.5em;
      }

      & .event {
        font-size: 3em;
      }
    }
  }
}
</style>
