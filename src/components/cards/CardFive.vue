<template>
    <CardBase :title="$t('V1C5L1')" :content="$t('V1C5L2')" :card-number="5" :background-front-image="`C5.${imageType}`">
        <div id="card5-label1" class="horizontal-center vertical-center label black card5-label1-position">
            <p id="card5-text1" class="font-small">{{ $t('V1C5L5') }}</p>
        </div>
        <div id="card5-label2" class="horizontal-center vertical-center label black card5-label2-position">
            <p id="card5-text2" class="font-medium">{{ $t('V1C5L3') }}</p>
        </div>
        <div id="card5-label3"
            class="horizontal-center vertical-center label black label5 card5-label3-position">
            <p id="card5-text3" class="font-small">{{ $t('V1C5L4') }}</p>
        </div>
        <div id="card5-label4"
            class="horizontal-center vertical-center label label5 card5-label4-position">
            <p id="card5-text4" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card5-fixed-label1" class="horizontal-center vertical-center label card5-fixed-label1-position">
            <p id="card5-fixed-text1" class="font-big">SSP5-8.5</p>
        </div>
        <div id="card5-fixed-label2" class="horizontal-center vertical-center label card5-fixed-label2-position">
            <p id="card5-fixed-text2" class="font-big">SSP3-7.0</p>
        </div>
        <div id="card5-fixed-label3" class="horizontal-center vertical-center label card5-fixed-label3-position">
            <p id="card5-fixed-text3" class="font-big">SSP2-4.5</p>
        </div>
        <div id="card5-fixed-label4" class="horizontal-center vertical-center label card5-fixed-label4-position">
            <p id="card5-fixed-text4" class="font-big">SSP1-2.6</p>
        </div>
        <div id="card5-fixed-label5" class="horizontal-center vertical-center label card5-fixed-label5-position">
            <p id="card5-fixed-text5" class="font-big">SSP1-1.9</p>
        </div>
        <div id="card5-fixed-label6" class="horizontal-center vertical-center label card5-fixed-label6-position">
            <p id="card5-fixed-text6" class="font-big">2060</p>
        </div>
        <div id="card5-fixed-label7" class="horizontal-center vertical-center label card5-fixed-label7-position">
            <p id="card5-fixed-text7" class="font-big">2080</p>
        </div>
        <div id="card5-fixed-label8" class="label card5-fixed-label8-position">
            <p id="card5-fixed-text8" class="dot-light"></p>
        </div>
        <div id="card5-fixed-label9" class="label card5-fixed-label9-position">
            <p id="card5-fixed-text9" class="dot-dark"></p>
        </div>
        <template v-slot:back-content>
            <div id="card5-back-label5" class="label white set-one">
                <p id="card5-back-text5">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || 'png',
        };
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card5-label1-position {
    top: 120px; 
    left: 155px; 
    width: 175.4px;
    height: 32.7px;
    /* border: solid red; */
}

.card5-label2-position {
    top: 196px; /* A' = 1517 * 470 / 3180 = 223.01px */
    left: 215px; /* B' = 1690 * 693 / 4680 = 249.93px */
    width: 84px; /* C' = 660 * 693 / 4680 = 97.71px */
    height: 16px; /* D' = 125 * 470 / 3180 = 18.49px */
    /* border: solid red; */
}

.card5-label3-position {
    top: 187.5px; /* A' = 1500 * 470 / 3180 = 221.70px */
    left: -17.2px; /* B' = -200 * 693 / 4680 = -29.73px */
    width: 195.2px; /* C' = 1650 * 693 / 4680 = 247.05px */
    height: 25px; /* D' = 200 * 470 / 3180 = 29.63px */
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card5-label4-position {
    top: 209px;
    left: 391px;
    width: 232.3px;
    height: 17px;
    transform: rotate(-90deg);
    color : grey;
    /* border: solid red; */
}

.card5-fixed-label1-position {
    top: 108.3px; /* A' = 840 * 470 / 3180 = 123.88px */
    left: 363px; /* B' = 2850 * 693 / 4680 = 423.09px */
    width: 58px; 
    height: 19px; 
    font-size: 10.3px;
    color: #980002;
    /* border: red solid; */
}

.card5-fixed-label2-position {
    top: 142px; /* A' = 1100 * 470 / 3180 = 161.94px */
    left: 408.5px; /* B' = 3200 * 693 / 4680 = 472.23px */
    width: 58px; 
    height: 19px; 
    font-size : 10.3px;
    color: #DF0000;
    /* border: red solid; */
}

.card5-fixed-label3-position {
    top: 206.4px; /* A' = 1610 * 470 / 3180 = 236.05px */
    left: 406.8px; /* B' = 3190 * 693 / 4680 = 468.98px */
    width: 58px; 
    height: 19px; 
    font-size: 10.3px;
    color : #F59527;
    /* border: red solid; */
}

.card5-fixed-label4-position {
    top: 250px; /* A' = 1950 * 470 / 3180 = 286.76px */
    left: 387px; /* B' = 3033 * 693 / 4680 = 449.87px */
    width: 58px; 
    height: 19px; 
    font-size : 10.3px;
    color : #003466;
    /* border: red solid; */
}

.card5-fixed-label5-position {
    top: 265px; /* A' = 2070 * 470 / 3180 = 304.70px */
    left: 313px; /* B' = 2450 * 693 / 4680 = 361.46px */
    width: 58px; 
    height: 19px; 
    font-size: 10.3px;
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label6-position {
    top: 299.3px; /* A' = 2360 * 470 / 3180 = 347.29px */
    left: 395.6px; /* B' = 3050 * 693 / 4680 = 449.02px */
    width: 43.8px; /* C' = 350 * 693 / 4680 = 51.84px */
    height: 13px; /* D' = 100 * 470 / 3180 = 14.81px */
    font-size: 10.3px;
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label7-position {
    top: 299.3px; /* A' = 2360 * 470 / 3180 = 347.29px */
    left: 344.8px; /* B' = 3365 * 693 / 4680 = 496.60px */
    width: 43.8px; /* C' = 350 * 693 / 4680 = 51.84px */
    height: 13px; /* D' = 100 * 470 / 3180 = 14.81px */
    font-size: 10.3px;
    color :#003466;
    /* border: red solid; */
}
.card5-fixed-label7-position {
    top: 298.3px; /* A' = 2360 * 470 / 3180 = 347.29px */
    left: 426.5px; /* B' = 3365 * 693 / 4680 = 496.60px */
    width: 43.8px; /* C' = 350 * 693 / 4680 = 51.84px */
    height: 13px; /* D' = 100 * 470 / 3180 = 14.81px */
    font-size: 10.3px;
    color: #003466;
    /* border: red solid; */
}

.card5-fixed-label8-position {
    top: 288.4px; /* A' = 2235 * 470 / 3180 = 329.75px */
    left: 412px; /* B' = 3235 * 693 / 4680 = 479.34px */
    width: 5px; /* C' = 50 * 693 / 4680 = 7.43px */
    height: 5px; /* D' = 50 * 470 / 3180 = 7.41px */
    font-size: 10.3px;
    /* border: red solid; */
}

.card5-fixed-label9-position {
    top: 288.4px; /* A' = 2405 * 470 / 3180 = 354.06px */
    left: 445.5px; /* B' = 3505 * 693 / 4680 = 497.03px */
    width: 5px; /* C' = 50 * 693 / 4680 = 7.43px */
    height: 5px; /* D' = 50 * 470 / 3180 = 7.41px */
    font-size: 10.3px;
    /* border: red solid; */
}

.dot-light {
  height: 10px;
  width: 10px;
  background-color: #00A9CF;
  border-radius: 50%;
  display: inline-block;
}
.dot-dark {
  height: 10px;
  width: 10px;
  background-color: #003466;
  border-radius: 50%;
  display: inline-block;
}


</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card5-label1-position {
    top: 954px;
    left: 1216.8px;
    width: 1357.2px;
    height: 254.4px;
    /* border: solid red; */
}

.card5-label2-position {
    top: 1517px;
    left: 1690px;
    width: 660px;
    height: 125px;
    /* border: solid red; */
}

.card5-label3-position {
    top: 1500px;
    left: -200px;
    width: 1650px;
    height: 200px;
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card5-label4-position {
    top: 1650px;
    left: 3000px;
    width: 1950px;
    height: 200px;
    transform: rotate(-90deg);
    /* border: solid red; */
}
.card5-fixed-label1-position {
    top: 840px;
    left: 2850px;
    width: 450px;
    height: 150px;
    font-size: 80px;
    /* border: red solid; */
    color: #980002;
}

.card5-fixed-label2-position {
    top: 1100px;
    left: 3200px;
    width: 450px;
    height: 150px;
    font-size : 80px;
    color: #DF0000;
    /* border: red solid; */
}

.card5-fixed-label3-position {
    top: 1610px;
    left: 3190px;
    width: 450px;
    height: 150px;
    font-size: 80px;
    color : #F59527;
    /* border: red solid; */
}
.card5-fixed-label4-position {
    top: 1950px;
    left: 3033px;
    width: 450px;
    height: 150px;
    font-size : 80px;
    color : #003466;
    /* border: red solid; */
}

.card5-fixed-label5-position {
    top: 2070px;
    left: 2450px;
    width: 450px;
    height: 150px;
    font-size: 80px;
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label6-position {
    top: 2360px;
    left: 3050px;
    width: 350px;
    height: 100px;
    font-size: 80px;
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label7-position {
    top: 2360px;
    left: 3365px;
    width: 350px;
    height: 100px;
    font-size: 80px;
    color :#003466;
    /* border: red solid; */
}
.card5-fixed-label8-position {
    top: 2235px;
    left: 3235px;
    width: 50px;
    height: 50px;
    font-size: 80px;
    /* border: red solid; */
}
.card5-fixed-label9-position {
    top: 2235px;
    left: 3505px;
    width: 50px;
    height: 50px;
    font-size: 80px;
    /* border: red solid; */
}
.dot-light {
  height: 50px;
  width: 50px;
  background-color: #00A9CF;
  border-radius: 50%;
  display: inline-block;
}
.dot-dark {
  height: 50px;
  width: 50px;
  background-color: #003466;
  border-radius: 50%;
  display: inline-block;
}
</style> -->