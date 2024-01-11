<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
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
                <p>{{ "Climate Fresk - " + $t('V0C0L0') + " - " + $t('V1C0L0') + " - V9.0 - 08/01/2024"}}</p>
            </div>
            <div class="label outline-container-back">
                <div class="outline">{{ $t('V1C0L15') }}</div>
            </div>
            <!-- <hr class="label border-white top-left-vertical">
            <hr class="label border-white top-left-horizontal">
            <hr class="label border-white top-right-vertical">
            <hr class="label border-white top-right-horizontal">
            <hr class="label border-white bottom-left-vertical">
            <hr class="label border-white bottom-left-horizontal">
            <hr class="label border-white bottom-right-vertical">
            <hr class="label border-white bottom-right-horizontal"> -->
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
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || "png",
        };
    },
    computed: {
        backgroundFrontImageUrl() {
            return require(`@/assets/${this.imageType}/C0.${this.imageType}`);
        },
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
/* default is en logo, without barcode (website format) */
.logo-container-big {
    top: 270px;
    left: 133px;
    width: 230px;
    height: 87px;
}

.logo-container-small {
    top: 1000px; /* appears if defined in logoDirective.js*/
    left: 432.5px;
    width: 116px;
    height: 47px;
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
    background-image: url('@/assets/qr-code/qr-siteweb-fr.png');
    background-size: contain;
}

.qr-code-siteweb-container {
    top: 209px;
    left: 435px;
    width: 111px;
    height: 111px;
}

.barcode {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/barcode/adults-en.png');
    background-size: contain;
}

.barcode-container {
    top: 500px; /*does not show unless print is true and element position are modified in printDirective.js*/
    left: 53px;
    width: 138.4px;
    height: 61px;
} 

.cc {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/creative-commons.png');
    background-size: contain;
}

.cc-container {
    top: 46px;
    left: 431.7px;
    width: 119.5px;
    height: 42px;
}

.card44-label0-position {
    top: 46px;
    left: 44.7px;
    width: 378px;
    height: 44.7px;
    font-weight: 900;
    text-align: left;
    /* border: red solid; */
}

.card44-label1-position {
    top: 86px;
    left: 44.7px;
    width: 383.5px;
    height: 135px;
    text-align: left;
    font-size: 11px;
    /* border: red solid 0.2px; */
}

.card44-label2-position {
    top: 229px;
    left: 44.7px;
    width: 165px;
    height: 51.6px;
    text-align: left;
    font-size: 11px;
    /* border: red solid 0.2px; */
}

.card44-label3-position {
    top: 229px;
    left: 228px;
    width: 172px;
    height: 43px;
    text-align: left;
    font-size: 11px;
    /* border: red solid 0.2px; */
}

.card44-label4-position {
    top: 325px;
    left: 432px;
    width: 119.5px;
    height: 37.8px;
    font-size: 13px;
    /* border: red solid; */
}

/* .card44-label5-position {
    top : 174px;
    left: 502px;
    width: 139px;
    height: 34px;
    border: red solid;
}

.card44-label6-position {
    top : 209px;
    left: 502px;
    width: 139px;
    height: 34px;
    border: red solid;
}  */

.card44-label7-position {
    top: 516px; /* print=true, cf.printDirective */
    left: 37px;
    width: 520px;
    height: 17px;
    font-size : 11px;
}

/* default is en logo without barcode (website version) */
.outline-container-back {
    top: 351.7px;
    left: 174.6px;
    width: 206px;
    height: 17px;
    font-size: 11px;
    text-align: left;
    /* border: red solid 0.5px; */
}
</style>