<template>
    <section data-background-size="cover">
        <div class="container">
            <div id="card29-label0" v-text-align class="label card29-label0-position" >
                <p id="card29-text0">{{ $t('V3C29L0') }}</p>
            </div>
            <div class="label logo-container-back">
                <div class="logo"></div>
            </div>
            <div class="label outline-container-back">
                <div class="outline">{{ $t('V3C0L5') }}</div>
            </div>
            <div class="label qr-code-siteweb-container">
                <div class="qr-code-siteweb"></div>
            </div>
            <div class="label cc-container">
                <div class="cc"></div>
            </div>
            <div class="label black front-card-label2-position">
                <p>{{ "Climate Fresk - " + $t('V3C0L1') + " - " + $t('V3C0L2') + " - " + $t('V3C0L4') + " - 10/03/2026"}}</p>
            </div>

            <div class="label frame-container">
                <div class="frame"></div>
            </div>
            <hr class="label border-white border-vertical top-left-vertical">
            <hr class="label border-white border-horizontal top-left-horizontal">
            <hr class="label border-white border-vertical top-right-vertical">
            <hr class="label border-white border-horizontal top-right-horizontal">
            <hr class="label border-black border-vertical bottom-left-vertical">
            <hr class="label border-black border-horizontal bottom-left-horizontal">
            <hr class="label border-black border-vertical bottom-right-vertical">
            <hr class="label border-black border-horizontal bottom-right-horizontal"> 
        </div>
    </section>
    
</template>

<script>
export default {
    name: "CardOne",
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || "png",
        };
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
/* default is en logo, without barcode (website format) */
.logo-container-back {
    top: calc(287px * var(--scale-factor-height));
    left: calc(121px * var(--scale-factor-width));
    width: calc(146px * var(--scale-factor-width));
    height: calc(55px * var(--scale-factor-height));
}


.logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-en.png');
    background-size: contain;
}

.cc {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/creative-commons.png');
    background-size: contain;
}

.cc-container {
    top: calc(169px * var(--scale-factor-height));
    left: calc(279px * var(--scale-factor-width));
    width: calc(74px * var(--scale-factor-width));
    height: calc(27px * var(--scale-factor-height));
}


.qr-code-siteweb {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/qr-code/qr-siteweb-en.png');
    background-size: contain;
}

.qr-code-siteweb-container {
    top: calc(39px * var(--scale-factor-height));
    left: calc(282px * var(--scale-factor-width));
    width: calc(74px * var(--scale-factor-width));
    height: calc(74px * var(--scale-factor-height));
}


.card29-label0-position {
    top: calc(37px * var(--scale-factor-height));
    left: calc(37px * var(--scale-factor-width));
    width: calc(236px * var(--scale-factor-width));
    height: calc(260px * var(--scale-factor-height));
    text-align: left;
    line-height: 12px; 
    /* border: red solid; */
}

/* default is en logo without barcode (website version) */
.outline-container-back {
    top: calc(339px * var(--scale-factor-height));
    left: calc(123px * var(--scale-factor-width));
    width: calc(200px * var(--scale-factor-width));
    height: calc(17px * var(--scale-factor-height));
    font-size: calc(11px * var(--scale-factor));
    text-align: left;
    /* border: red solid 0.5px * var(--scale-factor)); */
}
</style>