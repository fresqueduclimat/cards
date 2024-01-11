<template>
    <CardBase :title="$t('V1C11L1')" :content="$t('V1C11L2')" :card-number="11" :background-front-image="`C11.${imageType}`" >
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
            <p id="card11-fixed-text4" class="font-small">420 ppm</p>
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
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || 'png',
        };
    },
};
</script>
<style>
.card11-label1-position {
    top: 98px; 
    left: 181.5px; 
    width: 267.5px; 
    height: 19px;
    color: grey;
    /* border: solid red; */
}

.card11-fixed-label1-position {
    top: 302px; /* A' = 2355 * 470 / 3180 = 347.71px, arrondi à 348px */
    left: 159px; /* B' = 1250 * 693 / 4680 = 185.25px, arrondi à 185px */
    width: 84.2px; /* C' = 660 * 693 / 4680 = 97.93px, arrondi à 98px */
    height: 28.4px; /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: 17px;
}

.card11-fixed-label2-position {
    top: 128.4px;
    left: 378px;
    width: 96px; /* C' = 750 * 693 / 4680 = 111.18px, arrondi à 112px */
    height: 28.3px; /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: 17px;
}

.card11-fixed-label3-position {
    top: 302px; /* A' = 2355 * 470 / 3180 = 347.71px, arrondi à 348px */
    left: 411px; /* B' = 3220 * 693 / 4680 = 477.86px, arrondi à 477px */
    width: 97px; /* C' = 760 * 693 / 4680 = 112.71px, arrondi à 113px */
    height: 28.3px; /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: 17px;
}

.card11-fixed-label4-position {
    top: 302px; /* A' = 2355 * 470 / 3180 = 347.71px, arrondi à 348px */
    left: 277px; /* B' = 2170 * 693 / 4680 = 320.79px, arrondi à 321px */
    width: 84.2px; /* C' = 660 * 693 / 4680 = 97.93px, arrondi à 98px */
    height: 28.3px; /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: 17px;
}
</style>