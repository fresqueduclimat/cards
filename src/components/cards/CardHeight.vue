<template>
    <CardBase :title="$t('V1C8L1')" :content="$t('V1C8L2')" :card-number="8" :background-front-image="'C8.png'">
        <template v-slot:back-content>
            <div id="card8-back-label1" class="label white set-two">
                <p id="card8-back-text1">{{ $t('V1C0L4') + ' ' + "2"}}</p>
            </div>
        </template>
    </CardBase>
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