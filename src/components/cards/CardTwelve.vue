<template>
    <CardBase :title="$t('V1C12L1')" :content="$t('V1C12L2')" :card-number="12" :background-front-image="'C12.png'"
        :background-back-image="'C12-back.png'" />
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