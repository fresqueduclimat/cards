<template>
    <CardBase :title="$t('V1C18L1')" :content="$t('V1C18L2')" :card-number="18" :background-front-image="'C18.png'">
        <template v-slot:back-content>
            <div id="card22-back-label1" class="label white set-one">
                <p id="card22-back-text1">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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