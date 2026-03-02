<template>
    <CardBase :title="$t('V3C14L0')" :content="$t('V3C14L1')" :card-number="14" :card-number-front="4" :background-front-image="`C14.${imageType}`" >
        <template v-slot:back-content>
            <div id="card14-back-label1" class="label black set-one">
                <p id="card14-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "1"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-one">

                <p class="label font-medium card-number black">4</p>
            </div>
            <div class="label logo-icon-container-one">
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