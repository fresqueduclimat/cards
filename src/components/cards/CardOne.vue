<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card1-label0" class="title card1-label0-position">
                <h1 id="card1-text0">{{ $t('V1C1L1') }}</h1>
            </div>
        </div>
    </section>
    <section :data-background-image="backgroundBackImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card1-back-label0" class="horizontal-center vertical-center label black card1-back-text0-position">
                <p id="card1-back-text0">{{ $t('V1C1L2') }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CardThirteen",
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/C1.png");
        },
        backgroundBackImageUrl() {
            return require("@/assets/C1-back.png");
        },
    },
};
</script>

<style>
.card1-label0-position {
    top: 6vh;
    left: 2vw;
    width: calc(100% - 4vw);
    height: 17vh;
}
.card1-back-text0-position {
    top: 21vh;
    left: 14vw;
    width: calc(100% - 25vw);
    height: 50vh;
}
</style>