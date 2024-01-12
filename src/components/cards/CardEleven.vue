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
    top: calc(98px * var(--scale-factor)); 
    left: calc(181.5px * var(--scale-factor)); 
    width: calc(267.5px * var(--scale-factor)); 
    height: calc(19px * var(--scale-factor));
    color: grey;
    /* border: solid red; */
}

.card11-fixed-label1-position {
    top: calc(302px * var(--scale-factor)); /* A' = 2355 * 470 / 3180 = 347.71px, arrondi à 348px */
    left: calc(159px * var(--scale-factor)); /* B' = 1250 * 693 / 4680 = 185.25px, arrondi à 185px */
    width: calc(84.2px * var(--scale-factor)); /* C' = 660 * 693 / 4680 = 97.93px, arrondi à 98px */
    height: calc(28.4px * var(--scale-factor)); /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: calc(17px * var(--scale-factor));
}

.card11-fixed-label2-position {
    top: calc(128.4px * var(--scale-factor));
    left: calc(378px * var(--scale-factor));
    width: calc(96px * var(--scale-factor)); /* C' = 750 * 693 / 4680 = 111.18px, arrondi à 112px */
    height: calc(28.3px * var(--scale-factor)); /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: calc(17px * var(--scale-factor));
}

.card11-fixed-label3-position {
    top: calc(302px * var(--scale-factor)); /* A' = 2355 * 470 / 3180 = 347.71px, arrondi à 348px */
    left: calc(411px * var(--scale-factor)); /* B' = 3220 * 693 / 4680 = 477.86px, arrondi à 477px */
    width: calc(97px * var(--scale-factor)); /* C' = 760 * 693 / 4680 = 112.71px, arrondi à 113px */
    height: calc(28.3px * var(--scale-factor)); /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: calc(17px * var(--scale-factor));
}

.card11-fixed-label4-position {
    top: calc(302px * var(--scale-factor)); /* A' = 2355 * 470 / 3180 = 347.71px, arrondi à 348px */
    left: calc(277px * var(--scale-factor)); /* B' = 2170 * 693 / 4680 = 320.79px, arrondi à 321px */
    width: calc(84.2px * var(--scale-factor)); /* C' = 660 * 693 / 4680 = 97.93px, arrondi à 98px */
    height: calc(28.3px * var(--scale-factor)); /* D' = 225 * 470 / 3180 = 33.21px, arrondi à 33px */
    /* border: solid red; */
    font-size: calc(17px * var(--scale-factor));
}
</style>