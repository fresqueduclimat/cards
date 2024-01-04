<template>
    <CardBase :title="$t('V1C42L1')" :content="$t('V1C42L2')" :card-number="42" :background-front-image="`C42.${imageType}`">
        <template v-slot:back-content>
            <div id="card42-back-label1" class="label white set-five">
                <p id="card42-back-text1">{{ $t('V1C0L4') + ' ' + "5"}}</p>
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