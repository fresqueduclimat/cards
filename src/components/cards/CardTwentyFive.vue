<template>
    <CardBase :title="$t('V1C25L1')" :content="$t('V1C25L2')" :card-number="25" :background-front-image="'C25.webp'"
        :background-back-image="'C25-back.webp'" />
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