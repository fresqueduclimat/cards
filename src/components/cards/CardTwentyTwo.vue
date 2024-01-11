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
    top: 101.4px;
    left: 37.8px;
    width: 518.5px;
    height: 37.8px;
    /* border: solid red; */
}
.card22-label2-position {
    top: 150.5px;
    left: 172px;
    width: 159px;
    height: 60.2px;
    /* border: solid red; */
}
.card22-label3-position {
    top: 364px;
    left: 258px;
    width: 296.7px;
    height: 20.8px;
    text-align: right;
    color:grey;
    font-size: 13px;
    /* border: solid red 0.5px; */
}
.card22-fixed-label1-position {
    top: 265px;
    left: 113.5px;
    width: 93.7px;
    height: 37.8px;
    /* border: solid red; */
    font-size : 23.2px;
}

.card22-fixed-label2-position {
    top: 197px;
    left: 455px;
    width: 94px;
    height: 37px;
    /* border: solid red; */
    font-size : 23.2px;
}

.card22-fixed-label3-position {
    top: 309.7px;
    left: 456.2px;
    width: 93.7px;
    height: 25.8px;
    /* border: solid red; */
    font-size: 23.2px;
}
</style>
