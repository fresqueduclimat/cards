<template>
    <CardBase :title="$t('V1C11L1')" :content="$t('V1C11L2')" :card-number="11" :background-front-image="'C11.png'" >
        <div id="card11-label1" class="horizontal-center vertical-center label card11-label1-position">
            <p id="card11-text1" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card11-fixed-label1" class="horizontal-center vertical-center label black card11-fixed-label1-position">
            <p id="card11-fixed-text1" class="font-small">280 ppm</p>
        </div>
        <div id="card11-fixed-label2" class="horizontal-center vertical-center label black card11-fixed-label2-position">
            <p id="card11-fixed-text2" class="font-small">1100 ppm</p>
        </div>
        <div id="card11-fixed-label3" class="horizontal-center vertical-center label black card11-fixed-label3-position">
            <p id="card11-fixed-text3" class="font-small">400 ppm</p>
        </div> 
        <div id="card11-fixed-label4" class="horizontal-center vertical-center label black card11-fixed-label4-position">
            <p id="card11-fixed-text4" class="font-small">415 ppm</p>
        </div> 
        <template v-slot:back-content>
            <div id="card11-back-label2" class="label white set-two">
                <p id="card11-back-text2">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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
.card11-label1-position {
    top: 114px; /* A' = 770 * 470 / 3180 = 113.88px, arrondi à 114px */
    left: 211px; /* B' = 1430 * 693 / 4680 = 210.75px, arrondi à 211px */
    width: 311px; /* C' = 2100 * 693 / 4680 = 310.71px, arrondi à 311px */
    height: 22px; /* D' = 150 * 470 / 3180 = 22.14px, arrondi à 22px */
    color: grey;
    /* border: solid red; */
}

.card11-fixed-label1-position {
    top: 348px; /* A' = 2355 * 470 / 3180 = 347.71px, arrondi à 348px */
    left: 185px; /* B' = 1250 * 693 / 4680 = 185.25px, arrondi à 185px */
    width: 98px; /* C' = 660 * 693 / 4680 = 97.93px, arrondi à 98px */
    height: 33px; /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: 20px;
}

.card11-fixed-label2-position {
    top: 147px; /* A' = 1000 * 470 / 3180 = 147.06px, arrondi à 147px */
    left: 437px; /* B' = 2956 * 693 / 4680 = 437.14px, arrondi à 437px */
    width: 112px; /* C' = 750 * 693 / 4680 = 111.18px, arrondi à 112px */
    height: 33px; /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: 20px;
}

.card11-fixed-label3-position {
    top: 348px; /* A' = 2355 * 470 / 3180 = 347.71px, arrondi à 348px */
    left: 477px; /* B' = 3220 * 693 / 4680 = 477.86px, arrondi à 477px */
    width: 113px; /* C' = 760 * 693 / 4680 = 112.71px, arrondi à 113px */
    height: 33px; /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: 20px;
}

.card11-fixed-label4-position {
    top: 348px; /* A' = 2355 * 470 / 3180 = 347.71px, arrondi à 348px */
    left: 321px; /* B' = 2170 * 693 / 4680 = 320.79px, arrondi à 321px */
    width: 98px; /* C' = 660 * 693 / 4680 = 97.93px, arrondi à 98px */
    height: 33px; /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: 20px;
}
</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card11-label1-position {
    top: 770px;
    left: 1430px;
    width: 2100px;
    height: 150px;
    color: grey;
    /* border: solid red; */
}
.card11-fixed-label1-position {
    top: 2355px;
    left: 1250px;
    width: 660px;
    height: 225px;
    /* border: solid red; */
    font-size : 130px;
}

.card11-fixed-label2-position {
    top: 1000px;
    left: 2956px;
    width: 750px;
    height: 225px;
    /* border: solid red; */
    font-size : 130px;
}

.card11-fixed-label3-position {
    top: 2355px;
    left: 3220px;
    width: 760px;
    height: 225px;
    /* border: solid red; */
    font-size : 130px;
}

.card11-fixed-label4-position {
    top: 2355px;
    left: 2170px;
    width: 660px;
    height: 225px;
    /* border: solid red; */
    font-size : 130px;
}
</style> -->