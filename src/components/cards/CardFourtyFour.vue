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
            <div id="card44-label5" class="label black card44-label5-position">
                <p id="card44-text5">{{ $t('V1C999L8') }}</p>
            </div>
            <div id="card44-label6" class="label black card44-label6-position">
                <p id="card44-text6">{{ $t('V1C999L9') }}</p>
            </div>
            <div class="label logo-container-big">
                <div class="logo"></div>
            </div>
            <div class="label white front-card-label2-position">
                <p>{{ "Climate Fresk - " + $t('V0C0L0') + " - Adults - V9.0- 04/12/2024"}}</p>
            </div>
            <div class="label outline-container-back">
                <div class="outline">All the cards are in your hands!</div>
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
            return require("@/assets/png/C99-back.png");
        },
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.logo-container-big {
    top: 304px;
    left: 91px;
    width: 296px;
    height: 111px;
}

.logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-en.png');
    background-size: contain;
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
    top: 112px;
    left: 52px;
    width: 440px;
    height: 157px;
    text-align: left;
    font-size: 14px;
    /* border: red solid 0.2px; */
}

.card44-label2-position {
    top: 266px;
    left: 52px;
    width: 192px;
    height: 50px;
    text-align: left;
    font-size: 12px;
    /* border: red solid 0.2px; */
}

.card44-label3-position {
    top: 266px;
    left: 259px;
    width: 200px;
    height: 50px;
    text-align: left;
    font-size: 12px;
    /* border: red solid 0.2px; */
}

.card44-label4-position {
    top: 378px;
    left: 493px;
    width: 141px;
    height: 44px;
    font-size: 15px;
    /* border: red solid; */
}

.card44-label5-position {
    top: 126px;
    left: 507px;
    width: 126px;
    height: 34px;
    /* border: red solid; */
}

.card44-label6-position {
    top: 186px;
    left: 507px;
    width: 126px;
    height: 34px;
    /* border: red solid; */
}

.card44-label7-position {
    top: 399px;
    left: 178px;
    width: 74px;
    height: 30px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
}

.card44-label8-position {
    top: 399px;
    left: 275px;
    width: 74px;
    height: 30px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
}

.card44-label9-position {
    top: 399px;
    left: 385px;
    width: 74px;
    height: 30px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
}
.outline-container-back {
    top: 404px;
    left: 157px;
    width: 240px;
    height: 20px;
    font-size: 14px;
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
    background-image: url('@/assets/logo-en.png');
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