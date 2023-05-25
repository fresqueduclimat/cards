<template>
    <CardBase :title="$t('V1C5L1')" :content="$t('V1C5L2')" :card-number="5" :background-front-image="'C5.png'"
        :background-back-image="'C5-back.png'">
        <div id="card5-label1" class="horizontal-center vertical-center label black card5-label1-position">
            <p id="card5-text1" class="font-small">{{ $t('V1C5L5') }}</p>
        </div>
        <div id="card5-label2" class="horizontal-center vertical-center label black card5-label2-position">
            <p id="card5-text2" class="font-medium">{{ $t('V1C5L3') }}</p>
        </div>
        <div id="card5-label3"
            class="horizontal-center vertical-center label black label5 card5-label3-position">
            <p id="card5-text3" class="font-small">{{ $t('V1C5L4') }}</p>
        </div>
        <div id="card5-label4"
            class="horizontal-center vertical-center label black label5 card5-label4-position">
            <p id="card5-text4" class="font-small">{{ $t('V1C999L90') }}</p>
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
.font-medium {
    font-weight: 700;
}

.font-small {
    font-weight: 500;
}

.card5-label1-position {
    top: 954px;
    left: 1216.8px;
    width: 1357.2px;
    height: 254.4px;
    border: solid red;
}

.card5-label2-position {
    top: 1500px;
    left: 1690px;
    width: 660px;
    height: 150px;
    border: solid red;
}

.card5-label3-position {
    top: 1500px;
    left: -200px;
    width: 1650px;
    height: 200px;
    transform: rotate(-90deg);
    border: solid red;
}

.card5-label4-position {
    top: 1650px;
    left: 3000px;
    width: 1950px;
    height: 200px;
    transform: rotate(-90deg);
    border: solid red;
}
</style>