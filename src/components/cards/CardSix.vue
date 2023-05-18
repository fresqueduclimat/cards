<template>
    <section ref="picture" :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card6-label0" class="title card6-label0-position">
                <h1 id="card6-text0" class="font-small">{{ $t('V1C7L4') }}</h1>
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
            return require("@/assets/C6.png");
        },
        backgroundBackImageUrl() {
            return require("@/assets/C6-back.png");
        },
    },
};
</script>

<style>
.card6-label0-position {
    top: 6vh;
    left: 2vw;
    width: calc(100% - 4vw);
    height: 17vh;
    border : solid red;
}
</style>