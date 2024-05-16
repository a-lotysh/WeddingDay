import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import VueCarousel from '@chenfengyuan/vue-carousel';

const app = createApp(App);

app.mount('#app');
app.component(VueCarousel.name, VueCarousel);

