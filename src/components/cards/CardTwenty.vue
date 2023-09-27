<template>
    <CardBase :title="$t('V1C20L1')" :content="$t('V1C20L2')" :card-number="20" :background-front-image="'C20.png'">
        <div id="card20-label1" class="horizontal-center vertical-center label black card20-label1-position">
            <p id="card20-text1" class="font-small">{{ $t('V1C20L3') }}</p>
        </div>
        <div id="card20-label2" class="horizontal-center vertical-center label black card20-label2-position">
            <p id="card20-text2" class="font-small">{{ $t('V1C20L4') }}</p>
        </div>
        <div id="card20-label3"
            class="horizontal-center vertical-center label black label5 card20-label3-position">
            <p id="card20-text3" class="font-small">{{ $t('V1C20L5') }}</p>
        </div>
        <div id="card20-label4"
            class="horizontal-center vertical-center label black label5 card20-label4-position">
            <p id="card20-text4" class="font-small">{{ $t('V1C20L6') }}</p>
        </div>
        <div id="card20-label5"
            class="horizontal-center vertical-center label black label5 card20-label5-position">
            <p id="card20-text5" class="font-small">{{ $t('V1C20L7') }}</p>
        </div>
        <div id="card20-label6"
            class="horizontal-center vertical-center label black label5 card20-label6-position">
            <p id="card20-text6" class="font-small">{{ $t('V1C20L8') }}</p>
        </div>
        <template v-slot:back-content>
            <div id="card20-back-label1" class="label white set-three">
                <p id="card20-back-text1">{{ $t('V1C0L4') + ' ' + "3"}}</p>
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
.card20-label1-position {
    top: 200px;  /* A' = 1350 * 470 / 3180 = 199.70 (arrondi à 200) */
    left: 138px; /* B' = 750 * 693 / 4680 = 111.17 (arrondi à 138) */
    width: 152px; /* C' = 800 * 693 / 4680 = 118.40 (arrondi à 152) */
    height: 36px; /* D' = 250 * 470 / 3180 = 36.92 (arrondi à 36) */
}

.card20-label2-position {
    top: 177px;  /* A' = 1200 * 470 / 3180 = 176.84 (arrondi à 177) */
    left: 257px; /* B' = 1600 * 693 / 4680 = 237.78 (arrondi à 257) */
    width: 152px; /* C' = 800 * 693 / 4680 = 118.40 (arrondi à 152) */
    height: 36px; /* D' = 250 * 470 / 3180 = 36.92 (arrondi à 36) */
}

.card20-label3-position {
    top: 164px;  /* A' = 1100 * 470 / 3180 = 163.81 (arrondi à 164) */
    left: 478px; /* B' = 2900 * 693 / 4680 = 429.88 (arrondi à 478) */
    width: 152px; /* C' = 800 * 693 / 4680 = 118.40 (arrondi à 152) */
    height: 29px; /* D' = 200 * 470 / 3180 = 29.57 (arrondi à 29) */
}

.card20-label4-position {
    top: 123px;  /* A' = 800 * 470 / 3180 = 118.40 (arrondi à 123) */
    left: 562px; /* B' = 3600 * 693 / 4680 = 532.42 (arrondi à 562) */
    width: 152px; /* C' = 800 * 693 / 4680 = 118.40 (arrondi à 152) */
    height: 29px; /* D' = 200 * 470 / 3180 = 29.57 (arrondi à 29) */
}

.card20-label5-position {
    top: 347px;  /* A' = 2070 * 470 / 3180 = 306.70 (arrondi à 347) */
    left: 257px; /* B' = 1600 * 693 / 4680 = 237.78 (arrondi à 257) */
    width: 152px; /* C' = 800 * 693 / 4680 = 118.40 (arrondi à 152) */
    height: 29px; /* D' = 200 * 470 / 3180 = 29.57 (arrondi à 29) */
    transform: rotate(-24deg);
}

.card20-label6-position {
    top: 388px;  /* A' = 2300 * 470 / 3180 = 339.53 (arrondi à 388) */
    left: 562px; /* B' = 3600 * 693 / 4680 = 532.42 (arrondi à 562) */
    width: 152px; /* C' = 800 * 693 / 4680 = 118.40 (arrondi à 152) */
    height: 29px; /* D' = 200 * 470 / 3180 = 29.57 (arrondi à 29) */
}
</style>



<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card20-label1-position {
    top: 1350px;
    left: 750px;
    width: 800px;
    height: 250px;
    /* border: solid red; */
}

.card20-label2-position {
    top: 1200px;
    left: 1600px;
    width: 800px;
    height: 250px;
    /* border: solid red; */
}

.card20-label3-position {
    top: 1100px;
    left: 2900px;
    width: 800px;
    height: 200px;
    /* border: solid red; */
}

.card20-label4-position {
    top: 800px;
    left: 3600px;
    width: 800px;
    height: 200px;
    /* border: solid red; */
}

.card20-label5-position {
    top: 2070px;
    left: 1600px;
    width: 800px;
    height: 200px;
    transform: rotate(-24deg);
    /* border: solid red; */
}

.card20-label6-position {
    top: 2300px;
    left: 3600px;
    width: 800px;
    height: 200px;
    /* border: solid red; */
}
</style> -->