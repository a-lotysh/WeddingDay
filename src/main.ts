import './assets/main.css'
import '@nanoandrew4/vue3-carousel-3d/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Carousel3dPlugin } from '@nanoandrew4/vue3-carousel-3d';

const app = createApp(App);
app.use(Carousel3dPlugin)

app.mount('#app');

