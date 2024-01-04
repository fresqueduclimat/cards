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
    top: 222px;
    left: 236px;
    width: 192px;
    height: 37px;
    font-size: 21px;
    text-align: right;
}

.card12-label2-position {
    top: 290px;
    left: 238px;
    width: 182px;
    height: 35px;
    font-size: 21px;
    text-align: right;
}

.card12-label3-position {
    top: 359px;
    left: 238px;
    width: 182px;
    height: 35px;
    font-size: 21px;
    text-align: right;
}

.card12-label4-position {
    top: 166px;
    left: 90px;
    width: 510px;
    height: 35px;
    transform: rotate(-180deg);
}

.card12-label5-position {
    top: 407px;
    left: 272px;
    width: 200px;
    height: 20px;
    transform: rotate(7deg);
    color: grey;
}

.card12-fixed-label1-position {
    top: 213px;
    left: 450px;
    width: 109px;
    height: 52px;
    font-size: 30px;
}

.card12-fixed-label2-position {
    top: 280px;
    left: 450px;
    width: 109px;
    height: 52px;
    font-size: 30px;
}

.card12-fixed-label3-position {
    top: 345px;
    left: 450px;
    width: 109px;
    height: 52px;
    font-size: 30px;
}
</style>

<!-- <style>
.card12-label1-position {
    top: 1500px;
    left: 1600px;
    width: 1300px;
    height: 250px;
    font-size: 150px;
    text-align : right;
    /* border: solid red; */
}

.card12-label2-position {
    top: 1950px;
    left: 1600px;
    width: 1300px;
    height: 250px;
    font-size: 150px;
    text-align: right;
    /* border: solid red; */
}

.card12-label3-position {
    top: 2400px;
    left: 1600px;
    width: 1300px;
    height: 250px;
    font-size: 150px;
    text-align: right;
    /* border: solid red; */
}

.card12-label4-position {
    top: 1100px;
    left: 600px;
    width: 3500px;
    height: 250px;
    transform : rotate(-180deg);
    /* border: solid red; */
}

.card12-label5-position {
    top: 2780px;
    left: 2000px;
    width: 1700px;
    height: 200px;
    transform: rotate(7deg);
    color: grey;
    /* border: red solid; */
}

.card12-fixed-label1-position {
    top: 1440px;
    left: 3033px;
    width: 736px;
    height: 350px;
    font-size : 200px;
}

.card12-fixed-label2-position {
    top: 1890px;
    left: 3033px;
    width: 736px;
    height: 350px;
    font-size : 200px;
    /* border: red solid; */
}

.card12-fixed-label3-position {
    top: 2330px;
    left: 3033px;
    width: 736px;
    height: 350px;
    font-size: 200px;
    /* border: red solid; */
}

</style> -->