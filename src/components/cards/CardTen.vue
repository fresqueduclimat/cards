<template>
    <CardBase :title="$t('V3C10L0')" :content="$t('V3C10L1')" :card-number="10" :card-number-front="7" :background-front-image="`C10.${imageType}`">
        <div id="card10-label1" class="horizontal-center label black card10-label1-position">
        <p id="card10-text1" class="font-small">{{ $t('V3C10L3') }}</p>
        </div>
        <div id="card10-label2" class="horizontal-center label black card10-label2-position">
            <p id="card10-text2" class="font-small">{{ $t('V3C10L4') }}</p>
        </div>
        <div id="card10-label3" class="horizontal-center label white card10-label3-position">
            <p id="card10-text3" class="font-small">{{ $t('V3C10L5') }}</p>
        </div>
        <div id="card10-label4" class="horizontal-center label white card10-label4-position">
            <p id="card10-text4" class="font-small">{{ $t('V3C10L6') }}</p>
        </div>
        <div id="card10-label5" class="horizontal-center label white card10-label5-position">
            <p id="card10-text5" class="font-small">{{ $t('V3C10L7') }}</p>
        </div>
        <div id="card10-label6" class="horizontal-center label white card10-label6-position">
            <p id="card10-text6" class="font-small">{{ $t('V3C10L8') }}</p>
        </div>
        <template v-slot:back-content>
            <div id="card10-back-label1" class="label set-one">
                <p id="card10-back-text1" class="font-medium">{{ $t('V3C0L0') + ' ' + "1"}}</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container-one">

                <p class="label font-medium card-number black">7</p>
            </div>
            <div class="label logo-icon-container-one">
                <div class="logo-icon"></div>
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

.card10-label1-position {
    top: calc(320px * var(--scale-factor));
    left: calc(110px * var(--scale-factor));
    width: calc(80px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    justify-content: center;
    font-size: 13px;
    /* border: solid red; */
}

.card10-label1-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    color : #4dadd9;
}

.card10-label2-position {
    top: calc(255px * var(--scale-factor));
    left: calc(80px * var(--scale-factor));
    width: calc(80px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    justify-content: center;
    font-size: 13px;
    /* border: solid red; */
}

.card10-label2-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    color: #f6c206;
    /* border: solid red; */
}

.card10-label3-position {
    top: calc(260px * var(--scale-factor));
    left: calc(280px * var(--scale-factor));
    width: calc(80px * var(--scale-factor));
    height: calc(30px * var(--scale-factor));
    justify-content: center;
    font-size: 13px;
    /* border: solid red; */
}

.card10-label3-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    /* border: solid red; */
    color: #f6c206;
}

.card10-label4-position {
    top: calc(135px * var(--scale-factor));
    left: calc(168px * var(--scale-factor));
    width: calc(90px * var(--scale-factor));
    height: calc(35px * var(--scale-factor));
    justify-content: left;
    font-size: 13px;
    /* border: solid red; */
}

.card10-label4-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    /* border: solid red; */
    color: #f6c206;
}

.card10-label5-position {
    top: calc(140px * var(--scale-factor));
    left: calc(307px * var(--scale-factor));
    width: calc(66px * var(--scale-factor));
    height: calc(35px * var(--scale-factor));
    justify-content: center;
    font-size: 13px;
    /* border: solid red 0.5px; */
}

.card10-label5-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    color: #c11b2c;
}

.card10-label6-position {
    top: calc(76px * var(--scale-factor));
    left: calc(267px * var(--scale-factor));
    width: calc(97px * var(--scale-factor));
    height: calc(47px * var(--scale-factor));
    justify-content: left;
    /* border: solid red; */
    font-size: 13px;
}

.card10-label6-position p {
    font-weight: 600;
    font-family: "Urbanist", sans-serif;
    color: #c11b2c;
    /* border: solid red; */
}

</style>