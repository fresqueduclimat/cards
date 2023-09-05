<template>
    <CardBase :title="$t('V1C41L1')" :content="$t('V1C41L2')" :card-number="41" :background-front-image="'C41.webp'"
        :background-back-image="'C41-back.webp'" />
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