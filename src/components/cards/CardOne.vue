<template>
    <CardBase :title="$t('V1C1L1')" :content="$t('V1C1L2')" :card-number="1" :background-front-image="`C1.${imageType}`">
        <template v-slot:back-content>
            <div id="card1-back-label1" class="label white set-one">
                <p id="card1-back-text1">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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