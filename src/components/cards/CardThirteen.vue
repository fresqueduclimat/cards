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
    top: 141px;
    left: 142.7px;
    width: 113.5px;
    height: 37.8px;
    font-size: 14px;
    /* border : solid red 0.5px; */
}

.card13-label2-position {
    top: 215.8px;
    left: 30px;
    width: 87.7px;
    height: 37.8px;
    font-size: 14px;
    /* border : solid red 0.5px; */
}

.card13-label3-position {
    top: 101.5px;
    left: 370px;
    width: 146px;
    height: 37.8px;
    font-size: 14px;
    /* border : solid red 0.5px; */
}

.card13-label4-position {
    top: 215.8px;
    left: 430px;
    width: 86px;
    height: 37.8px;
    font-size: 14px;
    /* border : solid red 0.5px; */
}

.card13-fixed-label1-position {
    top: 157.4px;
    left: 473px;
    width: 57.6px;
    height: 18.9px;
    font-size: 17px;
    color: white;
}

.card13-fixed-label2-position {
    top: 289.9px;
    left: 473px;
    width: 57.6px;
    height: 18.9px;
    font-size: 17px;
    color: white;
}

.card13-fixed-label3-position {
    top: 341px;
    left: 513.4px;
    width: 57.6px;
    height: 18.9px;
    font-size: 20.6px;
    color: white;
}
</style>
