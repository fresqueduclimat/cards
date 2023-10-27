<template>
    <CardBase :title="$t('V1C22L1')" :content="$t('V1C22L2')" :card-number="22" :background-front-image="'C22.png'">
        <div id="card22-label1" class="horizontal-center vertical-center label black card22-label1-position">
            <p id="card22-text1" class="font-small">{{ $t('V1C22L3') }}</p>
        </div>
        <div id="card22-label2" class="horizontal-center vertical-center label black card22-label2-position">
            <p id="card22-text2" class="font-small">{{ $t('V1C22L7') }}</p>
        </div>
        <div id="card22-label3" class="horizontal-center vertical-center label black card22-label3-position">
            <p id="card22-text3" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card22-fixed-label1" class="horizontal-center vertical-center label black card22-fixed-label1-position">
            <p id="card22-fixed-text1" class="font-small">20 cm</p>
        </div>
        <div id="card22-fixed-label2" class="horizontal-center vertical-center label black card22-fixed-label2-position">
            <p id="card22-fixed-text2" class="font-small">80 cm</p>
        </div>
        <div id="card22-fixed-label3" class="horizontal-center vertical-center label black card22-fixed-label3-position">
            <p id="card22-fixed-text3" class="font-small">50 cm</p>
        </div>
        <template v-slot:back-content>
            <div id="card22-back-label3" class="label white set-one">
                <p id="card22-back-text3">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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
.card22-label1-position {
    top: 118px;
    left: 44px;
    width: 603px;
    height: 44px;
    /* border: solid red; */
}
.card22-label2-position {
    top: 175px;
    left: 200px;
    width: 185px;
    height: 70px;
    /* border: solid red; */
}
.card22-label3-position {
    top: 420px;
    left: 300px;
    width: 345px;
    height: 30px;
    text-align: right;
    color:grey;
    /* border: solid red 0.5px; */
}
.card22-fixed-label1-position {
    top: 306px;
    left: 132px;
    width: 109px;
    height: 44px;
    /* border: solid red; */
    font-size : 27px;
}

.card22-fixed-label2-position {
    top: 226px;
    left: 527px;
    width: 109px;
    height: 43px;
    /* border: solid red; */
    font-size : 27px;
}

.card22-fixed-label3-position {
    top: 352px;
    left: 527px;
    width: 109px;
    height: 43px;
    /* border: solid red; */
    font-size: 27px;
}
</style>

<!-- <style>
.card22-label1-position {
    top: 800px;
    left: 300px;
    width: 4070px;
    height: 300px;
    /* border: solid red; */
}
.card22-label2-position {
    top: 1170px;
    left: 1300px;
    width: 1357.2px;
    height: 500px;
    /* border: solid red; */
}

.card22-fixed-label1-position {
    top: 2070px;
    left: 895px;
    width: 736px;
    height: 300px;
    /* border: solid red; */
    font-size : 200px;
}

.card22-fixed-label2-position {
    top: 1530px;
    left: 3560px;
    width: 735px;
    height: 290px;
    /* border: solid red; */
    font-size : 200px;
}

.card22-fixed-label3-position {
    top: 2380px;
    left: 3560px;
    width: 735px;
    height: 290px;
    /* border: solid red; */
    font-size: 200px;
}
</style> -->