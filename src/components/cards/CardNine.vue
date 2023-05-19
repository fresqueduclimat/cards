<template>
    <CardBase :title="$t('V1C9L1')" :content="$t('V1C9L2')" :card-number="9" :background-front-image="'C9.png'"
        :background-back-image="'C9-back.png'" />
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