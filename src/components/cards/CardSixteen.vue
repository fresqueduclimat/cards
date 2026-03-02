<template>
    <CardBase :title="$t('V3C16L0')" :content="$t('V3C16L1')" :card-number="16" :card-number-front="9" :background-front-image="`C16.${imageType}`">
        <template v-slot:back-content>
            <div id="card16-back-label1" class="label set-two">
                <p id="card16-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "2"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-two">

                <p class="label font-medium card-number black">9</p>
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