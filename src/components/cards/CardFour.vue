<template>
    <CardBase :title="$t('V1C4L1')" :content="$t('V1C4L2')" :card-number="4"
        :background-front-image="`C4.${imageType}`">
        <template v-slot:back-content>
            <div id="card4-back-label1" class="label white set-two">
                <p id="card4-back-text1">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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