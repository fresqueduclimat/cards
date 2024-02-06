<template>
    <CardBase :title="$t('V1C21L1')" :content="$t('V1C21L2')" :card-number="21" :background-front-image="`C21.${imageType}`"> 
        <div id="card21-label1" class="horizontal-center label black card21-label1-position">
            <p id="card21-text1" class="font-medium">{{ $t('V1C21L6') }}</p>
        </div>
        <div id="card21-label2" class="label card21-label2-position">
            <p id="card21-text2" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card21-label3" class="label black card21-label3-position">
            <p id="card21-text3" class="font-small">{{ $t('V1C21L7') }}</p>
        </div>
        <div id="card21-label4" class="label card21-label4-position">
            <p id="card21-text4" class="font-small">{{ $t('V1C21L8') }}</p>
        </div>
        <div id="card21-label5" class="label card21-label5-position">
            <p id="card21-text5" class="font-small">{{ $t('V1C21L9') }}</p>
        </div>
        <div id="card21-label6" class="horizontal-center vertical-center label black card21-label6-position">
            <p id="card21-text6" class="font-small">{{$t('V1C21L3')}}</p>
        </div>
        <div id="card21-label7" class="horizontal-center vertical-center label black card21-label7-position">
            <p id="card21-text7" class="font-small">{{$t('V1C21L5')}}</p>
        </div>
        <div id="card21-label8" class="horizontal-center vertical-center label black card21-label8-position">
            <p id="card21-text8" class="font-small">{{$t('V1C21L4')}}</p>
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
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || 'png',
        };
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card21-label1-position {
    top: calc(103px * var(--scale-factor));
    left: calc(326.8px * var(--scale-factor));
    width: calc(221px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    text-align: right;
    justify-content: right;
}

.card21-label2-position {
    top: calc(331.9px * var(--scale-factor));
    left: calc(496.2px * var(--scale-factor));
    width: calc(85px * var(--scale-factor));
    height: calc(36px * var(--scale-factor));
    transform: rotate(-90deg);
    /* border: solid red 0.2px * var(--scale-factor)); */
    color:grey;
    font-size: calc(12px * var(--scale-factor));
}

.card21-label3-position {
    top: calc(146.2px * var(--scale-factor));
    left: calc(223.6px * var(--scale-factor));
    width: calc(31.8px * var(--scale-factor));
    height: calc(13.7px * var(--scale-factor));
    background-color: white;
    /* border: solid red 0.2px * var(--scale-factor)); */
    text-align: left;
    font-size: calc(5px * var(--scale-factor));
}

.card21-label4-position {
    top: calc(157.3px * var(--scale-factor));
    left: calc(223.6px * var(--scale-factor));
    width: calc(31.8px * var(--scale-factor));
    height: calc(33.5px * var(--scale-factor));
    background-color: white;
    /* border: solid red 0.2px * var(--scale-factor)); */
    text-align: left;
    color : #936D22;
    font-size: calc(5px * var(--scale-factor));
}

.card21-label5-position {
    top: calc(198.6px * var(--scale-factor));
    left: calc(223.6px * var(--scale-factor));
    width: calc(31.8px * var(--scale-factor));
    height: calc(33.5px * var(--scale-factor));
    background-color: white;
    /* border: solid red 0.2px * var(--scale-factor)); */
    text-align: left;
    color : #3F635F;
    font-size: calc(5px * var(--scale-factor));
}

.card21-label6-position {
    top: calc(130px * var(--scale-factor));
    left: calc(45.6px * var(--scale-factor));
    width: calc(107.5px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    border: solid black 3.5px;
    background-color: white;
    border-radius: 3.5px;
    font-size: calc(21.5px * var(--scale-factor));
}

.card21-label7-position {
    top: calc(151px * var(--scale-factor));
    left: calc(335.4px * var(--scale-factor));
    width: calc(107.5px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    border: solid #980002 3.5px;
    background-color: white;
    border-radius: 3.5px;
    font-size: calc(21.5px * var(--scale-factor));
}

.card21-label8-position {
    top: calc(294px * var(--scale-factor));
    left: calc(341px * var(--scale-factor));
    width: calc(107.5px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    border: solid #00A9CF 3.5px;
    background-color: white;
    border-radius: 3.5px;
    font-size: calc(21.5px * var(--scale-factor));
}
</style>