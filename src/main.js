import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { defineCustomElement } from 'vue'
import CurrentTime from './components/WebComponent.ce.vue';

const CurrentTimeElement = defineCustomElement(CurrentTime);

customElements.define('vue-web-component', CurrentTimeElement);

createApp(App).mount('#app')
