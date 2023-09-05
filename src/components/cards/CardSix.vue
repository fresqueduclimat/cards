<template>
    <CardBase :title="$t('V1C6L1')" :content="$t('V1C6L2')" :card-number="6" :background-front-image="'C6.webp'"
        :background-back-image="'C6-back.webp'" />
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