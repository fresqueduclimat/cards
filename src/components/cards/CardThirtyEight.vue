<template>
    <CardBase :title="$t('V1C38L1')" :content="$t('V1C38L2')" :card-number="38" :background-front-image="'C38.webp'"
        :background-back-image="'C38-back.webp'" />
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