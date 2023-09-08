<template>
    <CardBase :title="$t('V1C26L1')" :content="$t('V1C26L2')" :card-number="26" :background-front-image="'C26.png'"
        :background-back-image="'C26-back.png'" />
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