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
    top: 302px; /* A' = 2050 * 470 / 3180 = 302.47px */
    left: 91px; /* B' = 615 * 693 / 4680 = 91.01px */
    width: 295px; /* C' = 2000 * 693 / 4680 = 295.11px */
    height: 110px; /* D' = 750 * 470 / 3180 = 110.35px */
}

.card44-label0-position {
    top: 59px; /* A' = 400 * 470 / 3180 = 58.85px */
    left: 52px; /* B' = 350 * 693 / 4680 = 52.03px */
    width: 431px; /* C' = 2900 * 693 / 4680 = 431.19px */
    height: 44px; /* D' = 300 * 470 / 3180 = 44.23px */
    font-weight: 900;
    text-align : left;
    /* border : red solid; */
}

.card44-label1-position {
    top: 109px; /* A' = 740 * 470 / 3180 = 109.08px */
    left: 52px; /* B' = 350 * 693 / 4680 = 52.03px */
    width: 443px; /* C' = 2970 * 693 / 4680 = 443.06px */
    height: 134px; /* D' = 910 * 470 / 3180 = 134.12px */
    text-align: left;
    font-size: 100px;
    /* border : red solid; */
}

.card44-label2-position {
    top: 247px; /* A' = 1670 * 470 / 3180 = 246.70px */
    left: 52px; /* B' = 350 * 693 / 4680 = 52.03px */
    width: 292px; /* C' = 1300 * 693 / 4680 = 291.90px */
    height: 50px; /* D' = 340 * 470 / 3180 = 50.00px */
    text-align: left;
    font-size: 100px;
    /* border : red solid; */
}

.card44-label3-position {
    top: 247px; /* A' = 1670 * 470 / 3180 = 246.70px */
    left: 282px; /* B' = 1900 * 693 / 4680 = 281.78px */
    width: 292px; /* C' = 1300 * 693 / 4680 = 291.90px */
    height: 37px; /* D' = 250 * 470 / 3180 = 36.98px */
    text-align: left;
    font-size: 100px;
    /* border : red solid; */
}

.card44-label4-position {
    top: 375px; /* A' = 2550 * 470 / 3180 = 375.00px */
    left: 496px; /* B' = 3320 * 693 / 4680 = 496.06px */
    width: 147px; /* C' = 950 * 693 / 4680 = 146.62px */
    height: 44px; /* D' = 300 * 470 / 3180 = 44.23px */
    font-size: 100px;
    /* border : red solid; */
}

.card44-label5-position {
    top: 126px; /* A' = 850 * 470 / 3180 = 125.56px */
    left: 507px; /* B' = 3420 * 693 / 4680 = 506.74px */
    width: 126px; /* C' = 850 * 693 / 4680 = 126.17px */
    height: 34px; /* D' = 230 * 470 / 3180 = 33.97px */
    /* border : red solid; */
}

.card44-label6-position {
    top: 185px; /* A' = 1250 * 470 / 3180 = 184.85px */
    left: 507px; /* B' = 3420 * 693 / 4680 = 506.74px */
    width: 126px; /* C' = 850 * 693 / 4680 = 126.17px */
    height: 34px; /* D' = 230 * 470 / 3180 = 33.97px */
    /* border : red solid; */
}

.card44-label7-position {
    top: 399px; /* A' = 2700 * 470 / 3180 = 398.93px */
    left: 178px; /* B' = 1200 * 693 / 4680 = 178.72px */
    width: 73px; /* C' = 500 * 693 / 4680 = 73.43px */
    height: 30px; /* D' = 200 * 470 / 3180 = 29.63px */
    color : red;
    font-weight: 900;
    /* border : red solid; */
}

.card44-label8-position {
    top: 399px; /* A' = 2700 * 470 / 3180 = 398.93px */
    left: 277px; /* B' = 1850 * 693 / 4680 = 276.58px */
    width: 73px; /* C' = 500 * 693 / 4680 = 73.43px */
    height: 30px; /* D' = 200 * 470 / 3180 = 29.63px */
    color : red;
    font-weight: 900;
    /* border : red solid; */
}

.card44-label9-position {
    top: 399px; /* A' = 2700 * 470 / 3180 = 398.93px */
    left: 388px; /* B' = 2600 * 693 / 4680 = 387.24px */
    width: 73px; /* C' = 500 * 693 / 4680 = 73.43px */
    height: 30px; /* D' = 200 * 470 / 3180 = 29.63px */
    color : red;
    font-weight: 900;
    /* border : red solid; */
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