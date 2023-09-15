<template>
    <CardBase :title="$t('V1C2L1')" :content="$t('V1C2L2')" :card-number="2"
        :background-front-image="'C2.png'" >
        <template v-slot:back-content>
            <div id="card2-back-label2" class="label white set-two">
                <p id="card2-back-text2">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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