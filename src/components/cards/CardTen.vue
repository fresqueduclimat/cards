<template>
    <CardBase :title="$t('V1C10L1')" :content="$t('V1C10L2')" :card-number="10" :background-front-image="'C10.png'">
        <template v-slot:back-content>
            <div id="card10-back-label1" class="label white set-three">
                <p id="card10-back-text1">{{ $t('V1C0L4') + ' ' + "3"}}</p>
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