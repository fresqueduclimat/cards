<template>
  <div v-co2-subscript id="app" class="reveal">
    <div class="slides">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <!-- <CardSix /> -->
      <!-- <CardSeven /> -->
      <!-- <CardThirteen /> -->
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/simple.css";

import CardOne from "@/components/cards/CardOne.vue";
import CardTwo from "@/components/cards/CardTwo.vue";
import CardThree from "@/components/cards/CardThree.vue";
import CardFour from "@/components/cards/CardFour.vue";
import CardFive from "@/components/cards/CardFive.vue";
// import CardSix from "@/components/cards/CardSix.vue";
// import CardSeven from "@/components/cards/CardSeven.vue";
// import CardThirteen from "@/components/cards/CardThirteen.vue";

export default {
  name: "App",
  components: {
    CardOne,
    CardTwo,
    CardThree,
    CardFour,
    CardFive,
    // CardSix,
    // CardSeven,
    // CardThirteen,
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
      history: true,
    });
    Reveal.addEventListener("ready", this.adjustFontSize);
    Reveal.addEventListener('slidechanged', this.adjustFontSize);
  },
  beforeUnmount() {
    Reveal.removeEventListener("ready", this.adjustFontSize);
  },
  methods: {
    adjustFontSize() {
      const labels_max = [0, 0, 0, 0, 5]
      const labels = [];
      for (let card_id = 1; card_id <= labels_max.length; card_id++) {
        let titleValue = {
          container: "card" + card_id + "-label0",
          text: "card" + card_id + "-text0",
        }
        labels.push(titleValue);
        let titleBackValue = {
          container: "card" + card_id + "-back-label0",
          text: "card" + card_id + "-back-text0",
        }
        labels.push(titleBackValue);
        for (let label_id = 1; label_id < labels_max[card_id - 1]; label_id++) {
          let labelValues = {
            container: "card" + card_id + "-label" + label_id,
            text: "card" + card_id + "-text" + label_id,
          };
          labels.push(labelValues);
        }
      }

      labels.forEach(function (label) {
        const div = document.getElementById(label.container);
        const string = document.getElementById(label.text);
        const divWidth = div.offsetWidth;
        const divHeight = div.offsetHeight;
        let style = window.getComputedStyle(string);
        let fontSizeWithPx = style.getPropertyValue('font-size');
        let fontSize = parseFloat(fontSizeWithPx);
        while (
          string.offsetWidth > divWidth ||
          string.offsetHeight > divHeight
        ) {
          if (fontSize === 1) {
            break;
          }
          fontSize--;
          string.style.fontSize = fontSize + "px";
        }
      });
    },
  },
};
</script>

<style>
:root {
  --r-main-font: Arial, sans-serif;
  --r-heading-font: var(--r-main-font);
  --r-heading-color: white;
  --r-heading-margin: 0 0 0 0;
  --r-heading3-color: black;
  --r-heading4-color: black;
  --r-heading1-size: 400px;
  --r-heading2-size: 300px;
  --r-heading3-size: 250px;
  --r-heading4-size: 240px;
  --r-main-font-size: 120px;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.horizontal-center {
  display: flex;
  align-items: center;
}

.vertical-center {
  display: flex;
  justify-content: center;
}

.vertical-left {
  display: flex;
  justify-content: left;
}

.vertical-text {
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
}

.label {
  position: absolute;
}

.label h2 {
  font-weight: 700;
}

.label h4 h3 {
  font-weight: 700;
}

.orange h3 {
  color: #FF6600;
}

.red h3 {
  color: #FD5050;
}

.black h2 {
  color: black;
}

.black h3 {
  color: black;
}

.black h4 {
  color: black;
}
</style>
