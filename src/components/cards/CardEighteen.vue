<template>
    <CardBase :title="$t('V1C18L1')" :content="$t('V1C18L2')" :card-number="18" :background-front-image="'C18.webp'"
        :background-back-image="'C18-back.webp'" />
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