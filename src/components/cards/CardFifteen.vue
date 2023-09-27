<template>
    <CardBase :title="$t('V1C15L1')" :content="$t('V1C15L2')" :card-number="15" :background-front-image="'C15.png'" >
        <div id="card15-label1" class="horizontal-center label card15-label1-position">
            <p id="card15-text1" class="font-small">{{ $t('V1C15L10') }}</p>
        </div>
        <div id="card15-label2" class="horizontal-center label black card15-label2-position">
            <p id="card15-text2" class="font-small">{{ $t('V1C15L11') }}</p>
        </div>
        <div id="card15-label3" class="horizontal-center label label5 card15-label3-position">
            <p id="card15-text3" class="font-small">{{ $t('V1C15L12') }}</p>
        </div>
        <div id="card15-label4" class="horizontal-center label label5 card15-label4-position">
            <p id="card15-text4" class="font-small">{{ $t('V1C15L13') }}</p>
        </div>
        <div id="card15-label5" class="horizontal-center label card15-label5-position">
            <p id="card15-text5" class="font-small">{{ $t('V1C15L14') }}</p>
        </div>
        <div id="card15-label6" class="horizontal-center label card15-label6-position">
            <p id="card15-text6" class="font-small">{{ $t('V1C15L15') }}</p>
        </div>
        <div id="card15-label7" class="horizontal-center label label5 card15-label7-position">
            <p id="card15-text7" class="font-small">{{ $t('V1C15L16') }}</p>
        </div>
        <div id="card15-label8" class="horizontal-center label label5 card15-label8-position">
            <p id="card15-text8" class="font-small">{{ $t('V1C15L17') }}</p>
        </div>
        <div id="card15-label9" class="horizontal-center label label5 card15-label9-position">
            <p id="card15-text9" class="font-small">{{ $t('V1C15L18') }}</p>
        </div>
        <div id="card15-label10" class="horizontal-center label label5 card15-label10-position">
            <p id="card15-text10" class="font-small">{{ $t('V1C15L20') }}</p>
        </div>
        <div id="card15-label11" class="horizontal-center label card15-label11-position">
            <p id="card15-text11" class="font-small">{{ $t('V1C15L21') }}</p>
        </div>
        <div id="card15-label12" class="horizontal-center label label5 card15-label12-position">
            <p id="card15-text12" class="font-small">{{ $t('V1C15L22') }}</p>
        </div>
        <div id="card15-label13" class="horizontal-center label label5 card15-label13-position">
            <p id="card15-text13" class="font-small">{{ $t('V1C15L23') }}</p>
        </div>
        <div id="card15-label14" class="horizontal-center label black label5 card15-label14-position">
            <p id="card15-text14" class="font-small">{{ $t('V1C15L30') }}</p>
        </div>
        <div id="card15-label15" class="horizontal-center label black label5 card15-label15-position">
            <p id="card15-text15" class="font-small">{{ $t('V1C15L31') }}</p>
        </div>
        <div id="card15-label16" class="horizontal-center vertical-center label label5 card15-label16-position">
            <p id="card15-text16" class="font-big">{{ $t('V1C15L3') }}</p>
        </div>
        <div id="card15-label17" class="horizontal-center vertical-center label black label5 card15-label17-position">
            <p id="card15-text17" class="font-big">{{ $t('V1C15L4') }}</p>
        </div>
        <div id="card15-fixed-label1" class="horizontal-center vertical-center label black card15-fixed-label1-position">
            <p id="card15-fixed-text1" class="font-small">2,8 W/m<sup>2</sup></p>
        </div>
        <template v-slot:back-content>
            <div id="card15-back-label8" class="label white set-three">
                <p id="card15-back-text8">{{ $t('V1C0L4') + ' ' + "3"}}</p>
            </div>
        </template>  
    </CardBase>
</template>

<script>
import CardBase from "@/components/base/CardBase.vue";

export default {
    name: "CardOne",
    components: {
        CardBase,
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card15-label1-position {
    top: 118px; /* A' = 790 * 470 / 3180 = 138.35px */
    left: 59px; /* B' = 400 * 693 / 4680 = 59.48px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    justify-content: right;
    color: lightsalmon;
    /* border: solid red; */
}

.card15-label2-position {
    top: 141px; /* A' = 920 * 470 / 3180 = 160.92px */
    left: 59px; /* B' = 400 * 693 / 4680 = 59.48px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    justify-content: right;
    /* border: solid red; */
}

.card15-label3-position {
    top: 164px; /* A' = 1040 * 470 / 3180 = 183.91px */
    left: 59px; /* B' = 400 * 693 / 4680 = 59.48px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    justify-content: right;
    color: grey;
    /* border: solid red; */
}

.card15-label4-position {
    top: 186px; /* A' = 1160 * 470 / 3180 = 205.87px */
    left: 59px; /* B' = 400 * 693 / 4680 = 59.48px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    justify-content: right;
    color: cyan;
    /* border: solid red; */
}

.card15-label5-position {
    top: 229px; /* A' = 1280 * 470 / 3180 = 228.83px */
    left: 59px; /* B' = 400 * 693 / 4680 = 59.48px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    justify-content: right;
    color: darkgreen;
    /* border: solid red; */
}

.card15-label6-position {
    top: 252px; /* A' = 1400 * 470 / 3180 = 251.80px */
    left: 59px; /* B' = 400 * 693 / 4680 = 59.48px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    justify-content: right;
    color: lightblue;
    /* border: solid red; */
}

.card15-label7-position {
    top: 275px; /* A' = 1520 * 470 / 3180 = 274.77px */
    left: 59px; /* B' = 400 * 693 / 4680 = 59.48px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    justify-content: right;
    color: lightgreen;
    /* border: solid red; */
}

.card15-label8-position {
    top: 297px; /* A' = 1640 * 470 / 3180 = 297.73px */
    left: 59px; /* B' = 400 * 693 / 4680 = 59.48px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    justify-content: right;
    color: green;
    /* border: solid red; */
}

.card15-label9-position {
    top: 320px; /* A' = 1760 * 470 / 3180 = 319.69px */
    left: 59px; /* B' = 400 * 693 / 4680 = 59.48px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 17px; /* D' = 110 * 470 / 3180 = 16.18px */
    justify-content: right;
    color: darkgrey;
    /* border: solid red; */
}

.card15-label10-position {
    top: 501px; /* A' = 2220 * 470 / 3180 = 328.23px */
    left: 93px; /* B' = 630 * 693 / 4680 = 93.43px */
    width: 135px; /* C' = 900 * 693 / 4680 = 134.79px */
    height: 18px; /* D' = 120 * 470 / 3180 = 17.65px */
    justify-content: right;
    color: green;
    /* border: solid red; */
}

.card15-label11-position {
    top: 543px; /* A' = 2360 * 470 / 3180 = 349.41px */
    left: 93px; /* B' = 630 * 693 / 4680 = 93.43px */
    width: 135px; /* C' = 900 * 693 / 4680 = 134.79px */
    height: 18px; /* D' = 120 * 470 / 3180 = 17.65px */
    justify-content: right;
    color: red;
    /* border: solid red; */
}

.card15-label12-position {
    top: 586px; /* A' = 2500 * 470 / 3180 = 368.59px */
    left: 93px; /* B' = 630 * 693 / 4680 = 93.43px */
    width: 135px; /* C' = 900 * 693 / 4680 = 134.79px */
    height: 27px; /* D' = 150 * 470 / 3180 = 22.12px */
    justify-content: right;
    color: orange;
    /* border: solid red; */
}

.card15-label13-position {
    top: 629px; /* A' = 2650 * 470 / 3180 = 387.76px */
    left: 93px; /* B' = 630 * 693 / 4680 = 93.43px */
    width: 135px; /* C' = 900 * 693 / 4680 = 134.79px */
    height: 24px; /* D' = 130 * 470 / 3180 = 19.18px */
    justify-content: right;
    color: grey;
    /* border: solid red; */
}

.card15-label14-position {
    top: 128px; /* A' = 870 * 470 / 3180 = 128.23px */
    left: 512px; /* B' = 3450 * 693 / 4680 = 512.04px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 27px; /* D' = 150 * 470 / 3180 = 22.12px */
    /* border: solid red; */
}

.card15-label15-position {
    top: 154px; /* A' = 1040 * 470 / 3180 = 153.91px */
    left: 512px; /* B' = 3450 * 693 / 4680 = 512.04px */
    width: 163px; /* C' = 1100 * 693 / 4680 = 162.79px */
    height: 27px; /* D' = 150 * 470 / 3180 = 22.12px */
    /* border: solid red; */
}

.card15-label16-position {
    top: 118px; /* A' = 800 * 470 / 3180 = 117.65px */
    left: 289px; /* B' = 1950 * 693 / 4680 = 289.29px */
    width: 170px; /* C' = 1150 * 693 / 4680 = 169.63px */
    height: 52px; /* D' = 350 * 470 / 3180 = 51.94px */
    color: white;
    /* border: solid red; */
}

.card15-label17-position {
    top: 369px; /* A' = 2500 * 470 / 3180 = 368.59px */
    left: 289px; /* B' = 1950 * 693 / 4680 = 289.29px */
    width: 170px; /* C' = 1150 * 693 / 4680 = 169.63px */
    height: 52px; /* D' = 350 * 470 / 3180 = 51.94px */
    /* border: solid red; */
}

.card15-fixed-label1-position {
    top: 184px;
    left: 515px;
    width: 112px;
    height: 36px;
    font-size: 22px;
    /* border: solid red; */
}

</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card15-label1-position {
    top: 790px;
    left: 400px;
    width: 1100px;
    height: 100px;
    justify-content: right;
    color : lightsalmon;
    /* border: solid red; */
}

.card15-label2-position {
    top: 920px;
    left: 400px;
    width: 1100px;
    height: 100px;
    justify-content: right;
    /* border: solid red; */
}

.card15-label3-position {
    top: 1040px;
    left: 400px;
    width: 1100px;
    height: 100px;
    justify-content: right;
    color: grey;
    /* border: solid red; */
}

.card15-label4-position {
    top: 1160px;
    left: 400px;
    width: 1100px;
    height: 100px;
    justify-content: right;
    color : cyan;
    /* border: solid red; */
}
.card15-label5-position {
    top: 1280px;
    left: 400px;
    width: 1100px;
    height: 100px;
    justify-content: right;
    color : darkgreen;
    /* border: solid red; */
}

.card15-label6-position {
    top: 1400px;
    left: 400px;
    width: 1100px;
    height: 100px;
    justify-content: right;
    color : lightblue;
    /* border: solid red; */
}

.card15-label7-position {
    top: 1520px;
    left: 400px;
    width: 1100px;
    height: 100px;
    justify-content: right;
    color : lightgreen;
    /* border: solid red; */
}

.card15-label8-position {
    top: 1640px;
    left: 400px;
    width: 1100px;
    height: 100px;
    justify-content: right;
    color : green;
    /* border: solid red; */
}

.card15-label9-position {
    top: 1760px;
    left: 400px;
    width: 1100px;
    height: 110px;
    justify-content: right;
    color : darkgrey;
    /* border: solid red; */
}

.card15-label10-position {
    top: 2220px;
    left: 630px;
    width: 900px;
    height: 120px;
    justify-content: right;
    color : green;
    /* border: solid red; */
}
.card15-label11-position {
    top: 2360px;
    left: 630px;
    width: 900px;
    height: 120px;
    justify-content: right;
    color : red;
    /* border: solid red; */
}

.card15-label12-position {
    top: 2500px;
    left: 630px;
    width: 900px;
    height: 150px;
    justify-content: right;
    color : orange;
    /* border: solid red; */
}

.card15-label13-position {
    top: 2650px;
    left: 630px;
    width: 900px;
    height: 130px;
    justify-content: right;
    color : grey;
    /* border: solid red; */
}

.card15-label14-position {
    top: 870px;
    left: 3450px;
    width: 1100px;
    height: 150px;
    /* border: solid red; */
}
.card15-label15-position {
    top: 1040px;
    left: 3450px;
    width: 1100px;
    height: 150px;
    /* border: solid red; */
}
.card15-label16-position {
    top: 800px;
    left: 1950px;
    width: 1150px;
    height: 350px;
    color : white;
    /* border: solid red; */
}
.card15-label17-position {
    top: 2500px;
    left: 1950px;
    width: 1150px;
    height: 350px;
    /* border: solid red; */
}

.card15-fixed-label1-position {
    top: 1250px;
    left: 3485px;
    width: 770px;
    height: 250px;
    font-size: 150px;
    /* border: solid red; */
}
</style> -->