<template>
    <CardBase :title="$t('V1C32L1')" :content="$t('V1C32L2')" :card-number="32" :background-front-image="'C32.webp'"
        :background-back-image="'C32-back.webp'" />
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