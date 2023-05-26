<template>
    <CardBase :title="$t('V1C42L1')" :content="$t('V1C42L2')" :card-number="42" :background-front-image="'C42.png'"
        :background-back-image="'C42-back.png'" />
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