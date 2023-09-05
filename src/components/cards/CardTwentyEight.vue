<template>
    <CardBase :title="$t('V1C28L1')" :content="$t('V1C28L2')" :card-number="28" :background-front-image="'C28.webp'"
        :background-back-image="'C28-back.webp'" />
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