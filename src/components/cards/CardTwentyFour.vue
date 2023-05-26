<template>
    <CardBase :title="$t('V1C24L1')" :content="$t('V1C24L2')" :card-number="24" :background-front-image="'C24.png'"
        :background-back-image="'C24-back.png'" />
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