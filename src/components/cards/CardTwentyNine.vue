<template>
    <CardBase :title="$t('V1C29L1')" :content="$t('V1C29L2')" :card-number="29" :background-front-image="'C29.png'"
        :background-back-image="'C29-back.png'" />
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