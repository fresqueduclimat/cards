<template>
    <CardBase :title="$t('V1C21L1')" :content="$t('V1C21L2')" :card-number="21" :background-front-image="'C21.png'"
        :background-back-image="'C21-back.png'" />
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