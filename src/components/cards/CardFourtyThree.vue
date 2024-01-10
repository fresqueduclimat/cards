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
    top: 25px;
    left: 35px;
    width: 622px;
    height: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 70px;
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
    top: 307px;
    left: 48px;
    width: 130px;
    height: 130px;
}
</style>


<!-- pour une résolution de 3180x4680 -->
<!-- <style>
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
</style> -->