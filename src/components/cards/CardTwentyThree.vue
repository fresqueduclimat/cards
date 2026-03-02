<template>
    <CardBase :title="$t('V3C23L0')" :content="$t('V3C23L1')" :card-number="23" :card-number-front="26" :background-front-image="`C23.${imageType}`">
        <template v-slot:back-content>
            <div id="card23-back-label1" class="label set-four">
                <p id="card23-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "4"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-four">

                <p class="label font-medium card-number black">26</p>
            </div>
            <div class="label logo-icon-container-four">
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