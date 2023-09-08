<template>
    <CardBase :title="$t('V1C40L1')" :content="$t('V1C40L2')" :card-number="40" :background-front-image="'C40.png'"
        :background-back-image="'C40-back.png'" />
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