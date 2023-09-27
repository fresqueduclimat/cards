<template>
    <CardBase :title="$t('V1C27L1')" :content="$t('V1C27L2')" :card-number="27" :background-front-image="'C27.png'">
        <template v-slot:back-content>
            <div id="card27-back-label1" class="label white set-four">
                <p id="card27-back-text1">{{ $t('V1C0L4') + ' ' + "4"}}</p>
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