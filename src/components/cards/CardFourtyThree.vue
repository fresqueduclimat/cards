<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card43-label0" class="label black card43-label0-position">
                <p id="card43-text0">{{ $t('V1C99L1') }}</p>
            </div>
            <div id="card43-label1" class="label black card43-label1-position">
                <p id="card43-text1">{{ $t('V1C99L1') }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CardOne",
    props: {
        backgroundFrontImage: {
            type: String,
            required: true,
        },
    },
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/png/C99.png");
        },
    },
};
</script>

<style>
.card43-label0-position {
    top: 178px;
    left: 240px;
    width: 4200px;
    height: 570px;
    /* border: solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 256px;
}
.card43-label1-position {
    top: 2770px;
    left: 555px;
    width: 1000px;
    height: 250px;
    font-size: 200px;
    text-align: left;
    /* border : red solid; */
}
</style>