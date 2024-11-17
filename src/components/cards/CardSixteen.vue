<template>
    <CardBase :title="$t('V1C16L1')" :content="$t('V1C16L2')" :card-number="16" :background-front-image="`C16.${imageType}`">
        <template v-slot:back-content>
            <div id="card16-back-label1" class="label white set-three">
                <p id="card16-back-text1">{{ $t('V1C0L4') + ' ' + "3"}}</p>
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