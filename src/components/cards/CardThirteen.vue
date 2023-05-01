<template>
    <section ref="picture" :data-background-image="backgroundImageUrl" data-background-size="cover">
        <div class="container">
            <div id="titleDiv" class="custom-title">
                <h1 id="title">{{ $t('V1C13L1') }}</h1>
            </div>
            <div id="label1" class="label orange label1">
                <h4 id="text1">{{ $t('V1C13L3') }}</h4>
            </div>
            <div id="label2" class="label orange label2">
                <h4 id="text2">{{ $t('V1C13L4') }}</h4>
            </div>
            <div id="label3" class="label red label3">
                <h4 id="text3">{{ $t('V1C13L5') }}</h4>
            </div>
            <div id="label4" class="label red label4">
                <h4 id="text4">{{ $t('V1C13L6') }}</h4>
            </div>
        </div>
    </section>
</template>

<script>
import Reveal from "reveal.js";

export default {
    name: "CardThirteen",
    computed: {
        backgroundImageUrl() {
            return require("@/assets/card13.jpeg");
        },
    },
    mounted() {
        this.adjustFontSize();
        Reveal.addEventListener("ready", this.adjustFontSize);
    },
    beforeUnmount() {
        Reveal.removeEventListener("ready", this.adjustFontSize);
    },
    methods: {
        adjustFontSize() {
            const labels = [
                {
                    containerID: "titleDiv",
                    textID: "title",
                    size: 287
                },
                {
                    containerID: "label1",
                    textID: "text1",
                    size: 96
                },
                {
                    containerID: "label2",
                    textID: "text2",
                    size: 96
                },
                {
                    containerID: "label3",
                    textID: "text3",
                    size: 96
                },
                {
                    containerID: "label4",
                    textID: "text4",
                    size: 96
                }]
            labels.forEach(function (label) {
                console.log(label)
                const container = document.getElementById(label.containerID);
                const h4 = document.getElementById(label.textID);
                const containerWidth = container.offsetWidth;
                const containerHeight = container.offsetHeight;
                let fontSize = label.size; // starting font size
                while (
                    h4.offsetWidth > containerWidth ||
                    h4.offsetHeight > containerHeight
                ) {
                    console.log("ite")
                    console.log(h4.offsetHeight);
                    console.log(containerHeight);
                    fontSize--;
                    h4.style.fontSize = fontSize + "pt";
                }
            });
        },
    },
};
</script>

<style>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.custom-title {
    position: absolute;
    top: 5vh;
    left: 2vw;
    width: calc(100% - 4vw);
    height: 18vh;
    text-align: center;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.label {
    position: absolute;
}

.label1 {
    top: 37vh;
    left: 26vw;
    width: 15vw;
    height: 10vh;
}

.label2 {
    top: 57vh;
    left: 5vw;
    width: 15vw;
    height: 10vh;
}

.label3 {
    top: 23vh;
    left: 64vw;
    width: 20vw;
    height: 10vh;
}

.label4 {
    top: 54vh;
    left: 72vw;
    width: 10vw;
    height: 10vh;
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
