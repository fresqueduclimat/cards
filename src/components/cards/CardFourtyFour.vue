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
    top: 314px;
    left: 155px;
    width: 268px;
    height: 101px;
    /* top: 329px;
    left: 110px;
    width: 280px;
    height: 75px; */
}

.logo-container-small {
    top: 1000px; /* appears if defined in logoDirective.js*/
    left: 503px;
    width: 135px;
    height: 55px;
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
    top: 243px;
    left: 506px;
    width: 130px;
    height: 130px;
}

.barcode {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/barcode/adults-nl.png');
    background-size: contain;
}

.barcode-container {
    top: 500px; /*does not show unless print is true and element position are modified in printDirective.js*/
    left: 62px;
    width: 161px;
    height: 71px;
} 

.cc {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/creative-commons.png');
    background-size: contain;
}

.cc-container {
    top: 53px;
    left: 502px;
    width: 139px;
    height: 49px;
}

.card44-label0-position {
    top: 54px;
    left: 52px;
    width: 440px;
    height: 52px;
    font-weight: 900;
    text-align: left;
    /* border: red solid; */
}

.card44-label1-position {
    top: 100px;
    left: 52px;
    width: 446px;
    height: 157px;
    text-align: left;
    font-size: 13px;
    /* border: red solid 0.2px; */
}

.card44-label2-position {
    top: 266px;
    left: 52px;
    width: 192px;
    height: 60px;
    text-align: left;
    font-size: 13px;
    /* border: red solid 0.2px; */
}

.card44-label3-position {
    top: 266px;
    left: 259px;
    width: 200px;
    height: 50px;
    text-align: left;
    font-size: 13px;
    /* border: red solid 0.2px; */
}

.card44-label4-position {
    top: 378px;
    left: 502px;
    width: 139px;
    height: 44px;
    font-size: 15px;
    /* border: red solid; */
}

.card44-label5-position {
    /* top: 126px; */
    top : 174px;
    left: 502px;
    width: 139px;
    height: 34px;
    /* border: red solid; */
}

.card44-label6-position {
    /* top: 186px; */
    top : 209px;
    left: 502px;
    width: 139px;
    height: 34px;
    /* border: red solid; */
}

.card44-label7-position {
    top: 600px; /* print=true, cf.printDirective */
    left: 43px;
    width: 605px;
    height: 20px;
    font-size : 14px;
}

/* default is en logo without barcode (website version) */
.outline-container-back {
    top: 409px;
    left: 203px;
    width: 240px;
    height: 20px;
    /* top: 400px;
    left: 155px;
    width: 240px;
    height: 20px; */
    font-size: 13px;
    text-align: left;
    /* border: red solid 0.5px; */
}



</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.logo-container-big {
    top: 2050px;
    left: 615px;
    width: 2000px;
    height: 750px;
}

.logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-fr.${imageType}');
    background-size: contain;
}

.card44-label0-position {
    top: 400px;
    left: 350px;
    width: 2900px;
    height: 300px;
    font-weight: 900;
    text-align : left;
    /* border : red solid; */
}

.card44-label1-position {
    top: 740px;
    left: 350px;
    width: 2970px;
    height: 910px;
    text-align: left;
    font-size: 100px;
    /* border : red solid; */
}

.card44-label2-position {
    top: 1670px;
    left: 350px;
    width: 1300px;
    height: 340px;
    text-align: left;
    font-size: 100px;
    /* border : red solid; */
}

.card44-label3-position {
    top: 1670px;
    left: 1900px;
    width: 1300px;
    height: 250px;
    text-align: left;
    font-size: 100px;
    /* border : red solid; */
}

.card44-label4-position {
    top: 2550px;
    left: 3320px;
    width: 950px;
    height: 300px;
    font-size: 100px;
    /* border : red solid; */
}

.card44-label5-position {
    top: 850px;
    left: 3420px;
    width: 850px;
    height: 230px;
    /* border : red solid; */
    
}

.card44-label6-position {
    top: 1250px;
    left: 3420px;
    width: 850px;
    height: 230px;
    /* border : red solid; */
    
}

.card44-label7-position {
    top: 2700px;
    left: 1200px;
    width: 500px;
    height: 200px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    
}

.card44-label8-position {
    top: 2700px;
    left: 1850px;
    width: 500px;
    height: 200px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    
}

.card44-label9-position {
    top: 2700px;
    left: 2600px;
    width: 500px;
    height: 200px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    
}

</style>-->