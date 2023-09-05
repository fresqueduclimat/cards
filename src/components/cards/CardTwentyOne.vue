<template>
    <CardBase :title="$t('V1C21L1')" :content="$t('V1C21L2')" :card-number="21" :background-front-image="'C21.webp'"
        :background-back-image="'C21-back.webp'"> 
        <div id="card21-label1" class="horizontal-center label black card21-label1-position">
            <p id="card21-text1" class="font-medium">{{ $t('V1C21L6') }}</p>
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
.card21-label1-position {
    top: 790px;
    left: 2100px;
    width: 2200px;
    height: 300px;
    text-align : right;
    justify-content: right;
    /* border: solid red; */
}
</style>