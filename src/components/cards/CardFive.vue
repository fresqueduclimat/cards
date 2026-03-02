<template>
    <CardBase :title="$t('V3C5L0')" :content="$t('V3C5L1')" :card-number="5" :card-number-front="5" :background-front-image="`C5.${imageType}`">
        <template v-slot:back-content>
            <div id="card5-back-label1" class="label set-one">
                <p id="card5-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "1"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-one">

                <p class="label font-medium card-number black">5</p>
            </div>
            <div class="label logo-icon-container-one">
                <div class="logo-icon"></div>
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
    top: calc(120px * var(--scale-factor)); 
    left: calc(155px * var(--scale-factor)); 
    width: calc(175.4px * var(--scale-factor));
    height: calc(32.7px * var(--scale-factor));
    /* border: solid red; */
}

.card5-label2-position {
    top: calc(195px * var(--scale-factor)); /* A' = 1517 * 470 / 3180 = 223.01px */
    left: calc(215px * var(--scale-factor)); /* B' = 1690 * 693 / 4680 = 249.93px */
    width: calc(84px * var(--scale-factor)); /* C' = 660 * 693 / 4680 = 97.71px */
    height: calc(16px * var(--scale-factor)); /* D' = 125 * 470 / 3180 = 18.49px */
    /* border: solid red; */
}

.card5-label3-position {
    top: calc(187.5px * var(--scale-factor)); /* A' = 1500 * 470 / 3180 = 221.70px */
    left: calc(-17.2px * var(--scale-factor)); /* B' = -200 * 693 / 4680 = -29.73px */
    width: calc(195.2px * var(--scale-factor)); /* C' = 1650 * 693 / 4680 = 247.05px */
    height: calc(25px * var(--scale-factor)); /* D' = 200 * 470 / 3180 = 29.63px */
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card5-label4-position {
    top: calc(209px * var(--scale-factor));
    left: calc(391px * var(--scale-factor));
    width: calc(232.3px * var(--scale-factor));
    height: calc(17px * var(--scale-factor));
    transform: rotate(-90deg);
    color : grey;
    /* border: solid red; */
}

.card5-fixed-label1-position {
    top: calc(108.3px * var(--scale-factor)); /* A' = 840 * 470 / 3180 = 123.88px */
    left: calc(365px * var(--scale-factor)); /* B' = 2850 * 693 / 4680 = 423.09px */
    width: calc(58px * var(--scale-factor)); 
    height: calc(19px * var(--scale-factor)); 
    font-size: calc(10.3px * var(--scale-factor));
    color: #980002;
    /* border: red solid; */
}

.card5-fixed-label2-position {
    top: calc(142px * var(--scale-factor)); /* A' = 1100 * 470 / 3180 = 161.94px */
    left: calc(410.5px * var(--scale-factor)); /* B' = 3200 * 693 / 4680 = 472.23px */
    width: calc(58px * var(--scale-factor)); 
    height: calc(19px * var(--scale-factor)); 
    font-size: calc(10.3px * var(--scale-factor));
    color: #DF0000;
    /* border: red solid; */
}

.card5-fixed-label3-position {
    top: calc(206.4px * var(--scale-factor)); /* A' = 1610 * 470 / 3180 = 236.05px */
    left: calc(410.8px * var(--scale-factor)); /* B' = 3190 * 693 / 4680 = 468.98px */
    width: calc(58px * var(--scale-factor)); 
    height: calc(19px * var(--scale-factor)); 
    font-size: calc(10.3px * var(--scale-factor));
    color : #F59527;
    /* border: red solid; */
}

.card5-fixed-label4-position {
    top: calc(250px * var(--scale-factor)); /* A' = 1950 * 470 / 3180 = 286.76px */
    left: calc(388px * var(--scale-factor)); /* B' = 3033 * 693 / 4680 = 449.87px */
    width: calc(58px * var(--scale-factor)); 
    height: calc(19px * var(--scale-factor)); 
    font-size: calc(10.3px * var(--scale-factor));
    color : #003466;
    /* border: red solid; */
}

.card5-fixed-label5-position {
    top: calc(265px * var(--scale-factor)); /* A' = 2070 * 470 / 3180 = 304.70px */
    left: calc(313px * var(--scale-factor)); /* B' = 2450 * 693 / 4680 = 361.46px */
    width: calc(58px * var(--scale-factor)); 
    height: calc(19px * var(--scale-factor)); 
    font-size: calc(10.3px * var(--scale-factor));
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label6-position {
    top: calc(299.3px * var(--scale-factor)); /* A' = 2360 * 470 / 3180 = 347.29px */
    left: calc(395.6px * var(--scale-factor)); /* B' = 3050 * 693 / 4680 = 449.02px */
    width: calc(43.8px * var(--scale-factor)); /* C' = 350 * 693 / 4680 = 51.84px */
    height: calc(13px * var(--scale-factor)); /* D' = 100 * 470 / 3180 = 14.81px */
    font-size: calc(10.3px * var(--scale-factor));
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label7-position {
    top: calc(299.3px * var(--scale-factor)); /* A' = 2360 * 470 / 3180 = 347.29px */
    left: calc(344.8px * var(--scale-factor)); /* B' = 3365 * 693 / 4680 = 496.60px */
    width: calc(43.8px * var(--scale-factor)); /* C' = 350 * 693 / 4680 = 51.84px */
    height: calc(13px * var(--scale-factor)); /* D' = 100 * 470 / 3180 = 14.81px */
    font-size: calc(10.3px * var(--scale-factor));
    color :#003466;
    /* border: red solid; */
}
.card5-fixed-label7-position {
    top: calc(298.3px * var(--scale-factor)); /* A' = 2360 * 470 / 3180 = 347.29px */
    left: calc(426.5px * var(--scale-factor)); /* B' = 3365 * 693 / 4680 = 496.60px */
    width: calc(43.8px * var(--scale-factor)); /* C' = 350 * 693 / 4680 = 51.84px */
    height: calc(13px * var(--scale-factor)); /* D' = 100 * 470 / 3180 = 14.81px */
    font-size: calc(10.3px * var(--scale-factor));
    color: #003466;
    /* border: red solid; */
}

.card5-fixed-label8-position {
    top: calc(288.4px * var(--scale-factor)); /* A' = 2235 * 470 / 3180 = 329.75px */
    left: calc(412px * var(--scale-factor)); /* B' = 3235 * 693 / 4680 = 479.34px */
    width: calc(5px * var(--scale-factor)); /* C' = 50 * 693 / 4680 = 7.43px */
    height: calc(5px * var(--scale-factor)); /* D' = 50 * 470 / 3180 = 7.41px */
    font-size: calc(10.3px * var(--scale-factor));
    /* border: red solid; */
}

.card5-fixed-label9-position {
    top: calc(288.4px * var(--scale-factor)); /* A' = 2405 * 470 / 3180 = 354.06px */
    left: calc(445.5px * var(--scale-factor)); /* B' = 3505 * 693 / 4680 = 497.03px */
    width: calc(5px * var(--scale-factor)); /* C' = 50 * 693 / 4680 = 7.43px */
    height: calc(5px * var(--scale-factor)); /* D' = 50 * 470 / 3180 = 7.41px */
    font-size: calc(10.3px * var(--scale-factor));
    /* border: red solid; */
}

.dot-light {
  height: calc(10px * var(--scale-factor));
  width: calc(10px * var(--scale-factor));
  background-color: #00A9CF;
  border-radius: 50%;
  display: inline-block;
}
.dot-dark {
  height: calc(10px * var(--scale-factor));
  width: calc(10px * var(--scale-factor));
  background-color: #003466;
  border-radius: 50%;
  display: inline-block;
}


</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card5-label1-position {
    top: calc(954px * var(--scale-factor));
    left: calc(1216.8px * var(--scale-factor));
    width: calc(1357.2px * var(--scale-factor));
    height: calc(254.4px * var(--scale-factor));
    /* border: solid red; */
}

.card5-label2-position {
    top: calc(1517px * var(--scale-factor));
    left: calc(1690px * var(--scale-factor));
    width: calc(660px * var(--scale-factor));
    height: calc(125px * var(--scale-factor));
    /* border: solid red; */
}

.card5-label3-position {
    top: calc(1500px * var(--scale-factor));
    left: calc(-200px * var(--scale-factor));
    width: calc(1650px * var(--scale-factor));
    height: calc(200px * var(--scale-factor));
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card5-label4-position {
    top: calc(1650px * var(--scale-factor));
    left: calc(3000px * var(--scale-factor));
    width: calc(1950px * var(--scale-factor));
    height: calc(200px * var(--scale-factor));
    transform: rotate(-90deg);
    /* border: solid red; */
}
.card5-fixed-label1-position {
    top: calc(840px * var(--scale-factor));
    left: calc(2850px * var(--scale-factor));
    width: calc(450px * var(--scale-factor));
    height: calc(150px * var(--scale-factor));
    font-size: calc(80px * var(--scale-factor));
    /* border: red solid; */
    color: #980002;
}

.card5-fixed-label2-position {
    top: calc(1100px * var(--scale-factor));
    left: calc(3200px * var(--scale-factor));
    width: calc(450px * var(--scale-factor));
    height: calc(150px * var(--scale-factor));
    font-size: calc(80px * var(--scale-factor));
    color: #DF0000;
    /* border: red solid; */
}

.card5-fixed-label3-position {
    top: calc(1610px * var(--scale-factor));
    left: calc(3190px * var(--scale-factor));
    width: calc(450px * var(--scale-factor));
    height: calc(150px * var(--scale-factor));
    font-size: calc(80px * var(--scale-factor));
    color : #F59527;
    /* border: red solid; */
}
.card5-fixed-label4-position {
    top: calc(1950px * var(--scale-factor));
    left: calc(3033px * var(--scale-factor));
    width: calc(450px * var(--scale-factor));
    height: calc(150px * var(--scale-factor));
    font-size: calc(80px * var(--scale-factor));
    color : #003466;
    /* border: red solid; */
}

.card5-fixed-label5-position {
    top: calc(2070px * var(--scale-factor));
    left: calc(2450px * var(--scale-factor));
    width: calc(450px * var(--scale-factor));
    height: calc(150px * var(--scale-factor));
    font-size: calc(80px * var(--scale-factor));
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label6-position {
    top: calc(2360px * var(--scale-factor));
    left: calc(3050px * var(--scale-factor));
    width: calc(350px * var(--scale-factor));
    height: calc(100px * var(--scale-factor));
    font-size: calc(80px * var(--scale-factor));
    color :#00A9CF;
    /* border: red solid; */
}

.card5-fixed-label7-position {
    top: calc(2360px * var(--scale-factor));
    left: calc(3365px * var(--scale-factor));
    width: calc(350px * var(--scale-factor));
    height: calc(100px * var(--scale-factor));
    font-size: calc(80px * var(--scale-factor));
    color :#003466;
    /* border: red solid; */
}
.card5-fixed-label8-position {
    top: calc(2235px * var(--scale-factor));
    left: calc(3235px * var(--scale-factor));
    width: calc(50px * var(--scale-factor));
    height: calc(50px * var(--scale-factor));
    font-size: calc(80px * var(--scale-factor));
    /* border: red solid; */
}
.card5-fixed-label9-position {
    top: calc(2235px * var(--scale-factor));
    left: calc(3505px * var(--scale-factor));
    width: calc(50px * var(--scale-factor));
    height: calc(50px * var(--scale-factor));
    font-size: calc(80px * var(--scale-factor));
    /* border: red solid; */
}
.dot-light {
  height: calc(50px * var(--scale-factor));
  width: calc(50px * var(--scale-factor));
  background-color: #00A9CF;
  border-radius: 50%;
  display: inline-block;
}
.dot-dark {
  height: calc(50px * var(--scale-factor));
  width: calc(50px * var(--scale-factor));
  background-color: #003466;
  border-radius: 50%;
  display: inline-block;
}
</style> -->