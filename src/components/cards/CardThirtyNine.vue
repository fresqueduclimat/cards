<template>
    <CardBase :title="$t('V1C39L1')" :content="$t('V1C39L2')" :card-number="39" :background-front-image="'C39.png'"
        :background-back-image="'C39-back.png'" />
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