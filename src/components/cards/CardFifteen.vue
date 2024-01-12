<template>
    <CardBase :title="$t('V1C15L1')" :content="$t('V1C15L2')" :card-number="15" :background-front-image="`C15.${imageType}`" >
        <div id="card15-label1" class="horizontal-center label card15-label1-position">
            <p id="card15-text1" class="font-small">{{ $t('V1C15L10') }}</p>
        </div>
        <div id="card15-label2" class="horizontal-center label black card15-label2-position">
            <p id="card15-text2" class="font-small">{{ $t('V1C15L11') }}</p>
        </div>
        <div id="card15-label3" class="horizontal-center label label5 card15-label3-position">
            <p id="card15-text3" class="font-small">{{ $t('V1C15L12') }}</p>
        </div>
        <div id="card15-label4" class="horizontal-center label label5 card15-label4-position">
            <p id="card15-text4" class="font-small">{{ $t('V1C15L13') }}</p>
        </div>
        <div id="card15-label5" class="horizontal-center label card15-label5-position">
            <p id="card15-text5" class="font-small">{{ $t('V1C15L14') }}</p>
        </div>
        <div id="card15-label6" class="horizontal-center label card15-label6-position">
            <p id="card15-text6" class="font-small">{{ $t('V1C15L15') }}</p>
        </div>
        <div id="card15-label7" class="horizontal-center label label5 card15-label7-position">
            <p id="card15-text7" class="font-small">{{ $t('V1C15L16') }}</p>
        </div>
        <div id="card15-label8" class="horizontal-center label label5 card15-label8-position">
            <p id="card15-text8" class="font-small">{{ $t('V1C15L17') }}</p>
        </div>
        <div id="card15-label9" class="horizontal-center label label5 card15-label9-position">
            <p id="card15-text9" class="font-small">{{ $t('V1C15L18') }}</p>
        </div>
        <div id="card15-label10" class="horizontal-center label label5 card15-label10-position">
            <p id="card15-text10" class="font-small">{{ $t('V1C15L20') }}</p>
        </div>
        <div id="card15-label11" class="horizontal-center label card15-label11-position">
            <p id="card15-text11" class="font-small">{{ $t('V1C15L21') }}</p>
        </div>
        <div id="card15-label12" class="horizontal-center label label5 card15-label12-position">
            <p id="card15-text12" class="font-small">{{ $t('V1C15L22') }}</p>
        </div>
        <div id="card15-label13" class="horizontal-center label label5 card15-label13-position">
            <p id="card15-text13" class="font-small">{{ $t('V1C15L23') }}</p>
        </div>
        <div id="card15-label14" class="horizontal-center label black label5 card15-label14-position">
            <p id="card15-text14" class="font-small">{{ $t('V1C15L30') }}</p>
        </div>
        <div id="card15-label15" class="horizontal-center label black label5 card15-label15-position">
            <p id="card15-text15" class="font-small">{{ $t('V1C15L31') }}</p>
        </div>
        <div id="card15-label16" class="horizontal-center vertical-center label label5 card15-label16-position">
            <p id="card15-text16" class="font-big">{{ $t('V1C15L3') }}</p>
        </div>
        <div id="card15-label17" class="horizontal-center vertical-center label black label5 card15-label17-position">
            <p id="card15-text17" class="font-big">{{ $t('V1C15L4') }}</p>
        </div>
        <div id="card15-label18" class="horizontal-center vertical-center label card15-label18-position">
            <p id="card15-text18" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card15-fixed-label1" class="horizontal-center vertical-center label card15-fixed-label1-position">
            <p id="card15-fixed-text1" class="font-big">SSP5-8.5</p>
        </div>
        <div id="card15-fixed-label2" class="horizontal-center vertical-center label card15-fixed-label2-position">
            <p id="card15-fixed-text2" class="font-big">SSP3-7.0</p>
        </div>
        <div id="card15-fixed-label3" class="horizontal-center vertical-center label card15-fixed-label3-position">
            <p id="card15-fixed-text3" class="font-big">SSP2-4.5</p>
        </div>
        <div id="card15-fixed-label4" class="horizontal-center vertical-center label card15-fixed-label4-position">
            <p id="card15-fixed-text4" class="font-big">SSP1-2.6</p>
        </div>
        <div id="card15-fixed-label5" class="horizontal-center vertical-center label card15-fixed-label5-position">
            <p id="card15-fixed-text5" class="font-big">SSP1-1.9</p>
        </div>
        <div id="card15-fixed-label6" class="horizontal-center vertical-center label black card15-fixed-label6-position">
            <p id="card15-fixed-text6" class="font-small">2.8 W/m<sup>2</sup></p>
        </div>
        <template v-slot:back-content>
            <div id="card15-back-label8" class="label white set-three">
                <p id="card15-back-text8">{{ $t('V1C0L4') + ' ' + "3"}}</p>
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
.card15-label1-position {
    top: calc(100.6px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(12.9px * var(--scale-factor));
    justify-content: right;
    color: #FF9B00;
    /* border: solid red; */
}

.card15-label2-position {
    top: calc(117px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(12.9px * var(--scale-factor));
    justify-content: right;
    /* border: solid red; */
}

.card15-label3-position {
    top: calc(132.4px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(12.9px * var(--scale-factor));
    justify-content: right;
    color: #969595;
    /* border: solid red; */
}

.card15-label4-position {
    top: calc(147px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(14.9px * var(--scale-factor));
    justify-content: right;
    color: #62F0F3;
    /* border: solid red; */
}

.card15-label5-position {
    top: calc(163.4px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(14.9px * var(--scale-factor));
    justify-content: right;
    color: #1D5707;
    /* border: solid red 0.2px * var(--scale-factor)); */
}

.card15-label6-position {
    top: calc(179px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(12.9px * var(--scale-factor));
    justify-content: right;
    color: #8CBA79;
    /* border: solid red 0.2px * var(--scale-factor)); */
}

.card15-label7-position {
    top: calc(194.3px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(12.9px * var(--scale-factor));
    justify-content: right;
    color: #7AB191;
    /* border: solid red; */
}

.card15-label8-position {
    top: calc(209.8px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(12.9px * var(--scale-factor));
    justify-content: right;
    color: #498DA5;
    /* border: solid red; */
}

.card15-label9-position {
    top: calc(225.32px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(13.7px * var(--scale-factor));
    justify-content: right;
    color: #A6A6A6;
    /* border: solid red; */
}

.card15-label10-position {
    top: calc(287.9px * var(--scale-factor));
    left: calc(56.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(15.4px * var(--scale-factor));
    justify-content: right;
    color: #58E60F;
    /* border: solid red; */
}

.card15-label11-position {
    top: calc(306px * var(--scale-factor));
    left: calc(57.7px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(15.4px * var(--scale-factor));
    justify-content: right;
    color: #EE350B;
    z-index: 3; /* devant */
    /* border: solid red; */
}

.card15-label12-position {
    top: calc(323px * var(--scale-factor));
    left: calc(82.7px * var(--scale-factor));
    width: calc(115.2px * var(--scale-factor));
    height: calc(19px * var(--scale-factor));
    justify-content: right;
    color: #FE9D07;
    z-index: 3; /* devant */
    /* border: solid red 1px * var(--scale-factor)); */
}

.card15-label13-position {
    top: calc(342px * var(--scale-factor));
    left: calc(83px * var(--scale-factor));
    width: calc(114.3px * var(--scale-factor));
    height: calc(15.3px * var(--scale-factor));
    justify-content: right;
    color: #595959;
    /* border: solid red 1px * var(--scale-factor)); */
}

.card15-label14-position {
    top: calc(110.9px * var(--scale-factor));
    left: calc(438.6px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(19px * var(--scale-factor));
    /* border: solid red; */
}

.card15-label15-position {
    top: calc(132.4px * var(--scale-factor));
    left: calc(438.6px * var(--scale-factor));
    width: calc(140px * var(--scale-factor));
    height: calc(19px * var(--scale-factor));
    /* border: solid red; */
}

.card15-label16-position {
    top: calc(103.5px * var(--scale-factor));
    left: calc(245px * var(--scale-factor));
    width: calc(153px * var(--scale-factor));
    height: calc(44.7px * var(--scale-factor));
    color: white;
    /* border: solid red; */
}

.card15-label17-position {
    top: calc(315px * var(--scale-factor));
    left: calc(242.5px * var(--scale-factor));
    width: calc(154.2px * var(--scale-factor));
    height: calc(44.7px * var(--scale-factor));
    /* border: solid red; */
}

.card15-label18-position {
    top: calc(368px * var(--scale-factor));
    left: calc(417px * var(--scale-factor));
    width: calc(172px * var(--scale-factor));
    height: calc(17px * var(--scale-factor));
    color: grey;
    font-size: calc(13px * var(--scale-factor));
    /* border : solid red 1px * var(--scale-factor)); */
}

.card15-fixed-label1-position {
    top: calc(234.34px * var(--scale-factor));
    left: calc(521px * var(--scale-factor));
    width: calc(47px * var(--scale-factor));
    height: calc(15.5px * var(--scale-factor));
    font-size: calc(8.6px * var(--scale-factor));
    color: #980002;
    /* border: solid red 0.5px * var(--scale-factor)); */
}
.card15-fixed-label2-position {
    top: calc(256.5px * var(--scale-factor));
    left: calc(521px * var(--scale-factor));
    width: calc(47px * var(--scale-factor));
    height: calc(15.5px * var(--scale-factor));
    font-size: calc(8.6px * var(--scale-factor));
    color: #DF0000;
    /* border: solid red  0.5px * var(--scale-factor)); */
}
.card15-fixed-label3-position {
    top: calc(276.5px * var(--scale-factor));
    left: calc(522px * var(--scale-factor));
    width: calc(47px * var(--scale-factor));
    height: calc(15.5px * var(--scale-factor));
    font-size: calc(8.6px * var(--scale-factor));
    color : #F59527;
    /* border: solid red  0.5px * var(--scale-factor)); */
}
.card15-fixed-label4-position {
    top: calc(294.4px * var(--scale-factor));
    left: calc(521px * var(--scale-factor));
    width: calc(47px * var(--scale-factor));
    height: calc(15.5px * var(--scale-factor));
    font-size: calc(8.6px * var(--scale-factor));
    color : #003466;
    /* border: solid red  0.5px * var(--scale-factor)); */
}
.card15-fixed-label5-position {
    top: calc(315.3px * var(--scale-factor));
    left: calc(521px * var(--scale-factor));
    width: calc(47px * var(--scale-factor));
    height: calc(15.5px * var(--scale-factor));
    font-size: calc(8.6px * var(--scale-factor));
    color :#00A9CF;
    /* border: solid red  0.5px * var(--scale-factor)); */
}
.card15-fixed-label6-position {
    top: calc(161px * var(--scale-factor));
    left: calc(446px * var(--scale-factor));
    width: calc(98px * var(--scale-factor));
    height: calc(31.8px * var(--scale-factor));
    font-size: calc(17px * var(--scale-factor));
    /* border: solid red; */
}


</style>