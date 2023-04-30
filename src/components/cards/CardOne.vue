<template>
    <CardComplete :title="$t('V1C1L1')" :background-image="'card1.png'" :content="$t('V1C1L2')" :card-number="1"
        :lot-number="1" />
</template>

<script>
import CardComplete from "@/components/base/CardComplete.vue";

export default {
    name: "CardOne",
    components: {
        CardComplete,
    },
};
</script>