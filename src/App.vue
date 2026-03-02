<template>
  <div v-logo v-custom-font v-qr-code v-no-break v-print
    v-customtitlediv v-linespacing v-linebreak v-text-direction v-co2-subscript id="app" class="reveal">
    <div class="slides">
      <FrontCard />
      <CardZero />
      <CardSix />
      <CardTwelve />
      <CardFour />
      <CardFourteen />
      <CardFive />
      <CardOne />
      <CardTen />
      <CardThree />
      <CardSixteen />
      <CardSeven />
      <CardTwo />
      <CardHeight />
      <CardEleven />
      <CardNine /> 
      <CardSeventeen />
      <CardNineteen />
      <CardTwentyOne />
      <CardThirteen />
      <CardFifteen />
      <CardTwentySeven />
      <CardTwenty />
      <CardEighteen />
      <CardTwentyTwo />
      <CardTwentySix />
      <CardTwentyFive />
      <CardTwentyThree /> 
      <CardTwentyFour />
      <CardTwentyEight />
      <CardTwentyNine />
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/simple.css";

import CardZero from "@/components/cards/CardZero.vue";
import CardOne from "@/components/cards/CardOne.vue";
import CardTwo from "@/components/cards/CardTwo.vue";
import CardThree from "@/components/cards/CardThree.vue";
import CardFour from "@/components/cards/CardFour.vue";
import CardFive from "@/components/cards/CardFive.vue";
import CardSix from "@/components/cards/CardSix.vue";
import CardSeven from "@/components/cards/CardSeven.vue";
import CardHeight from "@/components/cards/CardHeight.vue";
import CardNine from "@/components/cards/CardNine.vue";
import CardTen from "@/components/cards/CardTen.vue";
import CardEleven from "@/components/cards/CardEleven.vue";
import CardTwelve from "@/components/cards/CardTwelve.vue";
import CardThirteen from "@/components/cards/CardThirteen.vue";
import CardFourteen from "@/components/cards/CardFourteen.vue";
import CardFifteen from "@/components/cards/CardFifteen.vue";
import CardSixteen from "@/components/cards/CardSixteen.vue";
import CardSeventeen from "@/components/cards/CardSeventeen.vue";
import CardEighteen from "@/components/cards/CardEighteen.vue";
import CardNineteen from "@/components/cards/CardNineteen.vue";
import CardTwenty from "@/components/cards/CardTwenty.vue";
import CardTwentyOne from "@/components/cards/CardTwentyOne.vue";
import CardTwentyTwo from "@/components/cards/CardTwentyTwo.vue";
import CardTwentyThree from "@/components/cards/CardTwentyThree.vue";
import CardTwentyFour from "@/components/cards/CardTwentyFour.vue";
import CardTwentyFive from "@/components/cards/CardTwentyFive.vue";
import CardTwentySix from "@/components/cards/CardTwentySix.vue";
import CardTwentySeven from "@/components/cards/CardTwentySeven.vue";
import CardTwentyEight from "@/components/cards/CardTwentyEight.vue";
import CardTwentyNine from "@/components/cards/CardTwentyNine.vue";
import FrontCard from "@/components/cards/FrontCard.vue";

export default {
  name: "App",
  components: {
    FrontCard,
    CardZero,
    CardOne,
    CardTwo,
    CardThree,
    CardFour,
    CardFive,
    CardSix,
    CardSeven,
    CardHeight,
    CardNine,
    CardTen,
    CardEleven,
    CardTwelve,
    CardThirteen,
    CardFourteen,
    CardFifteen,
    CardSixteen,
    CardSeventeen,
    CardEighteen,
    CardNineteen,
    CardTwenty,
    CardTwentyOne,
    CardTwentyTwo,
    CardTwentyThree,
    CardTwentyFour,
    CardTwentyFive,
    CardTwentySix,
    CardTwentySeven,
    CardTwentyEight,
    CardTwentyNine
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
      const labels_max = [2, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1]
      const labels = [];
      for (let card_id = 0; card_id <= labels_max.length - 1; card_id++) {
        let titleValue = {
          container: "card" + card_id + "-label0",
          text: "card" + card_id + "-text0",
        }
        labels.push(titleValue);
        if (card_id != 0 && card_id != 28 && card_id != 29) {
          let contentBackValue = {
            container: "card" + card_id + "-back-label0",
            text: "card" + card_id + "-back-text0",
          }
          labels.push(contentBackValue);
          let contentSetValue = {
            container: "card" + card_id + "-back-label1",
            text: "card" + card_id + "-back-text1",
          }
          labels.push(contentSetValue);
          let titleBackValue = {
            container: "card" + card_id + "-titleback-label0",
            text: "card" + card_id + "-titleback-text0",
          }
          labels.push(titleBackValue);
        }
        for (let label_id = 1; label_id < labels_max[card_id]; label_id++) {
          let labelValues = {
            container: "card" + card_id + "-label" + label_id,
            text: "card" + card_id + "-text" + label_id,
          };
          labels.push(labelValues);
        }
      }

      // console.log(labels);

      labels.forEach(function (label) {
        const div = document.getElementById(label.container);
        const string = document.getElementById(label.text);
        const divWidth = div.offsetWidth;
        const divHeight = div.offsetHeight;
        // console.log(string)
        let style = window.getComputedStyle(string);
        let fontSizeWithPx = style.getPropertyValue('font-size');
        let fontSize = parseFloat(fontSizeWithPx);
        while (
          string.scrollWidth > divWidth ||
          string.scrollHeight > divHeight
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

@font-face {
  font-family: 'Urbanist';
  font-weight: 700;
  font-style: normal;
  src: url('./fonts/Urbanist/Urbanist-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Urbanist';
  font-weight: 400;
  font-style: normal;
  src: url('./fonts/Urbanist/Urbanist-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Urbanist';
  font-weight: 500;
  font-style: normal;
  src: url('./fonts/Urbanist/Urbanist-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Noto Sans TC';
  font-weight: 700;
  /* bold */
  font-style: normal;
  src: url('./fonts/NotoSansTC/NotoSansTC-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Noto Sans TC';
  font-weight: 400;
  /* normal */
  font-style: normal;
  src: url('./fonts/NotoSansTC/NotoSansTC-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Noto Sans TC';
  font-weight: 500;
  /* medium */
  font-style: normal;
  src: url('./fonts/NotoSansTC/NotoSansTC-Medium.ttf') format('truetype');
}

@font-face {
    font-family: 'Vazirmatn';
    font-weight: 700;
  /* bold */
    font-style: normal;
    src: url('./fonts/Vazirmatn/Vazirmatn-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'Vazirmatn';
    font-weight: 400;
  /* normal */
    font-style: normal;
    src: url('./fonts/Vazirmatn/Vazirmatn-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Vazirmatn';
    font-weight: 500;
  /* medium */
    font-style: normal;
    src: url('./fonts/Vazirmatn/Vazirmatn-Medium.ttf') format('truetype');
}

@font-face {
    font-family: 'Noto Sans Arabic';
    font-weight: 700;
  /* bold */
    font-style: normal;
    src: url('./fonts/NotoSansArabic/NotoSansArabic-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'Noto Sans Arabic';
    font-weight: 400;
  /* normal */
    font-style: normal;
    src: url('./fonts/NotoSansArabic/NotoSansArabic-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Noto Sans Arabic';
    font-weight: 500;
  /* medium */
    font-style: normal;
    src: url('./fonts/NotoSansArabic/NotoSansArabic-Medium.ttf') format('truetype');
}

@font-face {
    font-family: 'Noto Sans JP';
    font-weight: 700;
  /* bold */
    font-style: normal;
    src: url('./fonts/NotoSansJP/NotoSansJP-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'Noto Sans JP';
    font-weight: 400;
  /* normal */
    font-style: normal;
    src: url('./fonts/NotoSansJP/NotoSansJP-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Noto Sans JP';
    font-weight: 500;
  /* medium */
    font-style: normal;
    src: url('./fonts/NotoSansJP/NotoSansJP-Medium.ttf') format('truetype');
}

@font-face {
    font-family: 'Padauk';
    font-weight: 700;
  /* bold */
    font-style: normal;
    src: url('./fonts/Padauk/Padauk-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'Padauk';
    font-weight: 400;
  /* normal */
    font-style: normal;
    src: url('./fonts/Padauk/Padauk-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Noto Sans';
    font-weight: 700;
  /* bold */
    font-style: normal;
    src: url('./fonts/NotoSans/NotoSans-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'Noto Sans';
    font-weight: 400;
  /* normal */
    font-style: normal;
    src: url('./fonts/NotoSans/NotoSans-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Noto Sans';
    font-weight: 500;
  /* medium */
    font-style: normal;
    src: url('./fonts/NotoSans/NotoSans-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Noto Sans SC';
  font-weight: 700;
  /* bold */
  font-style: normal;
  src: url('./fonts/NotoSansSC/NotoSansSC-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Noto Sans SC';
  font-weight: 400;
  /* normal */
  font-style: normal;
  src: url('./fonts/NotoSansSC/NotoSansSC-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Noto Sans SC';
  font-weight: 500;
  /* medium */
  font-style: normal;
  src: url('./fonts/NotoSansSC/NotoSansSC-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 700;
  /* bold */
  font-style: normal;
  src: url('./fonts/NotoSansKR/NotoSansKR-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 400;
  /* normal */
  font-style: normal;
  src: url('./fonts/NotoSansKR/NotoSansKR-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 500;
  /* medium */
  font-style: normal;
  src: url('./fonts/NotoSansKR/NotoSansKR-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Kanit';
  font-weight: 700;
  /* bold */
  font-style: normal;
  src: url('./fonts/Kanit/Kanit-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Kanit';
  font-weight: 400;
  /* normal */
  font-style: normal;
  src: url('./fonts/Kanit/Kanit-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Kanit';
  font-weight: 500;
  /* medium */
  font-style: normal;
  src: url('./fonts/Kanit/Kanit-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'IBM Plex Sans Condensed';
  font-weight: 700;
  /* bold */
  font-style: normal;
  src: url('./fonts/IBMPlexSansCondensed/IBMPlexSansCondensed-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'IBM Plex Sans Condensed';
  font-weight: 500;
  /* bold */
  font-style: normal;
  src: url('./fonts/IBMPlexSansCondensed/IBMPlexSansCondensed-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'Urbanist';
  font-weight: 400;
  /* normal */
  font-style: normal;
  src: url('./fonts/IBMPlexSerif/IBMPlexSerif-Regular.ttf') format('truetype');
}


/* @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400;700&display=swap'); */

:root {
  --r-main-font: "Urbanist", sans-serif;
  --r-heading-font: "Urbanist", sans-serif;
  --r-heading-color:#24255D;
  --r-heading-margin: 0 0 0 0;
  --r-heading3-color: black;
  --r-heading4-color: black;
  --r-heading1-size: 27px;
  --r-heading2-size: 300px;
  --r-heading3-size: 250px;
  --r-heading4-size: 240px;
  --r-main-font-size: calc(20px * var(--scale-factor));
  --r-block-margin: 0;
  /* --original-height: 408;
  --original-width: 597; */
  --original-height: 420;
  --original-width: 5;
  --new-height: 470;
  /* for us printing
  --scale-factor: 1.03;
  --scale-factor-width: 0.974;
  --scale-factor-height: 1.03; */
  --scale-factor-width: 1.000;
  --scale-factor-height: 1.000;
  --scale-factor : 1.000; /*pour une résolution de 597 x 408 */
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}


.slides>section {
  width: 100%;
  height: 100%;
}

.container h1 {
  font-weight: 600;
}

.horizontal-center {
  display: flex;
  align-items: center;
}

.vertical-center {
  display: flex;
  justify-content: center;
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

.orange p {
  color: #FF6600;
}

.red p {
  color: #FD5050;
}

.black {
  color: #24255D;
}

.white {
  color: white;
}

.font-big {
  font-weight: 900;
}

.font-medium {
  font-weight: 700;
}

.font-small {
  font-weight: 500;
}
</style>
