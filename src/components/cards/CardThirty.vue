<template>
    <CardBase :title="$t('V1C30L1')" :content="$t('V1C30L2')" :card-number="30" :background-front-image="'C30.webp'"
        :background-back-image="'C30-back.webp'" />
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