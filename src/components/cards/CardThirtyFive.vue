<template>
    <CardBase :title="$t('V1C35L1')" :content="$t('V1C35L2')" :card-number="35" :background-front-image="'C35.webp'"
        :background-back-image="'C35-back.webp'" />
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