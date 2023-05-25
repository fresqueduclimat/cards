<template>
    <CardBase :title="$t('V1C13L1')" :content="$t('V1C13L2')" :card-number="13" :background-front-image="'C13.png'"
        :background-back-image="'C13-back.png'">
        <div id="card13-label1" class="horizontal-center vertical-center label orange card13-label1-position">
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
    top: 1100px;
    left: 1200px;
    width: 700px;
    height: 300px;
    border : red solid;
}

.card13-label2-position {
    top: 1700px;
    left: 200px;
    width: 700px;
    height: 300px;
    border : red solid;
}

.card13-label3-position {
    top: 800px;
    left: 3000px;
    width: 1000px;
    height: 300px;
    border : red solid;
}

.card13-label4-position {
    top: 1700px;
    left: 3300px;
    width: 800px;
    height: 300px;
    border : red solid;
}
</style>
