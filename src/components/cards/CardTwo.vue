<template>
    <CardBase :title="$t('V1C2L1')" :content="$t('V1C2L2')" :card-number="2"
        :background-front-image="'C2.png'" :background-back-image="'C2-back.png'" >
        <template v-slot:back-content>
            <div id="card5-back-label5" class="label white set-two">
                <p id="card5-back-text5">{{ $t('V0C0L0') }}</p>
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