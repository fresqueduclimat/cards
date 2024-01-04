<template>
    <CardBase :title="$t('V1C26L1')" :content="$t('V1C26L2')" :card-number="26" :background-front-image="`C26.${imageType}`">
        <template v-slot:back-content>
            <div id="card26-back-label1" class="label white set-four">
                <p id="card26-back-text1">{{ $t('V1C0L4') + ' ' + "4"}}</p>
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