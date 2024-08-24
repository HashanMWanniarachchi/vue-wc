import { defineCustomElement } from 'vue'
import CurrentTime from './components/WebComponent.ce.vue';

const CurrentTimeElement = defineCustomElement(CurrentTime);

customElements.define('vue-web-component', CurrentTimeElement);