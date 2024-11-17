<template>
    <CardBase :title="$t('V1C20L1')" :content="$t('V1C20L2')" :card-number="20" :background-front-image="`C20.${imageType}`">
        <div id="card20-label1" class="horizontal-center vertical-center label black card20-label1-position">
            <p id="card20-text1" class="font-small">{{ $t('V1C20L3') }}</p>
        </div>
        <div id="card20-label2" class="horizontal-center vertical-center label black card20-label2-position">
            <p id="card20-text2" class="font-small">{{ $t('V1C20L4') }}</p>
        </div>
        <div id="card20-label3"
            class="horizontal-center vertical-center label black label5 card20-label3-position">
            <p id="card20-text3" class="font-small">{{ $t('V1C20L5') }}</p>
        </div>
        <div id="card20-label4"
            class="horizontal-center vertical-center label black label5 card20-label4-position">
            <p id="card20-text4" class="font-small">{{ $t('V1C20L6') }}</p>
        </div>
        <div id="card20-label5"
            class="horizontal-center vertical-center label black label5 card20-label5-position">
            <p id="card20-text5" class="font-small">{{ $t('V1C20L7') }}</p>
        </div>
        <div id="card20-label6"
            class="horizontal-center vertical-center label black label5 card20-label6-position">
            <p id="card20-text6" class="font-small">{{ $t('V1C20L8') }}</p>
        </div>
        <template v-slot:back-content>
            <div id="card20-back-label1" class="label white set-three">
                <p id="card20-back-text1">{{ $t('V1C0L4') + ' ' + "3"}}</p>
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
.card20-label1-position {
    top: calc(172px * var(--scale-factor));
    left: calc(84.5px * var(--scale-factor));
    width: calc(120.4px * var(--scale-factor));
    height: calc(36px * var(--scale-factor));
    /* border: solid red; */
}

.card20-label2-position {
    top: calc(153px * var(--scale-factor));
    left: calc(203.8px * var(--scale-factor));
    width: calc(102px * var(--scale-factor));
    height: calc(26px * var(--scale-factor));
    /* border: solid red; */
}

.card20-label3-position {
    top: calc(140px * var(--scale-factor));
    left: calc(369px * var(--scale-factor));
    width: calc(102px * var(--scale-factor));
    height: calc(26px * var(--scale-factor));
    /* border: solid red; */
}

.card20-label4-position {
    top: calc(101.5px * var(--scale-factor));
    left: calc(460px * var(--scale-factor));
    width: calc(102px * var(--scale-factor));
    height: calc(26px * var(--scale-factor));
    /* border: solid red; */
}

.card20-label5-position {
    top: calc(263px * var(--scale-factor));
    left: calc(203.8px * var(--scale-factor));
    width: calc(102.3px * var(--scale-factor));
    height: calc(26px * var(--scale-factor));
    transform: rotate(-24deg);
    /* border: solid red; */
}

.card20-label6-position {
    top: calc(293px * var(--scale-factor));
    left: calc(460px * var(--scale-factor));
    width: calc(102.3px * var(--scale-factor));
    height: calc(26px * var(--scale-factor));
    /* border: solid red; */
}
</style>