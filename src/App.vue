<template>
  <div v-co2-subscript id="app" class="reveal">
    <div class="slides">
      <CardOne />
      <CardTwo />
      <CardThree />
      <!-- <CardFour /> -->
      <!-- <CardFive /> -->
      <!-- <CardSix /> -->
      <!-- <CardSeven /> -->
      <!-- <CardThirteen /> -->
      <!-- <CardFive /> -->
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
// import CardFour from "@/components/cards/CardFour.vue";
// import CardFive from "@/components/cards/CardFive.vue";
// import CardSix from "@/components/cards/CardSix.vue";
// import CardSeven from "@/components/cards/CardSeven.vue";
// import CardThirteen from "@/components/cards/CardThirteen.vue";

export default {
  name: "App",
  components: {
    CardOne,
    CardTwo,
    CardThree,
    // CardFour,
    // CardFive,
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
    });
    Reveal.addEventListener("ready", this.adjustFontSize);
  },
  beforeUnmount() {
        Reveal.removeEventListener("ready", this.adjustFontSize);
  },
  methods: {
        adjustFontSize() {
          const labels_max = [0,0]
          const labels = [];
            for (let card_id = 1; card_id <= 2; card_id++) { 
              let titleValue = {
                  container: "card" + card_id + "-label0" ,
                  text : "card" + card_id + "-text0",
                  size : 287
                }
              labels.push(titleValue);
              let titleBackValue = {
                container: "card" + card_id + "-back-label0" ,
                text : "card" + card_id + "-back-text0",
                size : 200
              }
              labels.push(titleBackValue);
              for (let label_id = 1; label_id < labels_max[card_id-1]; label_id++) {
                let labelValues = {
                  container: "card" + card_id + "-label" + label_id ,
                  text : "card" + card_id + "-text" + label_id ,
                  size : 96
                };
                labels.push(labelValues);
              }
            }
          console.log(labels)

          // setTimeout (function(){
          this.$nextTick(() => {
            labels.forEach(function (label) {
            const div = document.getElementById(label.container);
            const string = document.getElementById(label.text);
            console.log("ma div",div)
            console.log("ma string ",string)
            // const divWidth = window.getComputedStyle(div).getPropertyValue('width');
            // const divHeight = window.getComputedStyle(div).getPropertyValue('height');
            const divWidth = div.offsetWidth;
            const divHeight = div.offsetHeight;
            let fontSize = label.size; // starting font size
            string.style.fontSize = fontSize + "pt";
            console.log("starting font size", label.size)
            while (
                // window.getComputedStyle(string).getPropertyValue('width') > divWidth ||
                // window.getComputedStyle(string).getPropertyValue('height') > divHeight
                string.offsetWidth > divWidth ||
                string.offsetHeight > divHeight
            ) {
                if (fontSize === 1) {
                  break;
                }
                console.log("string largeur : "+string.offsetWidth+" hauteur : "+string.offsetHeight)
                fontSize--;
                string.style.fontSize = fontSize + "pt";
            }
            console.log("final font size", string.style.fontSize)
            });
          });
          // },2000);
        },
    },
};
</script>

<style>
:root {
  --r-main-font: Arial, sans-serif;
  --r-heading-font: var(--r-main-font);
  --r-heading-color: white;
  --r-heading3-color: black;
  --r-heading4-color: black;
  --r-heading1-size: 287pt;
  --r-heading2-size: 96pt;
  --r-heading3-size: 86pt;
  --r-heading4-size: 80pt;
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
    justify-content: center;
}

.vertical-left {
    justify-content: left;
}

.vertical-text {
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
}

.title {
    position: absolute;
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
