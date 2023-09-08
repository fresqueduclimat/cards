<template>
    <CardBase :title="$t('V1C1L1')" :content="$t('V1C1L2')" :card-number="1" :background-front-image="'C1.png'"
        :background-back-image="'C1-back.png'" />
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