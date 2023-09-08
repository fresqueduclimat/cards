<template>
    <CardBase :title="$t('V1C8L1')" :content="$t('V1C8L2')" :card-number="8" :background-front-image="'C8.png'"
        :background-back-image="'C8-back.png'" />
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