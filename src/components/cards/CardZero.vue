<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card0-label0" v-text-align class="horizontal-center label card0-label0-position">
                <p id="card0-text0">{{ $t('V1C0L5') }}</p>
            </div>
            <!-- <div id="card0-label1" v-text-align class="label black card0-label1-position">
                <p id="card0-text1">{{ $t('V1C0L6') + ' ' + $t('V1C0L7') + ' ' + $t('V1C0L8') + ' ' + $t('V1C0L9')}}</p>
            </div> -->
            <div id="card0-label1" v-text-align class="label black card0-label1-position">
                <p id="card0-text1">{{$t('V1C0L6')}}</p>
            </div>
            <div id="card0-label2" class="label black card0-label2-position">
                <p id="card0-text2">{{ $t('V1C0L10') }}</p>
            </div>
            <div id="card0-label3" v-text-align class="label black card0-label3-position">
                <p id="card0-text3">{{$t('V1C0L7')}}</p>
            </div>
            <div id="card0-label4" v-text-align class="label black card0-label4-position">
                <p id="card0-text4">{{$t('V1C0L8')}}</p>
            </div>
            <div id="card0-label5" v-text-align class="label black card0-label5-position">
                <p id="card0-text5">{{$t('V1C0L9')}}</p>
            </div>
            <div id="card0-label6" class="label vertical-center card0-label6-position">
                <p id="card0-text6">{{ $t('V1C0L11') }}</p>
            </div>
            <div id="card0-label7" class="label vertical-center card0-label7-position">
                <p id="card0-text7">{{ $t('V1C0L12') }}</p>
            </div>
            <div id="card0-label8" class="label vertical-center card0-label8-position">
                <p id="card0-text8">{{ $t('V1C0L13') }}</p>
            </div>
            <div id="card0-label9" class="label vertical-center card0-label9-position">
                <p id="card0-text9">{{ $t('V1C0L14') }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CardOne",
    props: {
        backgroundFrontImage: {
            type: String,
            required: true,
        },
    },
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/png/C0-back.png");
        },
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card0-label0-position {
    top: 44px;
    left: 59px;
    width: 563px;
    height: 52px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    /* font-size: 200px; */
    font-size: 297px;
}

.card0-label1-position {
    top: 98px;
    left: 59px;
    width: 563px;
    height: 40px;
    text-align: left;
    /* border: red solid 0.5px; */
    font-size: 16px;
}

.card0-label2-position {
    top: 321px;
    left: 494px;
    width: 126px;
    height: 64px;
    transform: rotate(15deg);
}
.card0-label3-position {
    top: 148px;
    left: 59px;
    width: 563px;
    height: 40px;
    text-align: left;
    /* border: red solid 0.5px; */
    font-size: 16px;
}

.card0-label4-position {
    top: 197px;
    left: 59px;
    width: 563px;
    height: 20px;
    text-align: left;
    /* border: red solid 0.5px; */
    font-size: 16px;
}

.card0-label5-position {
    top: 225px;
    left: 59px;
    width: 563px;
    height: 60px;
    text-align: left;
    /* border: red solid 0.5px; */
    font-size: 16px;
}

.card0-label6-position {
    top: 399px;
    left: 62px;
    width: 96px;
    height: 22px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: 15px;
}

.card0-label7-position {
    top: 399px;
    left: 166px;
    width: 96px;
    height: 22px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: 15px;
}

.card0-label8-position {
    top: 399px;
    left: 268px;
    width: 96px;
    height: 22px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: 15px;
}

.card0-label9-position {
    top: 399px;
    left: 372px;
    width: 96px;
    height: 22px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: 15px;
}

</style>