<template>
    <CardBase :title="$t('V1C21L1')" :content="$t('V1C21L2')" :card-number="21" :background-front-image="'C21.png'"> 
        <div id="card21-label1" class="horizontal-center label black card21-label1-position">
            <p id="card21-text1" class="font-medium">{{ $t('V1C21L6') }}</p>
        </div>
        <div id="card21-label2" class="horizontal-center label black card21-label2-position">
            <p id="card21-text2">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card21-fixed-label1" class="horizontal-center vertical-center label black card21-fixed-label1-position">
            <p id="card21-fixed-text1" class="font-small">+ 1.2°C</p>
        </div>
        <div id="card21-fixed-label2" class="horizontal-center vertical-center label black card21-fixed-label2-position">
            <p id="card21-fixed-text2" class="font-small">+ 5°C</p>
        </div>
        <div id="card21-fixed-label3" class="horizontal-center vertical-center label black card21-fixed-label3-position">
            <p id="card21-fixed-text3" class="font-small">+ 1.5°C</p>
        </div>
        <template v-slot:back-content>
            <div id="card21-back-label2" class="label white set-one">
                <p id="card21-back-text2">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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
.card21-label1-position {
    top: 120px;
    left: 380px;
    width: 257px;
    height: 35px;
    text-align: right;
    justify-content: right;
}

.card21-label2-position {
    top: 380px;
    left: 570px;
    width: 100px;
    height: 40px;
    /* border: red solid 0.5px; */
    transform: rotate(-90deg);
}

.card21-fixed-label1-position {
    top: 151px;
    left: 53px;
    width: 125px;
    height: 35px;
    border: solid black 4px;
    background-color: white;
    border-radius: 4px;
    font-size: 25px;
}

.card21-fixed-label2-position {
    top: 174px;
    left: 390px;
    width: 125px;
    height: 35px;
    border: solid #980002 4px;
    background-color: white;
    border-radius: 4px;
    font-size: 25px;
}

.card21-fixed-label3-position {
    top: 340px;
    left: 395px;
    width: 125px;
    height: 35px;
    border: solid #00A9CF 4px;
    background-color: white;
    border-radius: 4px;
    font-size: 25px;
}
</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card21-label1-position {
    top: 790px;
    left: 2100px;
    width: 2200px;
    height: 300px;
    text-align : right;
    justify-content: right;
    /* border: solid red; */
}

.card21-fixed-label1-position {
    top: 1030px;
    left: 365px;
    width: 890px;
    height: 300px;
    border: solid black 20px;
    background-color: white;
    border-radius: 15px;
    font-size : 200px;
}

.card21-fixed-label2-position {
    top: 1215px;
    left: 2630px;
    width: 830px;
    height: 290px;
    border: solid red 20px;
    background-color: white;
    border-radius: 15px;
    font-size : 200px;
}

.card21-fixed-label3-position {
    top: 2290px;
    left: 2620px;
    width: 850px;
    height: 300px;
    border: solid lightblue 20px;
    background-color: white;
    border-radius: 15px;
    font-size: 200px;
}
</style> -->