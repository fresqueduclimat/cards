<template>
    <CardBase :title="$t('V1C4L1')" :content="$t('V1C4L2')" :card-number="4"
        :background-front-image="'C4.webp'" :background-back-image="'C4-back.webp'" />
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