<template>
    <CardBase :title="$t('V3C8L0')" :content="$t('V3C8L1')" :card-number="8" :card-number-front="12" :background-front-image="`C8.${imageType}`">
        <template v-slot:back-content>
            <div id="card8-back-label1" class="label set-two">
                <p id="card8-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "2"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-two">

                <p class="label font-medium card-number black">12</p>
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