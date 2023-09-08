<template>
    <CardBase :title="$t('V1C27L1')" :content="$t('V1C27L2')" :card-number="27" :background-front-image="'C27.png'"
        :background-back-image="'C27-back.png'" />
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