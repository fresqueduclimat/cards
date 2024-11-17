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
    top: calc(191px * var(--scale-factor));
    left: calc(203px * var(--scale-factor));
    width: calc(165px * var(--scale-factor));
    height: calc(31.8px * var(--scale-factor));
    font-size: calc(18px * var(--scale-factor));
    text-align: right;
}

.card12-label2-position {
    top: calc(249.4px * var(--scale-factor));
    left: calc(203px * var(--scale-factor));
    width: calc(165px * var(--scale-factor));
    height: calc(31.8px * var(--scale-factor));
    font-size: calc(18px * var(--scale-factor));
    text-align: right;
}

.card12-label3-position {
    top: calc(308.7px * var(--scale-factor));
    left: calc(203px * var(--scale-factor));
    width: calc(165px * var(--scale-factor));
    height: calc(31.8px * var(--scale-factor));
    font-size: calc(18px * var(--scale-factor));
    text-align: right;
}

.card12-label4-position {
    top: calc(142.7px * var(--scale-factor));
    left: calc(77.4px * var(--scale-factor));
    width: calc(438.6px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    transform: rotate(-180deg);
}

.card12-label5-position {
    top: calc(366px * var(--scale-factor));
    left: calc(359px * var(--scale-factor));
    width: calc(172px * var(--scale-factor));
    height: calc(17px * var(--scale-factor));
    color: grey;
}

.card12-fixed-label1-position {
    top: calc(184px * var(--scale-factor));
    left: calc(387px * var(--scale-factor));
    width: calc(93.7px * var(--scale-factor));
    height: calc(44.7px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
}

.card12-fixed-label2-position {
    top: calc(242px * var(--scale-factor));
    left: calc(387px * var(--scale-factor));
    width: calc(93.7px * var(--scale-factor));
    height: calc(44.7px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
}

.card12-fixed-label3-position {
    top: calc(298px * var(--scale-factor));
    left: calc(387px * var(--scale-factor));
    width: calc(93.7px * var(--scale-factor));
    height: calc(44.7px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
}
</style>