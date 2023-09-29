<template>
    <CardBase :title="$t('V1C7L1')" :content="$t('V1C7L2')" :card-number="7" :background-front-image="'C7.png'">
        <div id="card7-label1" class="horizontal-center vertical-center label black card7-label1-position">
            <p id="card7-text1">{{ $t('V1C7L5') }}</p>
        </div>
        <div id="card7-label2" class="horizontal-center label black card7-label2-position">
            <p id="card7-text2" class="font-medium">{{ $t('V1C7L3') }}</p>
        </div>
        <div id="card7-label3" class="horizontal-center label black label3 card7-label3-position">
            <p id="card7-text3" class="font-medium">{{ $t('V1C7L4') }}</p>
        </div>
        <template v-slot:back-content>
            <div id="card7-back-label3" class="label white set-one">
                <p id="card7-back-text3">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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

<!-- pour une résolution de 470x693 -->
<style>
.card7-label1-position {
    top: 24vh;
    left: 9vw;
    width: 87vw;
    height: 8vh;
    /* border: solid red; */
}

.card7-label2-position {
    top: 304px;
    left: 252px;
    width: 218px;
    height: 37px;
    text-align: left;
    font-size: 20px;
    /* border: solid red; */
}

.card7-label3-position {
    top: 378px;
    left: 251px;
    width: 148px;
    height: 37px;
    text-align: left;
    font-size: 20px;
    /* border: solid red; */
}
</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card7-label1-position {
    top: 24vh;
    left: 9vw;
    width: 87vw;
    height: 8vh;
    /* border: solid red; */
}

.card7-label2-position {
    top: 2055px;
    left: 1700px;
    width: 1000px;
    height: 250px;
    text-align: left;
    /* border: solid red; */
}

.card7-label3-position {
    top: 2555px;
    left: 1700px;
    width: 1000px;
    height: 250px;
    text-align: left;
    /* border: solid red; */
}

.card7-label2-position p {
    font-size: 135px;
}

.card7-label3-position p {
    font-size: 135px;
}
</style> -->