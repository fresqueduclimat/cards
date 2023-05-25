<template>
    <CardBase :title="$t('V1C20L1')" :content="$t('V1C20L2')" :card-number="20" :background-front-image="'C20.png'"
        :background-back-image="'C20-back.png'" />
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