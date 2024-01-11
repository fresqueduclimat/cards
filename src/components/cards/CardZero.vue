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
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || "png",
        };
    },
    computed: {
        backgroundFrontImageUrl() {
            return require(`@/assets/${this.imageType}/C0-back.${this.imageType}`);
        },
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card0-label0-position {
    top: 40px;
    left: 51px;
    width: 484px;
    height: 44.7px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    /* font-size: 200px; */
    font-size: 255.4px;
}

.card0-label1-position {
    top: 84.3px;
    left: 50.7px;
    width: 484px;
    height: 34.4px;
    text-align: left;
    /* border: red solid 0.5px; */
    font-size: 13.7px;
}

.card0-label2-position {
    top: 273.6px;
    left: 421.5px;
    width: 116px;
    height: 58px;
    transform: rotate(15deg);
    /* border: red solid 0.5px; */
}
.card0-label3-position {
    top: 127.2px;
    left: 50.7px;
    width: 484px;
    height: 34.4px;
    text-align: left;
    /* border: red solid 0.5px; */
    font-size: 13.7px;
}

.card0-label4-position {
    top: 169.4px;
    left: 50.7px;
    width: 584px;
    height: 17px;
    text-align: left;
    /* border: red solid 0.5px; */
    font-size: 13.7px;
}

.card0-label5-position {
    top: 193.5px;
    left: 50.7px;
    width: 484px;
    height: 51.6px;
    text-align: left;
    /* border: red solid 0.5px; */
    font-size: 13.7px;
}

.card0-label6-position {
    top: 343px;
    left: 53px;
    width: 82.5px;
    height: 19px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: 12.9px;
}

.card0-label7-position {
    top: 339px;
    left: 142.7px;
    width: 82.5px;
    height: 27.5px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: 12.9px;
}

.card0-label8-position {
    top: 343px;
    left: 230.5px;
    width: 82.5px;
    height: 19px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: 12.9px;
}

.card0-label9-position {
    top: 343px;
    left: 320px;
    width: 82.5px;
    height: 19px;
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: 12.9px;
}

</style>