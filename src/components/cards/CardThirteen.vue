<template>
    <section ref="picture" :data-background-image="backgroundImageUrl" data-background-size="cover">
        <div class="container">
            <div class="custom-title">
                <h1>{{ $t('V1C13L1') }}</h1>
            </div>
            <div class="label orange label1">
                <h4>{{ $t('V1C13L3') }}</h4>
            </div>
            <div class="label orange label2">
                <h4>{{ $t('V1C13L4') }}</h4>
            </div>
            <div class="label red label3">
                <h4>{{ $t('V1C13L5') }}</h4>
            </div>
            <div class="label red label4">
                <h4>{{ $t('V1C13L6') }}</h4>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CardThirteen",
    computed: {
        backgroundImageUrl() {
            return require("@/assets/card13.jpeg");
        },
    },
    mounted() {
        console.log(this.$refs.picture.clientHeight)
    },
};
</script>

<!-- <script setup>
import { ref, onMounted } from "vue";

const picture = ref(0);

onMounted(() => {
    // const div = label3.value
    // const text = div.querySelector("h4")
    // console.log("hello")
    // console.log(label3.value.clientHeight)
    // console.log(div)
    // console.log(text)
    // console.log(text.clientHeight)
    // console.log(text.fontSize)
    // console.log(div.clientHeight)
    // while (text.clientHeight > div.clientHeight) {
    //     text.style.fontSize = parseInt(window.getComputedStyle(text).fontSize) - 1
    //     console.log(parseInt(window.getComputedStyle(text).fontSize) - 1)
    // }

    const height = picture;
    console.log(height)
})
</script> -->

<style>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 3vh;
}

.custom-title {
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    padding-block: 3vh;
    z-index: 999;
}

.label {
    position: absolute;
}

.label1 {
    top: 37vh;
    left: 26vw;
}

.label2 {
    top: 57vh;
    left: 5vw;
}

.label3 {
    top: 23vh;
    left: 64vw;
    width: 200px;
    height: 200px;
}

.label4 {
    top: 54vh;
    left: 72vw;
}

.label h4 {
    font-weight: 700;
}

.orange h4 {
    color: #FF6600;
}

.red h4 {
    color: #FD5050;
}
</style>
