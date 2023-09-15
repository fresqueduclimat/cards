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

<style>
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
</style>