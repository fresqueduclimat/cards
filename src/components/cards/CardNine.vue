<template>
    <CardBase :title="$t('V3C9L0')" :content="$t('V3C9L1')" :card-number="9" :card-number-front="14" :background-front-image="`C9.${imageType}`">
        <div id="card9-label1" class="horizontal-center label black card9-label1-position">
            <p id="card9-text1" class="font-small">{{ $t('V3C9L2') }}</p>
        </div>
        <div id="card9-label2" class="horizontal-center label black card9-label2-position">
            <p id="card9-text2" class="font-small">{{ $t('V3C9L3') }}</p>
        </div>
        <div id="card9-label3" class="horizontal-center label white card9-label3-position">
            <p id="card9-text3" class="font-small">{{ $t('V3C9L4') }}</p>
        </div>
        <div id="card9-label4" class="horizontal-center label white card9-label4-position">
            <p id="card9-text4" class="font-small">{{ $t('V3C9L5') }}</p>
        </div>
        <div id="card9-label5" class="horizontal-center label white card9-label5-position">
            <p id="card9-text5" class="font-small">{{ $t('V3C9L6') }}</p>
        </div>
        <div id="card9-label6" class="horizontal-center label white card9-label6-position">
            <p id="card9-text6" class="font-small">{{ $t('V3C9L7') }}</p>
        </div>
        <template v-slot:back-content> 
            <div id="card9-back-label1" class="label set-two">
                <p id="card9-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "2"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-two">

                <p class="label font-medium card-number black">14</p>
            </div>
            <div class="label logo-icon-container-two">
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

<style>

.card9-label1-position {
    top: calc(196px * var(--scale-factor));
    left: calc(90px * var(--scale-factor));
    width: calc(100px * var(--scale-factor));
    height: calc(50px * var(--scale-factor));
    justify-content: right;
    font-weight: 900;
    font-size: 35px;
    /* border: solid red; */
}

.card9-label1-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    /* border: solid red; */
}

.card9-label2-position {
    top: calc(235px * var(--scale-factor));
    left: calc(97px * var(--scale-factor));
    width: calc(94px * var(--scale-factor));
    height: calc(25px * var(--scale-factor));
    justify-content: right;
    /* border: solid red; */
}

.card9-label2-position p {
    font-weight: 500;
    font-family: "Urbanist", sans-serif;
    /* border: solid red; */
}

.card9-label3-position {
    top: calc(160px * var(--scale-factor));
    left: calc(200px * var(--scale-factor));
    width: calc(70px * var(--scale-factor));
    height: calc(40px * var(--scale-factor));
    justify-content: left;
    font-size: 35px;
    /* border: solid red; */
}

.card9-label3-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    /* border: solid red; */
}

.card9-label4-position {
    top: calc(194px * var(--scale-factor));
    left: calc(200px * var(--scale-factor));
    width: calc(70px * var(--scale-factor));
    height: calc(20px * var(--scale-factor));
    justify-content: left;
    /* border: solid red; */
    font-size: 16px;
}

.card9-label4-position p {
    font-weight: 400;
    font-family: "Urbanist", sans-serif;
    /* border: solid red; */
}

.card9-label5-position {
    top: calc(245px * var(--scale-factor));
    left: calc(200px * var(--scale-factor));
    width: calc(70px * var(--scale-factor));
    height: calc(40px * var(--scale-factor));
    justify-content: left;
    font-size: 35px;
    /* border: solid red 0.2px * var(--scale-factor)); */
}

.card9-label5-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    /* border: solid red; */
}

.card9-label6-position {
    top: calc(280px * var(--scale-factor));
    left: calc(200px * var(--scale-factor));
    width: calc(90px * var(--scale-factor));
    height: calc(20px * var(--scale-factor));
    justify-content: left;
    /* border: solid red; */
    font-size: 16px;
}

.card9-label6-position p {
    font-weight: 400;
    font-family: "Urbanist", sans-serif;
    /* border: solid red; */
}


</style>