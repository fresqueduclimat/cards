<template>
    <CardBase :title="$t('V1C33L1')" :content="$t('V1C33L2')" :card-number="33" :background-front-image="'C33.webp'"
        :background-back-image="'C33-back.webp'" />
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