<template>
    <CardBase :title="$t('V1C33L1')" :content="$t('V1C33L2')" :card-number="33" :background-front-image="`C33.${imageType}`">
        <template v-slot:back-content>
            <div id="card33-back-label1" class="label white set-four">
                <p id="card33-back-text1">{{ $t('V1C0L4') + ' ' + "4"}}</p>
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