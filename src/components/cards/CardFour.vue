<template>
    <section ref="picture" :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card4-label0" class="title card4-label0-position">
                <h1 id="card4-text0">{{ $t('V1C4L1') }}</h1>
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
        backgroundFrontImageUrl() {
            return require("@/assets/C4.png");
        },
        backgroundBackImageUrl() {
            return require("@/assets/C4-back.png");
        },
    },
};
</script>

<style>
.card4-label0-position {
    top: 6vh;
    left: 2vw;
    width: calc(100% - 4vw);
    height: 17vh;
}
</style>