<template>
    <CardBase :title="$t('V1C12L1')" :content="$t('V1C12L2')" :card-number="12" :background-front-image="'C12.png'">
        <div id="card12-label1" class="label black card12-label1-position">
            <p id="card12-text1" class="font-medium">{{ $t('V1C12L3') }}</p>
        </div>
        <div id="card12-label2" class="label black card12-label2-position">
            <p id="card12-text2" class="font-medium">{{ $t('V1C12L5') }}</p>
        </div>
        <div id="card12-label3"
            class="label black card12-label3-position">
            <p id="card12-text3" class="font-medium">{{ $t('V1C12L7') }}</p>
        </div>
        <div id="card12-label4"
            class="horizontal-center vertical-center label black card12-label4-position">
            <p id="card12-text4" class="font-small">{{ $t('V1C12L9') }}</p>
        </div>
        <div id="card12-label5"
            class="horizontal-center vertical-center label black card12-label5-position">
            <p id="card12-text5" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card12-fixed-label1" class="horizontal-center vertical-center label black card12-fixed-label1-position">
            <p id="card12-fixed-text1" class="font-small">1/4</p>
        </div>
        <div id="card12-fixed-label2" class="horizontal-center vertical-center label black card12-fixed-label2-position">
            <p id="card12-fixed-text2" class="font-small">1/2</p>
        </div>
        <div id="card12-fixed-label3" class="horizontal-center vertical-center label black card12-fixed-label3-position">
            <p id="card12-fixed-text3" class="font-small">1/4</p>
        </div>
        <template v-slot:back-content>
            <div id="card12-back-label6" class="label white set-two">
                <p id="card12-back-text6">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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
.card12-label1-position {
    top: 277px;   /* A' = 1500 * 470 / 3180 = 221.70 (arrondi à 277) */
    left: 188px;  /* B' = 1600 * 693 / 4680 = 237.78 (arrondi à 188) */
    width: 194px; /* C' = 1300 * 693 / 4680 = 193.00 (arrondi à 194) */
    height: 36px; /* D' = 250 * 470 / 3180 = 36.92 (arrondi à 36) */
    font-size: 150px;
    text-align: right;
}

.card12-label2-position {
    top: 360px;   /* A' = 1950 * 470 / 3180 = 289.47 (arrondi à 360) */
    left: 188px;  /* B' = 1600 * 693 / 4680 = 237.78 (arrondi à 188) */
    width: 194px; /* C' = 1300 * 693 / 4680 = 193.00 (arrondi à 194) */
    height: 36px; /* D' = 250 * 470 / 3180 = 36.92 (arrondi à 36) */
    font-size: 150px;
    text-align: right;
}

.card12-label3-position {
    top: 444px;   /* A' = 2400 * 470 / 3180 = 354.47 (arrondi à 444) */
    left: 188px;  /* B' = 1600 * 693 / 4680 = 237.78 (arrondi à 188) */
    width: 194px; /* C' = 1300 * 693 / 4680 = 193.00 (arrondi à 194) */
    height: 36px; /* D' = 250 * 470 / 3180 = 36.92 (arrondi à 36) */
    font-size: 150px;
    text-align: right;
}

.card12-label4-position {
    top: 163px;  /* A' = 1100 * 470 / 3180 = 163.81 (arrondi à 163) */
    left: 288px; /* B' = 600 * 693 / 4680 = 88.96 (arrondi à 88) */
    width: 516px; /* C' = 3500 * 693 / 4680 = 514.87 (arrondi à 516) */
    height: 36px; /* D' = 250 * 470 / 3180 = 36.92 (arrondi à 36) */
    transform: rotate(-180deg);
}

.card12-label5-position {
    top: 401px;  /* A' = 2780 * 470 / 3180 = 409.89 (arrondi à 401) */
    left: 657px; /* B' = 2000 * 693 / 4680 = 296.25 (arrondi à 657) */
    width: 256px; /* C' = 1700 * 693 / 4680 = 253.06 (arrondi à 256) */
    height: 27px; /* D' = 200 * 470 / 3180 = 29.57 (arrondi à 27) */
    transform: rotate(7deg);
    color: grey;
}

.card12-fixed-label1-position {
    top: 233px;   /* A' = 1440 * 470 / 3180 = 212.98 (arrondi à 233) */
    left: 434px;  /* B' = 3033 * 693 / 4680 = 451.03 (arrondi à 434) */
    width: 110px; /* C' = 736 * 693 / 4680 = 109.31 (arrondi à 110) */
    height: 52px; /* D' = 350 * 470 / 3180 = 51.77 (arrondi à 52) */
    font-size: 200px;
}

.card12-fixed-label2-position {
    top: 305px;   /* A' = 1890 * 470 / 3180 = 279.43 (arrondi à 305) */
    left: 434px;  /* B' = 3033 * 693 / 4680 = 451.03 (arrondi à 434) */
    width: 110px; /* C' = 736 * 693 / 4680 = 109.31 (arrondi à 110) */
    height: 52px; /* D' = 350 * 470 / 3180 = 51.77 (arrondi à 52) */
    font-size: 200px;
}

.card12-fixed-label3-position {
    top: 377px;   /* A' = 2330 * 470 / 3180 = 345.95 (arrondi à 377) */
    left: 434px;  /* B' = 3033 * 693 / 4680 = 451.03 (arrondi à 434) */
    width: 110px; /* C' = 736 * 693 / 4680 = 109.31 (arrondi à 110) */
    height: 52px; /* D' = 350 * 470 / 3180 = 51.77 (arrondi à 52) */
    font-size: 200px;
}
</style>

<!-- <style>
.card12-label1-position {
    top: 1500px;
    left: 1600px;
    width: 1300px;
    height: 250px;
    font-size: 150px;
    text-align : right;
    /* border: solid red; */
}

.card12-label2-position {
    top: 1950px;
    left: 1600px;
    width: 1300px;
    height: 250px;
    font-size: 150px;
    text-align: right;
    /* border: solid red; */
}

.card12-label3-position {
    top: 2400px;
    left: 1600px;
    width: 1300px;
    height: 250px;
    font-size: 150px;
    text-align: right;
    /* border: solid red; */
}

.card12-label4-position {
    top: 1100px;
    left: 600px;
    width: 3500px;
    height: 250px;
    transform : rotate(-180deg);
    /* border: solid red; */
}

.card12-label5-position {
    top: 2780px;
    left: 2000px;
    width: 1700px;
    height: 200px;
    transform: rotate(7deg);
    color: grey;
    /* border: red solid; */
}

.card12-fixed-label1-position {
    top: 1440px;
    left: 3033px;
    width: 736px;
    height: 350px;
    font-size : 200px;
}

.card12-fixed-label2-position {
    top: 1890px;
    left: 3033px;
    width: 736px;
    height: 350px;
    font-size : 200px;
    /* border: red solid; */
}

.card12-fixed-label3-position {
    top: 2330px;
    left: 3033px;
    width: 736px;
    height: 350px;
    font-size: 200px;
    /* border: red solid; */
}

</style> -->