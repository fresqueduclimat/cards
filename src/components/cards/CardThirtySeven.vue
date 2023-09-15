<template>
    <CardBase :title="$t('V1C37L1')" :content="$t('V1C37L2')" :card-number="37" :background-front-image="'C37.png'">
        <template v-slot:back-content>
            <div id="card37-back-label1" class="label white set-five">
                <p id="card37-back-text1">{{ $t('V1C0L4') + ' ' + "5"}}</p>
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