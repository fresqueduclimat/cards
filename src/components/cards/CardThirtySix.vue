<template>
    <CardBase :title="$t('V1C36L1')" :content="$t('V1C36L2')" :card-number="36" :background-front-image="`C36.${imageType}`">
        <template v-slot:back-content>
            <div id="card36-back-label1" class="label white set-five">
                <p id="card36-back-text1">{{ $t('V1C0L4') + ' ' + "5"}}</p>
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