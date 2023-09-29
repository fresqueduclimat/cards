<template>
    <CardBase :title="$t('V1C14L1')" :content="$t('V1C14L2')" :card-number="14" :background-front-image="'C14.png'" >
        <div id="card14-label1" v-text-align class="horizontal-center label black card14-label1-position">
            <p id="card14-text1" class="font-big">{{ $t('V1C14L3') }}</p>
        </div>
        <div id="card14-label2" v-text-align class="horizontal-center label black card14-label2-position">
            <p id="card14-text2" class="font-big">{{ $t('V1C14L4') }}</p>
        </div>
        <div id="card14-label3" v-text-align class="horizontal-center label black label5 card14-label3-position">
            <p id="card14-text3" class="font-big">{{ $t('V1C14L5') }}</p>
        </div>
        <div id="card14-label4" v-text-align class="horizontal-center label black label5 card14-label4-position">
            <p id="card14-text4" class="font-big">{{ $t('V1C14L6') }}</p>
        </div>
        <div id="card14-label5"
            class="horizontal-center vertical-center label black label5 card14-label5-position">
            <p id="card14-text5" class="font-small">{{ $t('V1C14L11') }}</p>
        </div>
        <div id="card14-label6"
            class="horizontal-center vertical-center label label5 card14-label6-position">
            <p id="card14-text6" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card14-fixed-label1" class="horizontal-center vertical-center label white card14-fixed-label1-position">
            <p id="card14-fixed-text1" class="font-small">91%</p>
        </div>
        <div id="card14-fixed-label2" class="horizontal-center vertical-center label black card14-fixed-label2-position">
            <p id="card14-fixed-text2" class="font-small">3%</p>
        </div>
        <div id="card14-fixed-label3" class="horizontal-center vertical-center label black card14-fixed-label3-position">
            <p id="card14-fixed-text3" class="font-small">5%</p>
        </div>
        <div id="card14-fixed-label4" class="horizontal-center vertical-center label white card14-fixed-label4-position">
            <p id="card14-fixed-text4" class="font-small">1%</p>
        </div>
        <template v-slot:back-content>
            <div id="card14-back-label7" class="label white set-three">
                <p id="card14-back-text7">{{ $t('V1C0L4') + ' ' + "3"}}</p>
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
.card14-label1-position {
    top: 141px;
    left: 496px;
    width: 119px;
    height: 52px;
    text-align: left;
    font-size: 20px;
    /* border: solid red; */
}

.card14-label2-position {
    top: 207px;
    left: 496px;
    width: 119px;
    height: 52px;
    text-align: left;
    font-size: 20px;
    /* border: solid red; */
}

.card14-label3-position {
    top: 274px;
    left: 496px;
    width: 119px;
    height: 52px;
    text-align: left;
    font-size: 20px;
    /* border: solid red; */
}

.card14-label4-position {
    top: 335px;
    left: 496px;
    width: 119px;
    height: 52px;
    text-align: left;
    font-size: 20px;
    /* border: solid red; */
}

.card14-label5-position {
    top: 220px;
    left: -42px;
    width: 220px;
    height: 30px;
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card14-label6-position {
    top: 244px;
    left: 493px;
    width: 289px;
    height: 30px;
    transform: rotate(-90deg);
    color : grey;
    /* border: solid red 0.5px; */
    font-size : 16px;
}

.card14-fixed-label1-position {
    top: 141px;
    left: 378px;
    width: 109px;
    height: 49px;
    font-size: 30px;
}

.card14-fixed-label2-position {
    top: 207px;
    left: 378px;
    width: 109px;
    height: 49px;
    font-size: 30px;
    /* border: red solid; */
}

.card14-fixed-label3-position {
    top: 274px;
    left: 378px;
    width: 109px;
    height: 49px;
    font-size: 30px;
    /* border: red solid; */
}

.card14-fixed-label4-position {
    top: 338px;
    left: 378px;
    width: 109px;
    height: 49px;
    font-size: 30px;
    /* border: red solid; */
}

</style>

<!-- <style>
.card14-label1-position {
    top: 950px;
    left: 3350px;
    width: 800px;
    height: 350px;
    text-align : left;
    font-size : 150px;
    /* border: solid red; */
}

.card14-label2-position {
    top: 1400px;
    left: 3350px;
    width: 800px;
    height: 350px;
    text-align : left;
    font-size : 150px;
    /* border: solid red; */
}

.card14-label3-position {
    top: 1850px;
    left: 3350px;
    width: 800px;
    height: 350px;
    text-align : left;
    font-size : 150px;
    /* border: solid red; */
}

.card14-label4-position {
    top: 2270px;
    left: 3350px;
    width: 800px;
    height: 350px;
    text-align : left;
    font-size : 150px;
    /* border: solid red; */
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
    left: 3320px;
    width: 1950px;
    height: 200px;
    transform: rotate(-90deg);
    /* border: solid red; */
}
.card14-fixed-label1-position {
    top: 950px;
    left: 2550px;
    width: 736px;
    height: 330px;
    font-size: 20px;
}

.card14-fixed-label2-position {
    top: 1390px;
    left: 2550px;
    width: 736px;
    height: 330px;
    font-size: 20px;
    /* border: red solid; */
}

.card14-fixed-label3-position {
    top: 1830px;
    left: 2550px;
    width: 736px;
    height: 330px;
    font-size: 20px;
    /* border: red solid; */
}

.card14-fixed-label4-position {
    top: 2280px;
    left: 2550px;
    width: 736px;
    height: 350px;
    font-size: 20px;
    /* border: red solid; */
}
</style> -->