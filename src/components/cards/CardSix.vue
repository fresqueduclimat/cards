<template>
    <CardBase :title="$t('V1C6L1')" :content="$t('V1C6L2')" :card-number="6" :background-front-image="'C6.png'"
        :background-back-image="'C6-back.png'" />
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