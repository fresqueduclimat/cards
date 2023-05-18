<template>
    <section ref="picture" :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card3-label0" class="title card3-label0-position">
                <h1 id="card3-text0">{{ $t('V1C3L1') }}</h1>
            </div>
        </div>
    </section>
    <section :data-background-image="backgroundBackImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card3-back-label0" class="horizontal-center vertical-center label black card3-back-text0-position">
                <p id="card3-back-text0">{{ $t('V1C3L2') }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CardThirteen",
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/C3.png");
        },
        backgroundBackImageUrl() {
            return require("@/assets/C3-back.png");
        },
    },
};
</script>

<style>
.card3-label0-position {
    top: 6vh;
    left: 2vw;
    width: calc(100% - 4vw);
    height: 17vh;
}
.card3-back-text0-position {
    top: 21vh;
    left: 14vw;
    width: calc(100% - 25vw);
    height: 50vh;
}
</style>