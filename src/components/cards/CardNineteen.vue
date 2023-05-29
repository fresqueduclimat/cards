<template>
    <CardBase :title="$t('V1C19L1')" :content="$t('V1C19L2')" :card-number="19" :background-front-image="'C19.png'"
        :background-back-image="'C19-back.png'" >
        <div id="card19-label1" class="horizontal-center vertical-center label card19-label1-position">
            <p id="card19-text1" class="font-small">{{ $t('V1C999L90') }}</p>
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
.card19-label1-position {
    top: 2800px;
    left: 450px;
    width: 1700px;
    height: 200px;
    color : grey;
    /* border: solid red; */
}
</style>