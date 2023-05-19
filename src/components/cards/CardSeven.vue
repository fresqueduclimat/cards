<template>
    <CardBase :title="$t('V1C7L1')" :content="$t('V1C7L2')" :card-number="7" :background-front-image="'C7.png'"
        :background-back-image="'C7-back.png'">
        <div id="card7-label1" class="horizontal-center vertical-center label black card7-label1-position">
            <p id="card7-text1">{{ $t('V1C7L5') }}</p>
        </div>
        <div id="card7-label2" class="horizontal-center vertical-left label black card7-label2-position">
            <p id="card7-text2" class="font-medium">{{ $t('V1C7L3') }}</p>
        </div>
        <div id="card7-label3" class="horizontal-center vertical-left label black label3 card7-label3-position">
            <p id="card7-text3" class="font-medium">{{ $t('V1C7L4') }}</p>
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
.card7-label1-position {
    top: 24vh;
    left: 9vw;
    width: 87vw;
    height: 8vh;
    border: solid red;
}

.card7-label2-position {
    top: 64vh;
    left: 36vw;  
    width: 27vw;
    height: 10vh; 
    border: solid red;
}

.card7-label3-position {
    top: 78vh;
    left: 36vw;
    width: 27vw;
    height: 10vh;
    border: solid red;
}

.card7-label2-position p {
    font-size: 135px;
}

.card7-label3-position p {
    font-size: 135px;
}
</style>