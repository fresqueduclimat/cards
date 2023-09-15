<template>
    <CardBase :title="$t('V1C41L1')" :content="$t('V1C41L2')" :card-number="41" :background-front-image="'C41.png'">
        <template v-slot:back-content>
            <div id="card41-back-label1" class="label white set-five">
                <p id="card41-back-text1">{{ $t('V1C0L4') + ' ' + "5"}}</p>
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