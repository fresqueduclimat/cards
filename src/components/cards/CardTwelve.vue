<template>
    <CardBase :title="$t('V1C12L1')" :content="$t('V1C12L2')" :card-number="12" :background-front-image="'C12.png'">
        <div id="card12-label1" class="label black card12-label1-position">
            <p id="card12-text1" class="font-medium">{{ $t('V1C12L3') }}</p>
        </div>
        <div id="card12-label2" class="label black card12-label2-position">
            <p id="card12-text2" class="font-medium">{{ $t('V1C12L5') }}</p>
        </div>
        <div id="card12-label3"
            class="label black card12-label3-position">
            <p id="card12-text3" class="font-medium">{{ $t('V1C12L7') }}</p>
        </div>
        <div id="card12-label4"
            class="horizontal-center vertical-center label black card12-label4-position">
            <p id="card12-text4" class="font-small">{{ $t('V1C12L9') }}</p>
        </div>
        <div id="card12-label5"
            class="horizontal-center vertical-center label black card12-label5-position">
            <p id="card12-text5" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card12-fixed-label1" class="horizontal-center vertical-center label black card12-fixed-label1-position">
            <p id="card12-fixed-text1" class="font-small">1/4</p>
        </div>
        <div id="card12-fixed-label2" class="horizontal-center vertical-center label black card12-fixed-label2-position">
            <p id="card12-fixed-text2" class="font-small">1/2</p>
        </div>
        <div id="card12-fixed-label3" class="horizontal-center vertical-center label black card12-fixed-label3-position">
            <p id="card12-fixed-text3" class="font-small">1/4</p>
        </div>
        <template v-slot:back-content>
            <div id="card12-back-label6" class="label white set-two">
                <p id="card12-back-text6">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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
.card12-label1-position {
    top: 1500px;
    left: 1600px;
    width: 1300px;
    height: 250px;
    font-size: 150px;
    text-align : right;
    /* border: solid red; */
}

.card12-label2-position {
    top: 1950px;
    left: 1600px;
    width: 1300px;
    height: 250px;
    font-size: 150px;
    text-align: right;
    /* border: solid red; */
}

.card12-label3-position {
    top: 2400px;
    left: 1600px;
    width: 1300px;
    height: 250px;
    font-size: 150px;
    text-align: right;
    /* border: solid red; */
}

.card12-label4-position {
    top: 1100px;
    left: 600px;
    width: 3500px;
    height: 250px;
    transform : rotate(-180deg);
    /* border: solid red; */
}

.card12-label5-position {
    top: 2780px;
    left: 2000px;
    width: 1700px;
    height: 200px;
    transform: rotate(7deg);
    color: grey;
    /* border: red solid; */
}

.card12-fixed-label1-position {
    top: 1440px;
    left: 3033px;
    width: 736px;
    height: 350px;
    font-size : 200px;
}

.card12-fixed-label2-position {
    top: 1890px;
    left: 3033px;
    width: 736px;
    height: 350px;
    font-size : 200px;
    /* border: red solid; */
}

.card12-fixed-label3-position {
    top: 2330px;
    left: 3033px;
    width: 736px;
    height: 350px;
    font-size: 200px;
    /* border: red solid; */
}

</style>