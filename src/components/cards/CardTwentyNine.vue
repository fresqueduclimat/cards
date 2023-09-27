<template>
    <CardBase :title="$t('V1C29L1')" :content="$t('V1C29L2')" :card-number="29" :background-front-image="'C29.png'">
        <template v-slot:back-content>
            <div id="card29-back-label1" class="label white set-four">
                <p id="card29-back-text1">{{ $t('V1C0L4') + ' ' + "4"}}</p>
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