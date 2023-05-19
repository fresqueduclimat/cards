<template>
    <CardBase :title="$t('V1C13L1')" :content="$t('V1C13L2')" :card-number="13" :background-front-image="'C13.png'"
        :background-back-image="'C13-back.png'">
        <div id="card13-label1" class="horizontal-center label orange card13-label1-position">
            <p id="card13-text1" class="font-medium">{{ $t('V1C13L3') }}</p>
        </div>
        <div id="card13-label2" class="horizontal-center vertical-center label orange card13-label2-position">
            <p id="card13-text2" class="font-medium">{{ $t('V1C13L4') }}</p>
        </div>
        <div id="card13-label3" class="horizontal-center vertical-center label red card13-label3-position">
            <p id="card13-text3" class="font-medium">{{ $t('V1C13L5') }}</p>
        </div>
        <div id="card13-label4" class="horizontal-center vertical-center label red card13-label4-position">
            <p id="card13-text4" class="font-medium">{{ $t('V1C13L6') }}</p>
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
.card13-label1-position {
    top: 37vh;
    left: 26vw;
    width: 15vw;
    height: 10vh;
}

.card13-label2-position {
    top: 54vh;
    left: 5vw;
    width: 15vw;
    height: 10vh;
}

.card13-label3-position {
    top: 23vh;
    left: 64vw;
    width: 20vw;
    height: 10vh;
}

.card13-label4-position {
    top: 54vh;
    left: 72vw;
    width: 12vw;
    height: 10vh;
}
</style>
