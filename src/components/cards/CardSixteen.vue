<template>
    <CardBase :title="$t('V1C16L1')" :content="$t('V1C16L2')" :card-number="16" :background-front-image="'C16.png'"
        :background-back-image="'C16-back.png'" />
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