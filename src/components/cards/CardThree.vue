<template>
    <CardBase :title="$t('V1C3L1')" :content="$t('V1C3L2')" :card-number="3"
        :background-front-image="'C3.webp'" :background-back-image="'C3-back.webp'" />
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