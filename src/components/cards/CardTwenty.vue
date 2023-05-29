<template>
    <CardBase :title="$t('V1C20L1')" :content="$t('V1C20L2')" :card-number="20" :background-front-image="'C20.png'"
        :background-back-image="'C20-back.png'">
        <div id="card20-label1" class="horizontal-center vertical-center label black card20-label1-position">
            <p id="card20-text1" class="font-small">{{ $t('V1C20L3') }}</p>
        </div>
        <div id="card20-label2" class="horizontal-center vertical-center label black card20-label2-position">
            <p id="card20-text2" class="font-small">{{ $t('V1C20L4') }}</p>
        </div>
        <div id="card20-label3"
            class="horizontal-center vertical-center label black label5 card20-label3-position">
            <p id="card20-text3" class="font-small">{{ $t('V1C20L5') }}</p>
        </div>
        <div id="card20-label4"
            class="horizontal-center vertical-center label black label5 card20-label4-position">
            <p id="card20-text4" class="font-small">{{ $t('V1C20L6') }}</p>
        </div>
        <div id="card20-label5"
            class="horizontal-center vertical-center label black label5 card20-label5-position">
            <p id="card20-text5" class="font-small">{{ $t('V1C20L7') }}</p>
        </div>
        <div id="card20-label6"
            class="horizontal-center vertical-center label black label5 card20-label6-position">
            <p id="card20-text6" class="font-small">{{ $t('V1C20L8') }}</p>
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
.card20-label1-position {
    top: 1350px;
    left: 750px;
    width: 800px;
    height: 250px;
    /* border: solid red; */
}

.card20-label2-position {
    top: 1200px;
    left: 1600px;
    width: 800px;
    height: 250px;
    /* border: solid red; */
}

.card20-label3-position {
    top: 1100px;
    left: 2900px;
    width: 800px;
    height: 200px;
    /* border: solid red; */
}

.card20-label4-position {
    top: 800px;
    left: 3600px;
    width: 800px;
    height: 200px;
    /* border: solid red; */
}

.card20-label5-position {
    top: 2070px;
    left: 1600px;
    width: 800px;
    height: 200px;
    transform: rotate(-24deg);
    /* border: solid red; */
}

.card20-label6-position {
    top: 2300px;
    left: 3600px;
    width: 800px;
    height: 200px;
    /* border: solid red; */
}
</style>