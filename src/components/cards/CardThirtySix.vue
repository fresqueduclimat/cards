<template>
    <CardBase :title="$t('V1C36L1')" :content="$t('V1C36L2')" :card-number="36" :background-front-image="'C36.webp'"
        :background-back-image="'C36-back.webp'" />
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