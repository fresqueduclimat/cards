<template>
    <CardBase :title="$t('V1C15L1')" :content="$t('V1C15L2')" :card-number="15" :background-front-image="'C15.png'"
        :background-back-image="'C15-back.png'" />
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