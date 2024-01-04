<template>
    <CardBase :title="$t('V1C17L1')" :content="$t('V1C17L2')" :card-number="17" :background-front-image="`C17.${imageType}`" >
        <template v-slot:back-content>
            <div id="card17-back-label1" class="label white set-three">
                <p id="card17-back-text1">{{ $t('V1C0L4') + ' ' + "3"}}</p>
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