<template>
    <section ref="picture" :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card2-label0" class="title card2-label0-position">
                <h1 id="card2-text0">{{ $t('V1C2L1') }}</h1>
            </div>
        </div>
    </section>
    <section :data-background-image="backgroundBackImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card2-back-label0" class="horizontal-center vertical-center label black card2-back-text0-position">
                <p id="card2-back-text0">{{ $t('V1C2L2') }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CardThirteen",
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/C2.png");
        },
        backgroundBackImageUrl() {
            return require("@/assets/C2-back.png");
        },
    },
};
</script>

<style>
.card2-label0-position {
    top: 6vh;
    left: 2vw;
    width: calc(100% - 4vw);
    height: 17vh;
    border : solid red;
}
.card2-back-text0-position {
    top: 21vh;
    left: 14vw;
    width: calc(100% - 25vw);
    height: 50vh;
    border : solid red;
}
</style>