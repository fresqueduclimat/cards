<template>
    <CardBase :title="$t('V1C13L1')" :content="$t('V1C13L2')" :card-number="13" :background-front-image="'C13.png'">
        <div id="card13-label1" class="horizontal-center vertical-center label orange card13-label1-position">
            <p id="card13-text1" class="font-medium">{{ $t('V1C13L3') }}</p>
        </div>
        <div id="card13-label2" class="horizontal-center vertical-center label orange card13-label2-position">
            <p id="card13-text2" class="font-medium">{{ $t('V1C13L4') }}</p>
        </div>
        <div id="card13-label3" class="horizontal-center vertical-center label red card13-label3-position">
            <p id="card13-text3" class="font-medium">{{ $t('V1C13L5') }}</p>
        </div>
        <div id="card13-label4" class="horizontal-center vertical-center label red card13-label4-position">
            <p id="card13-text4" class="font-medium">{{ $t('V1C13L6') }}</p>
        </div>
        <div id="card13-fixed-label1" class="horizontal-center vertical-center label card13-fixed-label1-position">
            <p id="card13-fixed-text1" class="font-big">15°C</p>
        </div>
        <div id="card13-fixed-label2" class="horizontal-center vertical-center label card13-fixed-label2-position">
            <p id="card13-fixed-text2" class="font-big">-18°C</p>
        </div>
        <template v-slot:back-content>
            <div id="card13-back-label1" class="label white set-one">
                <p id="card13-back-text1">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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
.card13-label1-position {
    top: 164px;   /* A' = 1100 * 470 / 3180 = 163.81 (arrondi à 164) */
    left: 177px;  /* B' = 1200 * 693 / 4680 = 177.38 (arrondi à 177) */
    width: 103px; /* C' = 700 * 693 / 4680 = 102.64 (arrondi à 103) */
    height: 44px; /* D' = 300 * 470 / 3180 = 44.17 (arrondi à 44) */
}

.card13-label2-position {
    top: 252px;  /* A' = 1700 * 470 / 3180 = 251.97 (arrondi à 252) */
    left: 26px;  /* B' = 200 * 693 / 4680 = 26.32 (arrondi à 26) */
    width: 103px; /* C' = 700 * 693 / 4680 = 102.64 (arrondi à 103) */
    height: 44px; /* D' = 300 * 470 / 3180 = 44.17 (arrondi à 44) */
}

.card13-label3-position {
    top: 97px;   /* A' = 800 * 470 / 3180 = 96.97 (arrondi à 97) */
    left: 456px; /* B' = 3000 * 693 / 4680 = 455.81 (arrondi à 456) */
    width: 151px; /* C' = 1000 * 693 / 4680 = 150.94 (arrondi à 151) */
    height: 44px; /* D' = 300 * 470 / 3180 = 44.17 (arrondi à 44) */
}

.card13-label4-position {
    top: 252px;  /* A' = 1700 * 470 / 3180 = 251.97 (arrondi à 252) */
    left: 472px; /* B' = 3300 * 693 / 4680 = 471.78 (arrondi à 472) */
    width: 123px; /* C' = 800 * 693 / 4680 = 122.75 (arrondi à 123) */
    height: 44px; /* D' = 300 * 470 / 3180 = 44.17 (arrondi à 44) */
}

.card13-fixed-label1-position {
    top: 142px;  /* A' = 1260 * 470 / 3180 = 141.81 (arrondi à 142) */
    left: 176px; /* B' = 3700 * 693 / 4680 = 175.65 (arrondi à 176) */
    width: 56px; /* C' = 450 * 693 / 4680 = 66.42 (arrondi à 56) */
    height: 16px; /* D' = 150 * 470 / 3180 = 22.12 (arrondi à 16) */
    font-size: 156px;
    color: white;
}

.card13-fixed-label2-position {
    top: 262px;  /* A' = 2300 * 470 / 3180 = 261.69 (arrondi à 262) */
    left: 176px; /* B' = 3700 * 693 / 4680 = 175.65 (arrondi à 176) */
    width: 56px; /* C' = 450 * 693 / 4680 = 66.42 (arrondi à 56) */
    height: 16px; /* D' = 150 * 470 / 3180 = 22.12 (arrondi à 16) */
    font-size: 156px;
    color: white;
}
</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card13-label1-position {
    top: 1100px;
    left: 1200px;
    width: 700px;
    height: 300px;
    /* border: solid red; */
}

.card13-label2-position {
    top: 1700px;
    left: 200px;
    width: 700px;
    height: 300px;
    /* border: solid red; */
}

.card13-label3-position {
    top: 800px;
    left: 3000px;
    width: 1000px;
    height: 300px;
    /* border: solid red; */
}

.card13-label4-position {
    top: 1700px;
    left: 3300px;
    width: 800px;
    height: 300px;
    /* border: solid red; */
}
.card13-fixed-label1-position {
    top: 1260px;
    left: 3700px;
    width: 450px;
    height: 150px;
    font-size: 156px;
    color: white;
    /* border: red solid; */
}

.card13-fixed-label2-position {
    top: 2300px;
    left: 3700px;
    width: 450px;
    height: 150px;
    font-size: 156px;
    color: white;
    /* border: red solid; */
}
</style> -->
