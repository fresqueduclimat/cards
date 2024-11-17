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
        <div id="card13-label5" class="horizontal-center vertical-center label card13-label5-position">
            <p id="card13-text5" class="font-big">{{ $t('V1C13L7') }}</p>
        </div>
        <div id="card13-label6" class="horizontal-center vertical-center label card13-label6-position">
            <p id="card13-text6" class="font-big">{{ $t('V1C13L8') }}</p>
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
    top: calc(141px * var(--scale-factor));
    left: calc(142.7px * var(--scale-factor));
    width: calc(113.5px * var(--scale-factor));
    height: calc(37.8px * var(--scale-factor));
    font-size: calc(14px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.card13-label2-position {
    top: calc(215.8px * var(--scale-factor));
    left: calc(30px * var(--scale-factor));
    width: calc(87.7px * var(--scale-factor));
    height: calc(37.8px * var(--scale-factor));
    font-size: calc(14px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.card13-label3-position {
    top: calc(101.5px * var(--scale-factor));
    left: calc(370px * var(--scale-factor));
    width: calc(146px * var(--scale-factor));
    height: calc(37.8px * var(--scale-factor));
    font-size: calc(14px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.card13-label4-position {
    top: calc(215.8px * var(--scale-factor));
    left: calc(430px * var(--scale-factor));
    width: calc(86px * var(--scale-factor));
    height: calc(37.8px * var(--scale-factor));
    font-size: calc(14px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.card13-label5-position {
    top: calc(157.4px * var(--scale-factor));
    left: calc(473px * var(--scale-factor));
    width: calc(57.6px * var(--scale-factor));
    height: calc(18.9px * var(--scale-factor));
    font-size: calc(17px * var(--scale-factor));
    color: white;
}

.card13-label6-position {
    top: calc(289.9px * var(--scale-factor));
    left: calc(473px * var(--scale-factor));
    width: calc(57.6px * var(--scale-factor));
    height: calc(18.9px * var(--scale-factor));
    font-size: calc(17px * var(--scale-factor));
    color: white;
}

.card13-fixed-label3-position {
    top: calc(341px * var(--scale-factor));
    left: calc(513.4px * var(--scale-factor));
    width: calc(57.6px * var(--scale-factor));
    height: calc(18.9px * var(--scale-factor));
    font-size: calc(20.7px * var(--scale-factor));
    color: white;
}
</style>
