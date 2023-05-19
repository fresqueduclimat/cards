<template>
    <CardBase :title="$t('V1C11L1')" :content="$t('V1C11L2')" :card-number="11" :background-front-image="'C11.png'"
        :background-back-image="'C11-back.png'" />
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