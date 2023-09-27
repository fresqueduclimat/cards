<template>
    <CardBase :title="$t('V1C21L1')" :content="$t('V1C21L2')" :card-number="21" :background-front-image="'C21.png'"> 
        <div id="card21-label1" class="horizontal-center label black card21-label1-position">
            <p id="card21-text1" class="font-medium">{{ $t('V1C21L6') }}</p>
        </div>
        <div id="card21-fixed-label1" class="horizontal-center vertical-center label black card21-fixed-label1-position">
            <p id="card21-fixed-text1" class="font-small">+ 1,2°C</p>
        </div>
        <div id="card21-fixed-label2" class="horizontal-center vertical-center label black card21-fixed-label2-position">
            <p id="card21-fixed-text2" class="font-small">+ 5°C</p>
        </div>
        <div id="card21-fixed-label3" class="horizontal-center vertical-center label black card21-fixed-label3-position">
            <p id="card21-fixed-text3" class="font-small">+ 1,5°C</p>
        </div>
        <template v-slot:back-content>
            <div id="card21-back-label2" class="label white set-one">
                <p id="card21-back-text2">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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
.card21-label1-position {
    top: 116px;  /* A' = 790 * 470 / 3180 = 115.93 (arrondi à 116) */
    left: 310px; /* B' = 2100 * 693 / 4680 = 310.39 (arrondi à 310) */
    width: 257px; /* C' = 2200 * 693 / 4680 = 256.97 (arrondi à 257) */
    height: 36px; /* D' = 300 * 470 / 3180 = 44.17 (arrondi à 36) */
    text-align: right;
    justify-content: right;
}

.card21-fixed-label1-position {
    top: 151px;  /* A' = 1030 * 470 / 3180 = 150.98 (arrondi à 151) */
    left: 55px;  /* B' = 365 * 693 / 4680 = 54.10 (arrondi à 55) */
    width: 131px; /* C' = 890 * 693 / 4680 = 130.89 (arrondi à 131) */
    height: 36px; /* D' = 300 * 470 / 3180 = 44.17 (arrondi à 36) */
    border: solid black 20px;
    background-color: white;
    border-radius: 15px;
    font-size: 200px;
}

.card21-fixed-label2-position {
    top: 176px;  /* A' = 1215 * 470 / 3180 = 175.92 (arrondi à 176) */
    left: 892px; /* B' = 2630 * 693 / 4680 = 391.11 (arrondi à 892) */
    width: 128px; /* C' = 830 * 693 / 4680 = 123.06 (arrondi à 128) */
    height: 34px; /* D' = 290 * 470 / 3180 = 42.75 (arrondi à 34) */
    border: solid red 20px;
    background-color: white;
    border-radius: 15px;
    font-size: 200px;
}

.card21-fixed-label3-position {
    top: 330px;  /* A' = 2290 * 470 / 3180 = 338.82 (arrondi à 330) */
    left: 890px; /* B' = 2620 * 693 / 4680 = 389.88 (arrondi à 890) */
    width: 127px; /* C' = 850 * 693 / 4680 = 126.09 (arrondi à 127) */
    height: 36px; /* D' = 300 * 470 / 3180 = 44.17 (arrondi à 36) */
    border: solid lightblue 20px;
    background-color: white;
    border-radius: 15px;
    font-size: 200px;
}
</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card21-label1-position {
    top: 790px;
    left: 2100px;
    width: 2200px;
    height: 300px;
    text-align : right;
    justify-content: right;
    /* border: solid red; */
}

.card21-fixed-label1-position {
    top: 1030px;
    left: 365px;
    width: 890px;
    height: 300px;
    border: solid black 20px;
    background-color: white;
    border-radius: 15px;
    font-size : 200px;
}

.card21-fixed-label2-position {
    top: 1215px;
    left: 2630px;
    width: 830px;
    height: 290px;
    border: solid red 20px;
    background-color: white;
    border-radius: 15px;
    font-size : 200px;
}

.card21-fixed-label3-position {
    top: 2290px;
    left: 2620px;
    width: 850px;
    height: 300px;
    border: solid lightblue 20px;
    background-color: white;
    border-radius: 15px;
    font-size: 200px;
}
</style> -->