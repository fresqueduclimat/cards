<template>
    <CardBase :title="$t('V1C17L1')" :content="$t('V1C17L2')" :card-number="17" :background-front-image="'C17.png'"
        :background-back-image="'C17-back.png'" />
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