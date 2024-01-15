<template>
    <CardBase :title="$t('V1C22L1')" :content="$t('V1C22L2')" :card-number="22" :background-front-image="`C22.${imageType}`">
        <div id="card22-label1" class="horizontal-center vertical-center label black card22-label1-position">
            <p id="card22-text1" class="font-small">{{ $t('V1C22L3') }}</p>
        </div>
        <div id="card22-label2" class="horizontal-center vertical-center label black card22-label2-position">
            <p id="card22-text2" class="font-small">{{ $t('V1C22L7') }}</p>
        </div>
        <div id="card22-label3" class="label card22-label3-position">
            <p id="card22-text3" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card22-fixed-label1" class="horizontal-center vertical-center label black card22-fixed-label1-position">
            <p id="card22-fixed-text1" class="font-small">20 cm</p>
        </div>
        <div id="card22-fixed-label2" class="horizontal-center vertical-center label black card22-fixed-label2-position">
            <p id="card22-fixed-text2" class="font-small">80 cm</p>
        </div>
        <div id="card22-fixed-label3" class="horizontal-center vertical-center label black card22-fixed-label3-position">
            <p id="card22-fixed-text3" class="font-small">50 cm</p>
        </div>
        <template v-slot:back-content>
            <div id="card22-back-label3" class="label white set-one">
                <p id="card22-back-text3">{{ $t('V1C0L4') + ' ' + "1"}}</p>
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
.card22-label1-position {
    top: calc(101.4px * var(--scale-factor));
    left: calc(37.8px * var(--scale-factor));
    width: calc(518.5px * var(--scale-factor));
    height: calc(37.8px * var(--scale-factor));
    /* border: solid red; */
}
.card22-label2-position {
    top: calc(150.5px * var(--scale-factor));
    left: calc(172px * var(--scale-factor));
    width: calc(158px * var(--scale-factor));
    height: calc(60.2px * var(--scale-factor));
    /* border: solid red; */
}
.card22-label3-position {
    top: calc(364px * var(--scale-factor));
    left: calc(258px * var(--scale-factor));
    width: calc(296.7px * var(--scale-factor));
    height: calc(20.7px * var(--scale-factor));
    text-align: right;
    color:grey;
    font-size: calc(13px * var(--scale-factor));
    /* border: solid red 0.5px * var(--scale-factor)); */
}
.card22-fixed-label1-position {
    top: calc(265px * var(--scale-factor));
    left: calc(113.5px * var(--scale-factor));
    width: calc(93.7px * var(--scale-factor));
    height: calc(37.8px * var(--scale-factor));
    /* border: solid red; */
    font-size: calc(23.2px * var(--scale-factor));
}

.card22-fixed-label2-position {
    top: calc(197px * var(--scale-factor));
    left: calc(455px * var(--scale-factor));
    width: calc(94px * var(--scale-factor));
    height: calc(37px * var(--scale-factor));
    /* border: solid red; */
    font-size: calc(23.2px * var(--scale-factor));
}

.card22-fixed-label3-position {
    top: calc(309.7px * var(--scale-factor));
    left: calc(456.2px * var(--scale-factor));
    width: calc(93.7px * var(--scale-factor));
    height: calc(25.8px * var(--scale-factor));
    /* border: solid red; */
    font-size: calc(23.2px * var(--scale-factor));
}
</style>
