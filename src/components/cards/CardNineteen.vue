<template>
    <CardBase :title="$t('V3C19L0')" :content="$t('V3C19L1')" :card-number="19" :card-number-front="16" :background-front-image="`C19.${imageType}`">
        <template v-slot:back-content>
            <div id="card19-back-label1" class="label set-three">
                <p id="card19-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "3"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-three">

                <p class="label font-medium card-number black">16</p>
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