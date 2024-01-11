<template>
    <CardBase :title="$t('V1C12L1')" :content="$t('V1C12L2')" :card-number="12" :background-front-image="`C12.${imageType}`">
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
            class="horizontal-center vertical-center label card12-label5-position">
            <p id="card12-text5" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card12-fixed-label1" class="horizontal-center vertical-center label white card12-fixed-label1-position">
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
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || 'png',
        };
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card12-label1-position {
    top: 191px;
    left: 203px;
    width: 165px;
    height: 31.8px;
    font-size: 18px;
    text-align: right;
}

.card12-label2-position {
    top: 249.4px;
    left: 203px;
    width: 165px;
    height: 31.8px;
    font-size: 18px;
    text-align: right;
}

.card12-label3-position {
    top: 308.7px;
    left: 203px;
    width: 165px;
    height: 31.8px;
    font-size: 18px;
    text-align: right;
}

.card12-label4-position {
    top: 142.7px;
    left: 77.4px;
    width: 438.6px;
    height: 30px;
    transform: rotate(-180deg);
}

.card12-label5-position {
    top: 366px;
    left: 359px;
    width: 172px;
    height: 17px;
    color: grey;
}

.card12-fixed-label1-position {
    top: 184px;
    left: 387px;
    width: 93.7px;
    height: 44.7px;
    font-size: 25.8px;
}

.card12-fixed-label2-position {
    top: 242px;
    left: 387px;
    width: 93.7px;
    height: 44.7px;
    font-size: 25.8px;
}

.card12-fixed-label3-position {
    top: 298px;
    left: 387px;
    width: 93.7px;
    height: 44.7px;
    font-size: 25.8px;
}
</style>