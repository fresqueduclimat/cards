<!-- Adults Cards -->
<template>
  <div v-customtitlediv v-linespacing v-linebreak v-text-direction v-co2-subscript id="app" class="reveal">
    <div class="slides">
      <div>hello world</div>
      <router-view />
    </div>
  </div>
</template>

<script>
import router from './router.js';

export default {
  name: "App",
  router,
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
  color: black;
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
