<template>
    <CardBase :title="$t('V1C23L1')" :content="$t('V1C23L2')" :card-number="23" :background-front-image="'C23.png'"
        :background-back-image="'C23-back.png'" />
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