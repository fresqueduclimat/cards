<template>
    <CardBase :title="$t('V1C19L1')" :content="$t('V1C19L2')" :card-number="19" :background-front-image="'C19.png'"
        :background-back-image="'C19-back.png'" />
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