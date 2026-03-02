<template>
    <CardBase :title="$t('V3C27L0')" :content="$t('V3C27L1')" :card-number="27" :card-number-front="28" :background-front-image="`C27.${imageType}`">
        <div id="card27-label1" class="horizontal-center label card27-label1-position">
        <p id="card27-text1" class="font-small">{{ $t('V3C27L2') }}</p>
        </div>
        <div id="card27-label2" class="horizontal-center label card27-label2-position">
            <p id="card27-text2" class="font-small">{{ $t('V3C27L3') }}</p>
        </div>
        <div id="card27-label3" class="horizontal-center label card27-label3-position">
            <p id="card27-text3" class="font-small">{{ $t('V3C27L4') }}</p>
        </div>
        <template v-slot:back-content>
            <div id="card27-back-label1" class="label set-three">
                <p id="card27-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "3"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-three">

                <p class="label font-medium card-number black">28</p>
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
.card27-label1-position {
    top: calc(108px * var(--scale-factor));
    left: calc(260px * var(--scale-factor));
    width: calc(105px * var(--scale-factor));
    height: calc(39px * var(--scale-factor));
    font-size: calc(15px * var(--scale-factor));
    /* border: solid red 0.5px; */
    text-align: left;
}

.card27-label1-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    color : #d35b28;
}

.card27-label2-position {
    top: calc(199px * var(--scale-factor));
    left: calc(290px * var(--scale-factor));
    width: calc(105px * var(--scale-factor));
    height: calc(39px * var(--scale-factor));
    font-size: calc(15px * var(--scale-factor));
    text-align: left;
    /* border: solid red 0.5px; */
}

.card27-label2-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    color : #d35b28;
}

.card27-label3-position {
    top: calc(323px * var(--scale-factor));
    left: calc(28px * var(--scale-factor));
    width: calc(110px * var(--scale-factor));
    height: calc(44px * var(--scale-factor));
    text-align: left;
    /* border: solid red 0.5px; */
}

.card27-label3-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    color : #d35b28;
;
}

</style>