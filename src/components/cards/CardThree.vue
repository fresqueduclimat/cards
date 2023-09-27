<template>
    <CardBase :title="$t('V1C3L1')" :content="$t('V1C3L2')" :card-number="3"
        :background-front-image="'C3.png'" >
        <template v-slot:back-content>
            <div id="card3-back-label1" class="label white set-two">
                <p id="card3-back-text1">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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