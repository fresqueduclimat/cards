<template>
    <CardBase :title="$t('V1C10L1')" :content="$t('V1C10L2')" :card-number="10" :background-front-image="'C10.png'"
        :background-back-image="'C10-back.png'" />
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