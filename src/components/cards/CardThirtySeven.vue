<template>
    <CardBase :title="$t('V1C37L1')" :content="$t('V1C37L2')" :card-number="37" :background-front-image="'C37.png'"
        :background-back-image="'C37-back.png'" />
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