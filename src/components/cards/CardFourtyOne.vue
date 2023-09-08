<template>
    <CardBase :title="$t('V1C41L1')" :content="$t('V1C41L2')" :card-number="41" :background-front-image="'C41.png'"
        :background-back-image="'C41-back.png'" />
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