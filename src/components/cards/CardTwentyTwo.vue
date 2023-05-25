<template>
    <CardBase :title="$t('V1C22L1')" :content="$t('V1C22L2')" :card-number="22" :background-front-image="'C22.png'"
        :background-back-image="'C22-back.png'" />
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