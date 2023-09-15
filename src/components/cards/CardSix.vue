<template>
    <CardBase :title="$t('V1C6L1')" :content="$t('V1C6L2')" :card-number="6" :background-front-image="'C6.png'" >
        <template v-slot:back-content>
            <div id="card6-back-label1" class="label white set-two">
                <p id="card6-back-text1">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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