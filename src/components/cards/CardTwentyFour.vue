<template>
    <CardBase :title="$t('V1C24L1')" :content="$t('V1C24L2')" :card-number="24" :background-front-image="`C24.${imageType}`">
        <div id="card24-label1" class="horizontal-center vertical-center label black card24-label1-position">
            <p id="card24-text1" class="font-small">{{ $t('V1C24L3') }}</p>
        </div>
        <div id="card24-label2" class="horizontal-center vertical-center label card24-label2-position">
            <p id="card24-text2" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>    
        <template v-slot:back-content>
            <div id="card24-back-label3" class="label white set-two">
                <p id="card24-back-text3">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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
.card24-label1-position {
    top: calc(182.3px * var(--scale-factor));
    left: calc(-31.8px * var(--scale-factor));
    width: calc(210px * var(--scale-factor));
    height: calc(44.7px * var(--scale-factor));
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card24-label2-position {
    top: calc(108.3px * var(--scale-factor));
    left: calc(216.4px * var(--scale-factor));
    width: calc(191px * var(--scale-factor));
    height: calc(19px * var(--scale-factor));
    color: grey;
    /* border: solid red; */
}
</style>