<template>
    <CardBase :title="$t('V1C13L1')" :content="$t('V1C13L2')" :card-number="13" :background-front-image="`C13.${imageType}`">
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
        <div id="card13-fixed-label1" class="horizontal-center vertical-center label card13-fixed-label1-position">
            <p id="card13-fixed-text1" class="font-big">15°C</p>
        </div>
        <div id="card13-fixed-label2" class="horizontal-center vertical-center label card13-fixed-label2-position">
            <p id="card13-fixed-text2" class="font-big">-18°C</p>
        </div>
        <div id="card13-fixed-label3" class="horizontal-center vertical-center label card13-fixed-label3-position">
            <p id="card13-fixed-text3" class="font-big">°C</p>
        </div>
        <template v-slot:back-content>
            <div id="card13-back-label1" class="label white set-one">
                <p id="card13-back-text1">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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

<!-- pour une résolution de 470x693 -->
<style>
.card13-label1-position {
    top: 164px;
    left: 166px;
    width: 132px;
    height: 44px;
    /* border : solid red 0.5px; */
}

.card13-label2-position {
    top: 251px;
    left: 35px;
    width: 102px;
    height: 44px;
    /* border : solid red 0.5px; */
}

.card13-label3-position {
    top: 118px;
    left: 430px;
    width: 170px;
    height: 50px;
    /* border : solid red 0.5px; */
}

.card13-label4-position {
    top: 251px;
    left: 500px;
    width: 100px;
    height: 50px;
    /* border : solid red 0.5px; */
}

.card13-fixed-label1-position {
    top: 183px;
    left: 548px;
    width: 67px;
    height: 22px;
    font-size: 20px;
    color: white;
}

.card13-fixed-label2-position {
    top: 337px;
    left: 548px;
    width: 67px;
    height: 22px;
    font-size: 20px;
    color: white;
}

.card13-fixed-label3-position {
    top: 393px;
    left: 597px;
    width: 67px;
    height: 22px;
    font-size: 24px;
    color: white;
}
</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card13-label1-position {
    top: 1100px;
    left: 1200px;
    width: 700px;
    height: 300px;
    /* border: solid red; */
}

.card13-label2-position {
    top: 1700px;
    left: 200px;
    width: 700px;
    height: 300px;
    /* border: solid red; */
}

.card13-label3-position {
    top: 800px;
    left: 3000px;
    width: 1000px;
    height: 300px;
    /* border: solid red; */
}

.card13-label4-position {
    top: 1700px;
    left: 3300px;
    width: 800px;
    height: 300px;
    /* border: solid red; */
}
.card13-fixed-label1-position {
    top: 1260px;
    left: 3700px;
    width: 450px;
    height: 150px;
    font-size: 156px;
    color: white;
    /* border: red solid; */
}

.card13-fixed-label2-position {
    top: 2300px;
    left: 3700px;
    width: 450px;
    height: 150px;
    font-size: 156px;
    color: white;
    /* border: red solid; */
}
</style> -->
