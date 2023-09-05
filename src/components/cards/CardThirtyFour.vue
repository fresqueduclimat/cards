<template>
    <CardBase :title="$t('V1C34L1')" :content="$t('V1C34L2')" :card-number="34" :background-front-image="'C34.webp'"
        :background-back-image="'C34-back.webp'" />
</template>

<script>
import CardBase from "@/components/base/CardBase.vue";

export default {
    name: "CardOne",
    components: {
        CardBase,
    },
};
</script>