<template>
    <section ref="picture" :data-background-image="backgroundImageUrl" data-background-size="cover">
        <div class="container">
            <div id="titleDiv" class="custom-title">
                <h1 id="title">{{ $t('V1C13L1') }}</h1>
            </div>
            <div id="label1" class="horizontal-center label orange card13-label1-position">
                <h3 id="text1">{{ $t('V1C13L3') }}</h3>
            </div>
            <div id="label2" class="horizontal-center vertical-center label orange card13-label2-position">
                <h3 id="text2">{{ $t('V1C13L4') }}</h3>
            </div>
            <div id="label3" class="horizontal-center vertical-center label red card13-label3-position">
                <h3 id="text3">{{ $t('V1C13L5') }}</h3>
            </div>
            <div id="label4" class="horizontal-center vertical-center label red card13-label4-position">
                <h3 id="text4">{{ $t('V1C13L6') }}</h3>
            </div>
        </div>
    </section>
    <section ref="back" :data-background-image="backgroundBackImageUrl" data-background-size="cover">
    </section>
</template>

<script>
export default {
    name: "CardThirteen",
    computed: {
        backgroundImageUrl() {
            return require("@/assets/C13.png");
        },
    },
};
</script>

<style>
.card13-label1-position {
    top: 37vh;
    left: 26vw;
    width: 15vw;
    height: 10vh;
}

.card13-label2-position {
    top: 54vh;
    left: 5vw;
    width: 15vw;
    height: 10vh;
}

.card13-label3-position {
    top: 23vh;
    left: 64vw;
    width: 20vw;
    height: 10vh;
}

.card13-label4-position {
    top: 54vh;
    left: 72vw;
    width: 12vw;
    height: 10vh;
}
</style>
