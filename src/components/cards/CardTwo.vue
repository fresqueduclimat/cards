<template>
    <CardBase :title="$t('V1C2L1')" :content="$t('V1C2L2')" :card-number="2"
        :background-front-image="'C2.webp'" :background-back-image="'C2-back.webp'" />
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