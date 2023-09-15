<template>
    <CardBase :title="$t('V1C11L1')" :content="$t('V1C11L2')" :card-number="11" :background-front-image="'C11.png'" >
        <div id="card11-label1" class="horizontal-center vertical-center label card11-label1-position">
            <p id="card11-text1" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card11-fixed-label1" class="horizontal-center vertical-center label black card11-fixed-label1-position">
            <p id="card11-fixed-text1" class="font-small">280 ppm</p>
        </div>
        <div id="card11-fixed-label2" class="horizontal-center vertical-center label black card11-fixed-label2-position">
            <p id="card11-fixed-text2" class="font-small">1100 ppm</p>
        </div>
        <div id="card11-fixed-label3" class="horizontal-center vertical-center label black card11-fixed-label3-position">
            <p id="card11-fixed-text3" class="font-small">400 ppm</p>
        </div> 
        <div id="card11-fixed-label4" class="horizontal-center vertical-center label black card11-fixed-label4-position">
            <p id="card11-fixed-text4" class="font-small">415 ppm</p>
        </div> 
        <template v-slot:back-content>
            <div id="card11-back-label2" class="label white set-two">
                <p id="card11-back-text2">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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

<style>
.card11-label1-position {
    top: 770px;
    left: 1430px;
    width: 2100px;
    height: 150px;
    color: grey;
    /* border: solid red; */
}
.card11-fixed-label1-position {
    top: 2355px;
    left: 1250px;
    width: 660px;
    height: 225px;
    /* border: solid red; */
    font-size : 130px;
}

.card11-fixed-label2-position {
    top: 1000px;
    left: 2956px;
    width: 750px;
    height: 225px;
    /* border: solid red; */
    font-size : 130px;
}

.card11-fixed-label3-position {
    top: 2355px;
    left: 3220px;
    width: 760px;
    height: 225px;
    /* border: solid red; */
    font-size : 130px;
}

.card11-fixed-label4-position {
    top: 2355px;
    left: 2170px;
    width: 660px;
    height: 225px;
    /* border: solid red; */
    font-size : 130px;
}
</style>