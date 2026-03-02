<template>
    <CardBase :title="$t('V3C2L0')" :content="$t('V3C2L1')" :card-number="2" :card-number-front="11" :background-front-image="`C2.${imageType}`" >
        <template v-slot:back-content>
            <div id="card2-back-label1" class="label black set-two">
                <p id="card2-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "2"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-two">

                <p class="label font-medium card-number black">11</p>
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