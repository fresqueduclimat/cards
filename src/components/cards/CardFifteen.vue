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
    top: 100.6px;
    left: 50.7px;
    width: 140px;
    height: 12.9px;
    justify-content: right;
    color: #FF9B00;
    /* border: solid red; */
}

.card15-label2-position {
    top: 117px;
    left: 50.7px;
    width: 140px;
    height: 12.9px;
    justify-content: right;
    /* border: solid red; */
}

.card15-label3-position {
    top: 132.4px;
    left: 50.7px;
    width: 140px;
    height: 12.9px;
    justify-content: right;
    color: #969595;
    /* border: solid red; */
}

.card15-label4-position {
    top: 147px;
    left: 50.7px;
    width: 140px;
    height: 14.9px;
    justify-content: right;
    color: #62F0F3;
    /* border: solid red; */
}

.card15-label5-position {
    top: 163.4px;
    left: 50.7px;
    width: 140px;
    height: 14.9px;
    justify-content: right;
    color: #1D5707;
    /* border: solid red 0.2px; */
}

.card15-label6-position {
    top: 179px;
    left: 50.7px;
    width: 140px;
    height: 12.9px;
    justify-content: right;
    color: #8CBA79;
    /* border: solid red 0.2px; */
}

.card15-label7-position {
    top: 194.3px;
    left: 50.7px;
    width: 140px;
    height: 12.9px;
    justify-content: right;
    color: #7AB191;
    /* border: solid red; */
}

.card15-label8-position {
    top: 209.8px;
    left: 50.7px;
    width: 140px;
    height: 12.9px;
    justify-content: right;
    color: #498DA5;
    /* border: solid red; */
}

.card15-label9-position {
    top: 225.32px;
    left: 50.7px;
    width: 140px;
    height: 13.7px;
    justify-content: right;
    color: #A6A6A6;
    /* border: solid red; */
}

.card15-label10-position {
    top: 287.9px;
    left: 56.7px;
    width: 140px;
    height: 15.4px;
    justify-content: right;
    color: #58E60F;
    /* border: solid red; */
}

.card15-label11-position {
    top: 306px;
    left: 57.7px;
    width: 140px;
    height: 15.4px;
    justify-content: right;
    color: #EE350B;
    z-index: 3; /* devant */
    /* border: solid red; */
}

.card15-label12-position {
    top: 323px;
    left: 82.7px;
    width: 115.2px;
    height: 19px;
    justify-content: right;
    color: #FE9D07;
    z-index: 3; /* devant */
    /* border: solid red 1px; */
}

.card15-label13-position {
    top: 342px;
    left: 83px;
    width: 114.3px;
    height: 15.3px;
    justify-content: right;
    color: #595959;
    /* border: solid red 1px; */
}

.card15-label14-position {
    top: 110.9px;
    left: 438.6px;
    width: 140px;
    height: 19px;
    /* border: solid red; */
}

.card15-label15-position {
    top: 132.4px;
    left: 438.6px;
    width: 140px;
    height: 19px;
    /* border: solid red; */
}

.card15-label16-position {
    top: 103.5px;
    left: 245px;
    width: 153px;
    height: 44.7px;
    color: white;
    /* border: solid red; */
}

.card15-label17-position {
    top: 320px;
    left: 242.5px;
    width: 154.2px;
    height: 44.7px;
    /* border: solid red; */
}

.card15-label18-position {
    top: 368px;
    left: 417px;
    width: 172px;
    height: 17px;
    color: grey;
    font-size: 13px;
    /* border : solid red 1px; */
}

.card15-fixed-label1-position {
    top: 234.34px;
    left: 521px;
    width: 47px;
    height: 15.5px;
    font-size: 8.6px;
    color: #980002;
    /* border: solid red 0.5px; */
}
.card15-fixed-label2-position {
    top: 256.5px;
    left: 521px;
    width: 47px;
    height: 15.5px;
    font-size: 8.6px;
    color: #DF0000;
    /* border: solid red  0.5px; */
}
.card15-fixed-label3-position {
    top: 276.5px;
    left: 522px;
    width: 47px;
    height: 15.5px;
    font-size: 8.6px;
    color : #F59527;
    /* border: solid red  0.5px; */
}
.card15-fixed-label4-position {
    top: 294.4px;
    left: 521px;
    width: 47px;
    height: 15.5px;
    font-size: 8.6px;
    color : #003466;
    /* border: solid red  0.5px; */
}
.card15-fixed-label5-position {
    top: 315.3px;
    left: 521px;
    width: 47px;
    height: 15.5px;
    font-size: 8.6px;
    color :#00A9CF;
    /* border: solid red  0.5px; */
}
.card15-fixed-label6-position {
    top: 161px;
    left: 446px;
    width: 98px;
    height: 31.8px;
    font-size: 17px;
    /* border: solid red; */
}


</style>