<template>
    <CardBase :title="$t('V1C32L1')" :content="$t('V1C32L2')" :card-number="32" :background-front-image="'C32.png'" >
        <template v-slot:back-content>
            <div id="card32-back-label1" class="label white set-five">
                <p id="card32-back-text1">{{ $t('V1C0L4') + ' ' + "5"}}</p>
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