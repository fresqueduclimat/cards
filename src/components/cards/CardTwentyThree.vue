<template>
    <CardBase :title="$t('V1C23L1')" :content="$t('V1C23L2')" :card-number="23" :background-front-image="'C23.png'">
        <template v-slot:back-content>
            <div id="card23-back-label1" class="label white set-four">
                <p id="card23-back-text1">{{ $t('V1C0L4') + ' ' + "4"}}</p>
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