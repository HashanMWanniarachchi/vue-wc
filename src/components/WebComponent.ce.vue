<!-- <script>
import { defineCustomElement } from 'vue'

const MyVueElement = defineCustomElement({
  // normal Vue component options here
  template: `<div class="greetings">
      <h1 class="green">Vue Web component</h1>
      <h3>
        You’ve successfully created a Vue 3 Web component.
      </h3>
    </div>`,

  // defineCustomElement only: CSS to be injected into shadow root
  styles: [`
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }`]
})

// Register the custom element.
// After registration, all `<my-vue-element>` tags
// on the page will be upgraded.
customElements.define('my-vue-element', MyVueElement)

</script> -->
<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

const eventData = ref(null);

const handleCustomEvent = (event) => {
  console.log("hero selected!");
  eventData.value = event.detail;
};

onMounted(() => {
  document.addEventListener('row_select', handleCustomEvent);
});

onBeforeUnmount(() => {
  document.removeEventListener('row_select', handleCustomEvent);
});

</script>

<template>
    <div class="greetings">
      <h1>Vue Hero Detail Webcomponent</h1>
      <div v-if="!eventData"><span  style="font-weight: bold;">Please select a hero to view details!</span><br/></div>
      <div v-if="eventData"><span  style="font-weight: bold;">Hero Name :</span><span> {{ eventData.superhero }}</span><br/></div>
      <div v-if="eventData"><span style="font-weight: bold;">Publisher :</span> <span>{{ eventData.publisher }}</span><br/></div>
      <div v-if="eventData"><span style="font-weight: bold;">Alter Ego :</span> <span>{{ eventData.alter_ego }}</span><br/></div>
      <div v-if="eventData"><span style="font-weight: bold;">First Appeared In :</span> <span> {{ eventData.first_appearance }}</span><br/></div>
      <div v-if="eventData"><span style="font-weight: bold;">Character Name :</span> <span> {{ eventData.characters }}</span><br/></div>
    </div>
  </template>
  
  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
    color: brown;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
  </style>

<!-- <script>
    import { defineCustomElement } from 'vue';

    export default Vue.customElement('vue-web-component', {
    // Your component's definition
    });
</script> -->



