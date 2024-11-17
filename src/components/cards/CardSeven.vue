<template>
    <CardBase :title="$t('V1C7L1')" :content="$t('V1C7L2')" :card-number="7" :background-front-image="`C7.${imageType}`">
        <div id="card7-label1" class="horizontal-center vertical-center label black card7-label1-position">
            <p id="card7-text1">{{ $t('V1C7L5') }}</p>
        </div>
        <div id="card7-label2" class="horizontal-center label black card7-label2-position">
            <p id="card7-text2" class="font-medium">{{ $t('V1C7L3') }}</p>
        </div>
        <div id="card7-label3" class="horizontal-center label black label3 card7-label3-position">
            <p id="card7-text3" class="font-medium">{{ $t('V1C7L4') }}</p>
        </div>
        <template v-slot:back-content>
            <div id="card7-back-label3" class="label white set-one">
                <p id="card7-back-text3">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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
.card7-label1-position {
    top: 24.6vh;
    left: 12.7vw;
    width: 74.8vw;
    height: 6.88vh;
    /* border: solid red; */
}

.card7-label2-position {
    top: calc(261.4px * var(--scale-factor));
    left: calc(216.7px * var(--scale-factor));
    width: calc(168px * var(--scale-factor));
    height: calc(31.8px * var(--scale-factor));
    text-align: left;
    font-size: calc(17px * var(--scale-factor));
    /* border: solid red; */
}

.card7-label3-position {
    top: calc(325px * var(--scale-factor));
    left: calc(215.8px * var(--scale-factor));
    width: calc(127.3px * var(--scale-factor));
    height: calc(31.8px * var(--scale-factor));
    text-align: left;
    font-size: calc(17px * var(--scale-factor));
    /* border: solid red; */
}
</style>