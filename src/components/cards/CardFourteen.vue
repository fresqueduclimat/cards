<template>
    <CardBase :title="$t('V1C14L1')" :content="$t('V1C14L2')" :card-number="14" :background-front-image="`C14.${imageType}`" >
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
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || 'png',
        };
    },
};
</script>

<style>
.card14-label1-position {
    top: calc(126.2px * var(--scale-factor));
    left: calc(427.5px * var(--scale-factor));
    width: calc(102.3px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    text-align: left;
    font-size: calc(17px * var(--scale-factor));
    /* border: solid red; */
}

.card14-label2-position {
    top: calc(182px * var(--scale-factor));
    left: calc(427.5px * var(--scale-factor));
    width: calc(102.3px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    text-align: left;
    font-size: calc(17px * var(--scale-factor));
    /* border: solid red; */
}

.card14-label3-position {
    top: calc(240.6px * var(--scale-factor));
    left: calc(427.5px * var(--scale-factor));
    width: calc(102.3px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    text-align: left;
    font-size: calc(20px * var(--scale-factor));
    /* border: solid red; */
}

.card14-label4-position {
    top: calc(296px * var(--scale-factor));
    left: calc(427.5px * var(--scale-factor));
    width: calc(98.3px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    text-align: left;
    font-size: calc(20px * var(--scale-factor));
    /* border: solid red 1px * var(--scale-factor)); */
}

.card14-label5-position {
    top: calc(189.2px * var(--scale-factor));
    left: calc(-36.1px * var(--scale-factor));
    width: calc(189.2px * var(--scale-factor));
    height: calc(25.8px * var(--scale-factor));
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card14-label6-position {
    top: calc(210px * var(--scale-factor));
    left: calc(424px * var(--scale-factor));
    width: calc(248.5px * var(--scale-factor));
    height: calc(25.8px * var(--scale-factor));
    transform: rotate(-90deg);
    color : grey;
    /* border: solid red 0.5px * var(--scale-factor)); */
    font-size: calc(16px * var(--scale-factor));
}

.card14-fixed-label1-position {
    top: calc(123.2px * var(--scale-factor));
    left: calc(327px * var(--scale-factor));
    width: calc(93.7px * var(--scale-factor));
    height: calc(42px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
}

.card14-fixed-label2-position {
    top: calc(180px * var(--scale-factor));
    left: calc(327px * var(--scale-factor));
    width: calc(93.7px * var(--scale-factor));
    height: calc(42px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
    /* border: red solid; */
}

.card14-fixed-label3-position {
    top: calc(236.6px * var(--scale-factor));
    left: calc(327px * var(--scale-factor));
    width: calc(93.7px * var(--scale-factor));
    height: calc(42px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
    /* border: red solid; */
}

.card14-fixed-label4-position {
    top: calc(293.7px * var(--scale-factor));
    left: calc(327px * var(--scale-factor));
    width: calc(93.7px * var(--scale-factor));
    height: calc(42px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
    /* border: red solid; */
}

</style>

<!-- <style>
.card14-label1-position {
    top: calc(950px * var(--scale-factor));
    left: calc(3350px * var(--scale-factor));
    width: calc(800px * var(--scale-factor));
    height: calc(350px * var(--scale-factor));
    text-align : left;
    font-size: calc(150px * var(--scale-factor));
    /* border: solid red; */
}

.card14-label2-position {
    top: calc(1400px * var(--scale-factor));
    left: calc(3350px * var(--scale-factor));
    width: calc(800px * var(--scale-factor));
    height: calc(350px * var(--scale-factor));
    text-align : left;
    font-size: calc(150px * var(--scale-factor));
    /* border: solid red; */
}

.card14-label3-position {
    top: calc(1850px * var(--scale-factor));
    left: calc(3350px * var(--scale-factor));
    width: calc(800px * var(--scale-factor));
    height: calc(350px * var(--scale-factor));
    text-align : left;
    font-size: calc(150px * var(--scale-factor));
    /* border: solid red; */
}

.card14-label4-position {
    top: calc(2270px * var(--scale-factor));
    left: calc(3350px * var(--scale-factor));
    width: calc(800px * var(--scale-factor));
    height: calc(350px * var(--scale-factor));
    text-align : left;
    font-size: calc(150px * var(--scale-factor));
    /* border: solid red; */
}

.card14-label5-position {
    top: calc(1500px * var(--scale-factor));
    left: calc(-350px * var(--scale-factor));
    width: calc(1600px * var(--scale-factor));
    height: calc(200px * var(--scale-factor));
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card14-label6-position {
    top: calc(1650px * var(--scale-factor));
    left: calc(3320px * var(--scale-factor));
    width: calc(1950px * var(--scale-factor));
    height: calc(200px * var(--scale-factor));
    transform: rotate(-90deg);
    /* border: solid red; */
}
.card14-fixed-label1-position {
    top: calc(950px * var(--scale-factor));
    left: calc(2550px * var(--scale-factor));
    width: calc(736px * var(--scale-factor));
    height: calc(330px * var(--scale-factor));
    font-size: calc(20px * var(--scale-factor));
}

.card14-fixed-label2-position {
    top: calc(1390px * var(--scale-factor));
    left: calc(2550px * var(--scale-factor));
    width: calc(736px * var(--scale-factor));
    height: calc(330px * var(--scale-factor));
    font-size: calc(20px * var(--scale-factor));
    /* border: red solid; */
}

.card14-fixed-label3-position {
    top: calc(1830px * var(--scale-factor));
    left: calc(2550px * var(--scale-factor));
    width: calc(736px * var(--scale-factor));
    height: calc(330px * var(--scale-factor));
    font-size: calc(20px * var(--scale-factor));
    /* border: red solid; */
}

.card14-fixed-label4-position {
    top: calc(2280px * var(--scale-factor));
    left: calc(2550px * var(--scale-factor));
    width: calc(736px * var(--scale-factor));
    height: calc(350px * var(--scale-factor));
    font-size: calc(20px * var(--scale-factor));
    /* border: red solid; */
}
</style> -->