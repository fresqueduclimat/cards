<template>
  <div v-co2-subscript id="app" class="reveal">
    <div class="slides">
      <CardThirteen />
      <!-- <CardOne /> -->
      <!-- <CardTwo /> -->
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/simple.css";

// import CardOne from "@/components/cards/CardOne.vue";
// import CardTwo from "@/components/cards/CardTwo.vue";
import CardThirteen from "@/components/cards/CardThirteen.vue";

export default {
  name: "App",
  components: {
    // CardOne,
    // CardTwo,
    CardThirteen,
  },
  mounted() {
    Reveal.initialize({
      controls: false,
      progress: false,
      disableLayout: true,
      transition: "none",
      transitionSpeed: "fast",
      backgroundTransition: "none",
      margin: 0,
    });
  },
};
</script>

<style>
:root {
  --r-main-font: Arial, sans-serif;
  --r-heading-font: var(--r-main-font);
  --r-heading-color: white;
  --r-heading1-size: 287pt;
  --r-heading4-size: 96pt;
  --r-block-margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

.slides>section {
  width: 100%;
  height: 100%;
}

.container {
  align-items: center;
}

.graph-container {
  --offset: 23.7%;

  position: relative;
  width: 85vw;
  transform: translateY(calc(-1 * var(--offset)));

  background-image: linear-gradient(#ffffff00, #ffffff00), linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7));
  background-size: 100% calc(100% - var(--offset));
  background-position: top left, bottom left;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: 10% 80% 10%;

}
</style>
