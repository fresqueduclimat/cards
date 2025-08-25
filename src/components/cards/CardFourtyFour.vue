<template>
    <section data-background-size="cover">
        <div class="container">
            <div id="card44-label0" v-text-align class="label black card44-label0-position" >
                <p id="card44-text0">{{ $t('V1C999L2') }}</p>
            </div>
            <div id="card44-label1" v-text-align class="label black card44-label1-position">
                <p id="card44-text1">{{ $t('V1C999L3') + ' ' + $t('V1C999L4')}}</p>
            </div>
            <div id="card44-label2" v-text-align class="label black card44-label2-position">
                <p id="card44-text2">{{ $t('V1C999L5') }}</p>
            </div>
            <div id="card44-label3" v-text-align class="label black card44-label3-position">
                <p id="card44-text3">{{ $t('V1C999L6') }}</p>
            </div>
            <div id="card44-label4" class="label black card44-label4-position">
                <p id="card44-text4">{{ $t('V1C999L7') }}</p>
            </div>
            <!-- <div id="card44-label5" class="label black card44-label5-position">
                <p id="card44-text5">{{ $t('V1C999L8') }}</p>
            </div>
            <div id="card44-label6" class="label black card44-label6-position">
                <p id="card44-text6">{{ $t('V1C999L9') }}</p>
            </div> -->
            <div id="card44-label7" class="label white card44-label7-position">
                <p id="card44-label7">{{ $t('V1C999L91') }}</p>
            </div>
            <div class="label logo-container-big">
                <div class="local-logo"></div>
            </div>
            <div class="label logo-container-small">
                <div class="logo"></div>
            </div>
            <div class="label qr-code-siteweb-container">
                <div class="qr-code-siteweb"></div>
            </div>
            <div class="label barcode-container">
                <div class="barcode"></div>
            </div>
            <div class="label cc-container">
                <div class="cc"></div>
            </div>
            <div class="label white front-card-label2-position">
                <p>{{ "Climate Fresk - " + $t('V0C0L0') + " - " + $t('V1C0L0') + " - V9.0 - 20/08/2025"}}</p>
            </div>
            <div class="label outline-container-back">
                <div class="outline">{{ $t('V1C0L15') }}</div>
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
.logo-container-big {
    top: calc(270px * var(--scale-factor-height));
    left: calc(133px * var(--scale-factor-width));
    width: calc(230px * var(--scale-factor-width));
    height: calc(87px * var(--scale-factor-height));
}

.logo-container-small {
    top: calc(1000px * var(--scale-factor-height)); /* appears if defined in logoDirective.js*/
    left: calc(432.5px * var(--scale-factor-width));
    width: calc(116px * var(--scale-factor-width));
    height: calc(47px * var(--scale-factor-height));
}

.logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-en.png');
    background-size: contain;
}


.local-logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-en.png');
    background-size: contain;
}

.qr-code-siteweb {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/qr-code/qr-siteweb-en.png');
    background-size: contain;
}

.qr-code-siteweb-container {
    top: calc(209px * var(--scale-factor-height));
    left: calc(435px * var(--scale-factor-width));
    width: calc(111px * var(--scale-factor-width));
    height: calc(111px * var(--scale-factor-height));
}

.barcode {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/barcode/adults-en.png');
    background-size: contain;
}

.barcode-container {
    top: calc(500px * var(--scale-factor-height)); /*does not show unless print is true and element position are modified in printDirective.js*/
    left: calc(53px * var(--scale-factor-width));
    width: calc(138.4px * var(--scale-factor-width));
    height: calc(61px * var(--scale-factor-height));
} 

.cc {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/creative-commons.png');
    background-size: contain;
}

.cc-container {
    top: calc(46px * var(--scale-factor-height));
    left: calc(431.7px * var(--scale-factor-width));
    width: calc(117.5px * var(--scale-factor-width));
    height: calc(42px * var(--scale-factor-height));
}

.card44-label0-position {
    top: calc(46px * var(--scale-factor-height));
    left: calc(44.7px * var(--scale-factor-width));
    width: calc(378px * var(--scale-factor-width));
    height: calc(44.7px * var(--scale-factor-height));
    font-weight: 900;
    text-align: left;
    /* border: red solid; */
}

.card44-label1-position {
    top: calc(97px * var(--scale-factor-height));
    left: calc(44.7px * var(--scale-factor-width));
    width: calc(383.5px * var(--scale-factor-width));
    height: calc(135px * var(--scale-factor-height));
    text-align: left;
    font-size: calc(11px * var(--scale-factor));
    /* border: red solid 0.2px * var(--scale-factor)); */
}

.card44-label2-position {
    top: calc(229px * var(--scale-factor-height));
    left: calc(44.7px * var(--scale-factor-width));
    width: calc(165px * var(--scale-factor-width));
    height: calc(51.6px * var(--scale-factor-height));
    text-align: left;
    font-size: calc(11px * var(--scale-factor));
    /* border: red solid 0.2px * var(--scale-factor)); */
}

.card44-label3-position {
    top: calc(229px * var(--scale-factor-height));
    left: calc(228px * var(--scale-factor-width));
    width: calc(172px * var(--scale-factor-width));
    height: calc(43px * var(--scale-factor-height));
    text-align: left;
    font-size: calc(11px * var(--scale-factor));
    /* border: red solid 0.2px * var(--scale-factor)); */
}

.card44-label4-position {
    top: calc(325px * var(--scale-factor-height));
    left: calc(432px * var(--scale-factor-width));
    width: calc(119.5px * var(--scale-factor-width));
    height: calc(37.8px * var(--scale-factor-height));
    font-size: calc(13px * var(--scale-factor));
    /* border: red solid; */
}

/* .card44-label5-position {
    top : 174px * var(--scale-factor));
    left: calc(502px * var(--scale-factor-width));
    width: calc(139px * var(--scale-factor-width));
    height: calc(34px * var(--scale-factor-height));
    border: red solid;
}

.card44-label6-position {
    top : 209px * var(--scale-factor));
    left: calc(502px * var(--scale-factor-width));
    width: calc(139px * var(--scale-factor-width));
    height: calc(34px * var(--scale-factor-height));
    border: red solid;
}  */

.card44-label7-position {
    top: calc(516px * var(--scale-factor-height)); /* print=true, cf.printDirective */
    left: calc(37px * var(--scale-factor-width));
    width: calc(520px * var(--scale-factor-width));
    height: calc(17px * var(--scale-factor-height));
    font-size: calc(11px * var(--scale-factor));
}

/* default is en logo without barcode (website version) */
.outline-container-back {
    background-color: white;
    top: calc(351.7px * var(--scale-factor-height));
    left: calc(174.6px * var(--scale-factor-width));
    width: calc(200px * var(--scale-factor-width));
    height: calc(17px * var(--scale-factor-height));
    font-size: calc(11px * var(--scale-factor));
    text-align: left;
    /* border: red solid 0.5px * var(--scale-factor)); */
}
</style>