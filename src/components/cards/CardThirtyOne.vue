<template>
    <CardBase :title="$t('V1C31L1')" :content="$t('V1C31L2')" :card-number="31" :background-front-image="'C31.webp'"
        :background-back-image="'C31-back.webp'" />
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