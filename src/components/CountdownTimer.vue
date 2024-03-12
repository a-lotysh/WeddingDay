<script setup lang="ts">
import {reactive, ref} from 'vue';
import {useInterval} from "@vueuse/core";
import gsap from 'gsap'


const countDownDate = ref(new Date('2024-05-19T13:00:00.013Z').getTime());

const tweenedDays = reactive({
  number: 0
})

const tweenedHours = reactive({
  number: 0
})

const tweenedMinutes = reactive({
  number: 0
})

const tweenedSeconds = reactive({
  number: 0
})


useInterval(1000, {
  immediate: true,
  callback: () => {
    const now = new Date().getTime();

    const distance = countDownDate.value - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    gsap.to(tweenedDays, { duration: 1, number: Number(days) || 0 })
    gsap.to(tweenedHours, { duration: 1, number: Number(hours) || 0 })
    gsap.to(tweenedMinutes, { duration: 1, number: Number(minutes) || 0 })
    gsap.to(tweenedSeconds, { easy: 'circ.inOut',  duration: 1, number: Number(seconds) || 0 })
  },
});
</script>

<template>
  <div class="countdown-container">
    <div class="days-container">
      <div class="days">{{ tweenedDays.number.toFixed(0) }}</div>
      <div class="days-label">days</div>
    </div>

    <div class="hours-container">
      <div class="hours">{{ tweenedHours.number.toFixed(0) }}</div>
      <div class="hours-label">hours</div>
    </div>

    <div class="minutes-container">
      <div class="minutes">{{ tweenedMinutes.number.toFixed(0) }}</div>
      <div class="minutes-label">minutes</div>
    </div>

    <div class="seconds-container">
      <div class="seconds">{{ tweenedSeconds.number.toFixed(0) }}</div>
      <div class="seconds-label">seconds</div>
    </div>
  </div>

</template>

<style scoped>
.countdown-container {
  display: flex;
  width: 100%;
  max-width: 60%;
  justify-content: space-between;

  margin: auto;
}

.days-container,
.hours-container,
.minutes-container,
.seconds-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.1);
  width: 120px;
  height: 120px;
  border-radius: 100px;
}

.days,
.hours,
.minutes,
.seconds {
  font-size: 2.5em;
  margin: 10px 0;
}


.days-label,
.hours-label,
.minutes-label,
.seconds-label {
  text-transform: uppercase;
  margin-bottom: 5px;
}

@media (max-width: 800px) {
  .countdown-container {
    max-width: 90%;
  }

  .days-container,
  .hours-container,
  .minutes-container,
  .seconds-container {
    font-size: 0.8em;
    width: 70px;
    height: 70px;
  }

  .days,
  .hours,
  .minutes,
  .seconds {
    margin: 0;
  }
}
</style>
