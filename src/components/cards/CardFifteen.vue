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
        <div id="card15-fixed-label1" class="horizontal-center vertical-center label card15-fixed-label1-position">
            <p id="card15-fixed-text1" class="font-big">SSP5-8.5</p>
        </div>
        <div id="card15-fixed-label2" class="horizontal-center vertical-center label card15-fixed-label2-position">
            <p id="card15-fixed-text2" class="font-big">SSP3-7.0</p>
        </div>
        <div id="card15-fixed-label3" class="horizontal-center vertical-center label card15-fixed-label3-position">
            <p id="card15-fixed-text3" class="font-big">SSP2-4.5</p>
        </div>
        <div id="card15-fixed-label4" class="horizontal-center vertical-center label card15-fixed-label4-position">
            <p id="card15-fixed-text4" class="font-big">SSP1-2.6</p>
        </div>
        <div id="card15-fixed-label5" class="horizontal-center vertical-center label card15-fixed-label5-position">
            <p id="card15-fixed-text5" class="font-big">SSP1-1.9</p>
        </div>
        <div id="card15-fixed-label6" class="horizontal-center vertical-center label black card15-fixed-label6-position">
            <p id="card15-fixed-text6" class="font-small">2,8 W/m<sup>2</sup></p>
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
    top: 117px;
    left: 59px;
    width: 163px;
    height: 15px;
    justify-content: right;
    color: lightsalmon;
    /* border: solid red; */
}

.card15-label2-position {
    top: 136px;
    left: 59px;
    width: 163px;
    height: 15px;
    justify-content: right;
    /* border: solid red; */
}

.card15-label3-position {
    top: 154px;
    left: 59px;
    width: 163px;
    height: 15px;
    justify-content: right;
    color: grey;
    /* border: solid red; */
}

.card15-label4-position {
    top: 172px;
    left: 59px;
    width: 163px;
    height: 15px;
    justify-content: right;
    color: cyan;
    /* border: solid red; */
}

.card15-label5-position {
    top: 190px;
    left: 59px;
    width: 163px;
    height: 15px;
    justify-content: right;
    color: darkgreen;
    /* border: solid red; */
}

.card15-label6-position {
    top: 208px;
    left: 59px;
    width: 163px;
    height: 15px;
    justify-content: right;
    color: lightblue;
    /* border: solid red; */
}

.card15-label7-position {
    top: 226px;
    left: 59px;
    width: 163px;
    height: 15px;
    justify-content: right;
    color: lightgreen;
    /* border: solid red; */
}

.card15-label8-position {
    top: 244px;
    left: 59px;
    width: 163px;
    height: 15px;
    justify-content: right;
    color: green;
    /* border: solid red; */
}

.card15-label9-position {
    top: 262px;
    left: 59px;
    width: 163px;
    height: 16px;
    justify-content: right;
    color: darkgrey;
    /* border: solid red; */
}

.card15-label10-position {
    top: 329px;
    left: 93px;
    width: 133px;
    height: 18px;
    justify-content: right;
    color: green;
    /* border: solid red; */
}

.card15-label11-position {
    top: 349px;
    left: 93px;
    width: 133px;
    height: 18px;
    justify-content: right;
    color: red;
    z-index: 3; /* devant */
    /* border: solid red; */
}

.card15-label12-position {
    top: 370px;
    left: 93px;
    width: 134px;
    height: 22px;
    justify-content: right;
    color: orange;
    z-index: 3; /* devant */
    /* border: solid red; */
}

.card15-label13-position {
    top: 393px;
    left: 93px;
    width: 133px;
    height: 19px;
    justify-content: right;
    color: grey;
    /* border: solid red; */
}

.card15-label14-position {
    top: 129px;
    left: 510px;
    width: 163px;
    height: 22px;
    /* border: solid red; */
}

.card15-label15-position {
    top: 154px;
    left: 510px;
    width: 163px;
    height: 22px;
    /* border: solid red; */
}

.card15-label16-position {
    top: 118px;
    left: 286px;
    width: 170px;
    height: 52px;
    color: white;
    /* border: solid red; */
}

.card15-label17-position {
    top: 370px;
    left: 289px;
    width: 170px;
    height: 52px;
    /* border: solid red; */
}

.card15-fixed-label1-position {
    top: 269px;
    left: 605px;
    width: 55px;
    height: 18px;
    font-size: 10px;
    color: #980002;
    /* border: solid red 0.5px; */
}
.card15-fixed-label2-position {
    top: 296px;
    left: 605px;
    width: 55px;
    height: 18px;
    font-size: 10px;
    color: #DF0000;
    /* border: solid red  0.5px; */
}
.card15-fixed-label3-position {
    top: 318px;
    left: 605px;
    width: 55px;
    height: 18px;
    font-size: 10px;
    color : #F59527;
    /* border: solid red  0.5px; */
}
.card15-fixed-label4-position {
    top: 340px;
    left: 605px;
    width: 55px;
    height: 18px;
    font-size: 10px;
    color : #003466;
    /* border: solid red  0.5px; */
}
.card15-fixed-label5-position {
    top: 362px;
    left: 605px;
    width: 55px;
    height: 18px;
    font-size: 10px;
    color :#00A9CF;
    /* border: solid red  0.5px; */
}
.card15-fixed-label6-position {
    top: 185px;
    left: 515px;
    width: 114px;
    height: 37px;
    font-size: 20px;
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