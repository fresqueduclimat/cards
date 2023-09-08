<template>
    <CardBase :title="$t('V1C11L1')" :content="$t('V1C11L2')" :card-number="11" :background-front-image="'C11.png'"
        :background-back-image="'C11-back.png'" >
        <div id="card11-label1" class="horizontal-center vertical-center label card11-label1-position">
            <p id="card11-text1" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>    
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

<style>
.card11-label1-position {
    top: 770px;
    left: 1430px;
    width: 2100px;
    height: 150px;
    color: grey;
    /* border: solid red; */
}
</style>