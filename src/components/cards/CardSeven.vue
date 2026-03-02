<template>
    <CardBase :title="$t('V3C7L0')" :content="$t('V3C7L1')" :card-number="7" :card-number-front="10" :background-front-image="`C7.${imageType}`">
        <template v-slot:back-content>
            <div id="card7-back-label1" class="label set-two">
                <p id="card7-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "2"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-two">

                <p class="label font-medium card-number black">10</p>
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

<!-- pour une résolution de 470x693 -->
<style>
.card7-label1-position {
    top: 24.6vh;
    left: 12.7vw;
    width: 74.8vw;
    height: 6.88vh;
    /* border: solid red; */
}

</style>