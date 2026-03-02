<template>
    <CardBase :title="$t('V3C13L0')" :content="$t('V3C13L1')" :card-number="13" :card-number-front="18" :background-front-image="`C13.${imageType}`">
        <div id="card13-label1" class="horizontal-center label black card13-label1-position">
            <p id="card13-text1" class="font-small">{{ $t('V3C13L2') }}</p>
        </div>
        <div id="card13-label2" class="horizontal-center label black card13-label2-position">
            <p id="card13-text2" class="font-small">{{ $t('V3C13L3') }}</p>
        </div>
        <div id="card13-label3" class="horizontal-center label black card13-label3-position">
            <p id="card13-text3" class="font-small">{{ $t('V3C13L4') }}</p>
        </div>
        <div id="card13-label4" class="horizontal-center label black card13-label4-position">
            <p id="card13-text4" class="font-small">{{ $t('V3C13L5') }}</p>
        </div>
        <div id="card13-label5" class="horizontal-center label black card13-label5-position">
            <p id="card13-text5" class="font-small">{{ $t('V3C13L6') }}</p>
        </div>
        <template v-slot:back-content>
            <div id="card13-back-label1" class="label set-three">
                <p id="card13-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "3"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-three">

                <p class="label font-medium card-number black">18</p>
            </div>
            <div class="label logo-icon-container-three">
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
.card13-label1-position {
    top: calc(107px * var(--scale-factor));
    left: calc(52px * var(--scale-factor));
    width: calc(105px * var(--scale-factor));
    height: calc(20px * var(--scale-factor));
    /* font-size: calc(68px * var(--scale-factor)); */
    text-align: right;
    /* border: solid red 0.5px; */
}

.card13-label1-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
}

.card13-label2-position {
    top: calc(247px * var(--scale-factor));
    left: calc(25px * var(--scale-factor));
    width: calc(105px * var(--scale-factor));
    height: calc(20px * var(--scale-factor));
    text-align: right;
    /* border: solid red 0.5px; */
}

.card13-label2-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
}

.card13-label3-position {
    top: calc(286px * var(--scale-factor));
    left: calc(164px * var(--scale-factor));
    width: calc(105px * var(--scale-factor));
    height: calc(20px * var(--scale-factor));
    text-align: right;
    /* border: solid red 0.5px; */
}

.card13-label3-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
;
}

.card13-label4-position {
    top: calc(189px * var(--scale-factor));
    left: calc(210px * var(--scale-factor));
    width: calc(105px * var(--scale-factor));
    height: calc(20px * var(--scale-factor));
    /* border: solid red 0.5px; */
}

.card13-label4-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
;
}

.card13-label5-position {
    top: calc(84px * var(--scale-factor));
    left: calc(242px * var(--scale-factor));
    width: calc(105px * var(--scale-factor));
    height: calc(20px * var(--scale-factor));
    /* border: solid red 0.5px; */
}

.card13-label5-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
;
}
</style>
