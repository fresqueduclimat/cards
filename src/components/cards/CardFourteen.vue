<template>
    <CardBase :title="$t('V1C14L1')" :content="$t('V1C14L2')" :card-number="14" :background-front-image="'C14.png'"
        :background-back-image="'C14-back.png'" />
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