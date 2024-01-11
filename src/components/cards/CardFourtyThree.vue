<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card43-label0" class="label card43-label0-position">
                <p id="card43-text0">{{ $t('V1C99L1') }}</p>
            </div>
            <div class="label qr-code-memo-container">
                <div class="qr-code-memo"></div>
            </div>
        </div>
        <!-- <hr class="label border-black top-left-vertical">
        <hr class="label border-black top-left-horizontal">
        <hr class="label border-black top-right-vertical">
        <hr class="label border-black top-right-horizontal">
        <hr class="label border-black bottom-left-vertical">
        <hr class="label border-black bottom-left-horizontal">
        <hr class="label border-black bottom-right-vertical">
        <hr class="label border-black bottom-right-horizontal"> -->
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
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || "png",
        };
    },
    computed: {
        backgroundFrontImageUrl() {
            return require(`@/assets/${this.imageType}/C99.${this.imageType}`);
        },
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card43-label0-position {
    top: 21.5px;
    left: 30.1px;
    width: 535px;
    height: 72.2px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 60px;
    font-weight: 700;
    color: white;
}

.qr-code-memo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/qr-code/qr-memo.png');
    background-size: contain;
}

.qr-code-memo-container {
    top: 264px;
    left: 41.8px;
    width: 111px;
    height: 111px;
}
</style>