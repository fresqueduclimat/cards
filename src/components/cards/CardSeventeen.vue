<template>
    <CardBase :title="$t('V3C17L0')" :content="$t('V3C17L1')" :card-number="17" :card-number-front="15" :background-front-image="`C17.${imageType}`" >
        <template v-slot:back-content>
            <div id="card17-back-label1" class="label set-three">
                <p id="card17-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "3"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-three">

                <p class="label font-medium card-number black">15</p>
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