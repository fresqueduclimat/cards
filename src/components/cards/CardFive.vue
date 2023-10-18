<template>
    <CardBase :title="$t('V1C5L1')" :content="$t('V1C5L2')" :card-number="5" :background-front-image="'C5.png'">
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
            class="horizontal-center vertical-center label black label5 card5-label4-position">
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
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card5-label1-position {
    top: 140px; /* A' = 954 * 470 / 3180 = 140.35px */
    left: 181px; /* B' = 1216.8 * 693 / 4680 = 181.28px */
    width: 204px; /* C' = 1357.2 * 693 / 4680 = 204.18px */
    height: 38px; /* D' = 254.4 * 470 / 3180 = 37.53px */
    /* border: solid red; */
}

.card5-label2-position {
    top: 225px; /* A' = 1517 * 470 / 3180 = 223.01px */
    left: 249px; /* B' = 1690 * 693 / 4680 = 249.93px */
    width: 98px; /* C' = 660 * 693 / 4680 = 97.71px */
    height: 19px; /* D' = 125 * 470 / 3180 = 18.49px */
    /* border: solid red; */
}

.card5-label3-position {
    top: 218px; /* A' = 1500 * 470 / 3180 = 221.70px */
    left: -20px; /* B' = -200 * 693 / 4680 = -29.73px */
    width: 227px; /* C' = 1650 * 693 / 4680 = 247.05px */
    height: 29px; /* D' = 200 * 470 / 3180 = 29.63px */
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card5-label4-position {
    top: 243px;
    left: 455px;
    width: 270px;
    height: 20px;
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card5-fixed-label1-position {
    top: 126px; /* A' = 840 * 470 / 3180 = 123.88px */
    left: 422px; /* B' = 2850 * 693 / 4680 = 423.09px */
    width: 67px; /* C' = 450 * 693 / 4680 = 67.08px */
    height: 22px; /* D' = 150 * 470 / 3180 = 22.12px */
    font-size: 12px;
    color: #980002;
    /* border: red solid; */
}

.card5-fixed-label2-position {
    top: 165px; /* A' = 1100 * 470 / 3180 = 161.94px */
    left: 475px; /* B' = 3200 * 693 / 4680 = 472.23px */
    width: 67px; /* C' = 450 * 693 / 4680 = 67.08px */
    height: 20px; /* D' = 150 * 470 / 3180 = 22.12px */
    font-size : 12px;
    color: #DF0000;
    /* border: red solid; */
}

.card5-fixed-label3-position {
    top: 240px; /* A' = 1610 * 470 / 3180 = 236.05px */
    left: 473px; /* B' = 3190 * 693 / 4680 = 468.98px */
    width: 67px; /* C' = 450 * 693 / 4680 = 67.08px */
    height: 20px; /* D' = 150 * 470 / 3180 = 22.12px */
    font-size: 12px;
    color : #F59527;
    /* border: red solid; */
}

.card5-fixed-label4-position {
    top: 291px; /* A' = 1950 * 470 / 3180 = 286.76px */
    left: 450px; /* B' = 3033 * 693 / 4680 = 449.87px */
    width: 67px; /* C' = 450 * 693 / 4680 = 67.08px */
    height: 20px; /* D' = 150 * 470 / 3180 = 22.12px */
    font-size : 12px;
    color : #003466;
    /* border: red solid; */
}

.card5-fixed-label5-position {
    top: 308px; /* A' = 2070 * 470 / 3180 = 304.70px */
    left: 364px; /* B' = 2450 * 693 / 4680 = 361.46px */
    width: 67px; /* C' = 450 * 693 / 4680 = 67.08px */
    height: 20px; /* D' = 150 * 470 / 3180 = 22.12px */
    font-size: 12px;
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label6-position {
    top: 348px; /* A' = 2360 * 470 / 3180 = 347.29px */
    left: 460px; /* B' = 3050 * 693 / 4680 = 449.02px */
    width: 51px; /* C' = 350 * 693 / 4680 = 51.84px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    font-size: 12px;
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label7-position {
    top: 348px; /* A' = 2360 * 470 / 3180 = 347.29px */
    left: 401px; /* B' = 3365 * 693 / 4680 = 496.60px */
    width: 51px; /* C' = 350 * 693 / 4680 = 51.84px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    font-size: 12px;
    color :#003466;
    /* border: red solid; */
}
.card5-fixed-label7-position {
    top: 347px; /* A' = 2360 * 470 / 3180 = 347.29px */
    left: 496px; /* B' = 3365 * 693 / 4680 = 496.60px */
    width: 52px; /* C' = 350 * 693 / 4680 = 51.84px */
    height: 15px; /* D' = 100 * 470 / 3180 = 14.81px */
    font-size: 12px;
    color: #003466;
    /* border: red solid; */
}

.card5-fixed-label8-position {
    top: 333px; /* A' = 2235 * 470 / 3180 = 329.75px */
    left: 479px; /* B' = 3235 * 693 / 4680 = 479.34px */
    width: 7px; /* C' = 50 * 693 / 4680 = 7.43px */
    height: 7px; /* D' = 50 * 470 / 3180 = 7.41px */
    font-size: 12px;
    /* border: red solid; */
}

.card5-fixed-label9-position {
    top: 333px; /* A' = 2405 * 470 / 3180 = 354.06px */
    left: 518px; /* B' = 3505 * 693 / 4680 = 497.03px */
    width: 7px; /* C' = 50 * 693 / 4680 = 7.43px */
    height: 7px; /* D' = 50 * 470 / 3180 = 7.41px */
    font-size: 12px;
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