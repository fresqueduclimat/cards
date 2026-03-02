<template>
    <CardBase :title="$t('V3C6L0')" :content="$t('V3C6L1')" :card-number="6" :card-number-front="1" :background-front-image="`C6.${imageType}`" >
        <template v-slot:back-content>
            <div id="card6-back-label1" class="label set-one">
                <p id="card6-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "1"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-one">
                <p class="label font-medium card-number black">1</p>
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