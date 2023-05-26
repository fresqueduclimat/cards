<template>
    <CardBase :title="$t('V1C14L1')" :content="$t('V1C14L2')" :card-number="14" :background-front-image="'C14.png'"
        :background-back-image="'C14-back.png'" >
        <div id="card14-label1" v-text-align class="horizontal-center vertical-center label black card14-label1-position">
            <p id="card14-text1" class="font-medium">{{ $t('V1C14L3') }}</p>
        </div>
        <div id="card14-label2" v-text-align class="horizontal-center vertical-center label black card14-label2-position">
            <p id="card14-text2" class="font-medium">{{ $t('V1C14L4') }}</p>
        </div>
        <div id="card14-label3" v-text-align class="horizontal-center vertical-center label black label5 card14-label3-position">
            <p id="card14-text3" class="font-medium">{{ $t('V1C14L5') }}</p>
        </div>
        <div id="card14-label4" v-text-align class="horizontal-center vertical-center label black label5 card14-label4-position">
            <p id="card14-text4" class="font-medium">{{ $t('V1C14L6') }}</p>
        </div>
        <div id="card14-label5"
            class="horizontal-center vertical-center label black label5 card14-label5-position">
            <p id="card14-text5" class="font-small">{{ $t('V1C14L11') }}</p>
        </div>
        <div id="card14-label6"
            class="horizontal-center vertical-center label black label5 card14-label6-position">
            <p id="card14-text6" class="font-small">{{ $t('V1C999L90') }}</p>
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
.card14-label1-position {
    top: 950px;
    left: 3300px;
    width: 800px;
    height: 350px;
    text-align : left;
    border: solid red;
}

.card14-label2-position {
    top: 1400px;
    left: 3300px;
    width: 800px;
    height: 350px;
    text-align : left;
    border: solid red;
}

.card14-label3-position {
    top: 1850px;
    left: 3300px;
    width: 800px;
    height: 350px;
    text-align : left;
    border: solid red;
}

.card14-label4-position {
    top: 2270px;
    left: 3300px;
    width: 800px;
    height: 350px;
    text-align : left;
    border: solid red;
}

.card14-label5-position {
    top: 1500px;
    left: -350px;
    width: 1600px;
    height: 200px;
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card14-label6-position {
    top: 1650px;
    left: 3300px;
    width: 1950px;
    height: 200px;
    transform: rotate(-90deg);
    /* border: solid red; */
}
</style>