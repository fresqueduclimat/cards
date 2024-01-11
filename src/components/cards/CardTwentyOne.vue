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
        <div id="card21-fixed-label1" class="horizontal-center vertical-center label black card21-fixed-label1-position">
            <p id="card21-fixed-text1" class="font-small">{{$t('V1C21L3')}}</p>
        </div>
        <div id="card21-fixed-label2" class="horizontal-center vertical-center label black card21-fixed-label2-position">
            <p id="card21-fixed-text2" class="font-small">{{$t('V1C21L5')}}</p>
        </div>
        <div id="card21-fixed-label3" class="horizontal-center vertical-center label black card21-fixed-label3-position">
            <p id="card21-fixed-text3" class="font-small">{{$t('V1C21L4')}}</p>
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
    top: 103px;
    left: 326.8px;
    width: 221px;
    height: 30px;
    text-align: right;
    justify-content: right;
}

.card21-label2-position {
    top: 331.9px;
    left: 496.2px;
    width: 85px;
    height: 36px;
    transform: rotate(-90deg);
    /* border: solid red 0.2px; */
    color:grey;
    font-size:12px;
}

.card21-label3-position {
    top: 146.2px;
    left: 223.6px;
    width: 31.8px;
    height: 13.7px;
    background-color: white;
    /* border: solid red 0.2px; */
    text-align: left;
    font-size: 5px;
}

.card21-label4-position {
    top: 157.3px;
    left: 223.6px;
    width: 31.8px;
    height: 33.5px;
    background-color: white;
    /* border: solid red 0.2px; */
    text-align: left;
    color : #936D22;
    font-size: 5px;
}

.card21-label5-position {
    top: 198.6px;
    left: 223.6px;
    width: 31.8px;
    height: 33.5px;
    background-color: white;
    /* border: solid red 0.2px; */
    text-align: left;
    color : #3F635F;
    font-size: 5px;
}

.card21-fixed-label1-position {
    top: 130px;
    left: 45.6px;
    width: 107.5px;
    height: 30px;
    border: solid black 3.5px;
    background-color: white;
    border-radius: 3.5px;
    font-size: 21.5px;
}

.card21-fixed-label2-position {
    top: 151px;
    left: 335.4px;
    width: 107.5px;
    height: 30px;
    border: solid #980002 3.5px;
    background-color: white;
    border-radius: 3.5px;
    font-size: 21.5px;
}

.card21-fixed-label3-position {
    top: 294px;
    left: 341px;
    width: 107.5px;
    height: 30px;
    border: solid #00A9CF 3.5px;
    background-color: white;
    border-radius: 3.5px;
    font-size: 21.5px;
}
</style>