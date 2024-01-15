<template>
    <section data-background-size="cover">
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
            <div class="label frame-container">
                <div class="frame"></div>
            </div>
            <div class="label icons-container">
                <div class="icons"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CardOne",
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || "png",
        };
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card0-label0-position {
    top: calc(40px * var(--scale-factor));
    left: calc(51px * var(--scale-factor));
    width: calc(484px * var(--scale-factor));
    height: calc(44.7px * var(--scale-factor));
    color: red;
    font-weight: 900;
    /* border: red solid; */
    /* font-size: calc(200px * var(--scale-factor)); */
    font-size: calc(255.4px * var(--scale-factor));
}

.card0-label1-position {
    top: calc(84.3px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(484px * var(--scale-factor));
    height: calc(34.4px * var(--scale-factor));
    text-align: left;
    /* border: red solid 0.5px * var(--scale-factor)); */
    font-size: calc(13.7px * var(--scale-factor));
}

.card0-label2-position {
    top: calc(270.7px * var(--scale-factor));
    left: calc(418.5px * var(--scale-factor));
    width: calc(116px * var(--scale-factor));
    height: calc(61px * var(--scale-factor));
    font-size: calc(11.8px * var(--scale-factor));
    transform: rotate(15deg);
    /* border: red solid 0.5px; */
}
.card0-label3-position {
    top: calc(127.2px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(484px * var(--scale-factor));
    height: calc(34.4px * var(--scale-factor));
    text-align: left;
    /* border: red solid 0.5px * var(--scale-factor)); */
    font-size: calc(13.7px * var(--scale-factor));
}

.card0-label4-position {
    top: calc(169.4px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(584px * var(--scale-factor));
    height: calc(17px * var(--scale-factor));
    text-align: left;
    /* border: red solid 0.5px * var(--scale-factor)); */
    font-size: calc(13.7px * var(--scale-factor));
}

.card0-label5-position {
    top: calc(193.5px * var(--scale-factor));
    left: calc(50.7px * var(--scale-factor));
    width: calc(484px * var(--scale-factor));
    height: calc(51.6px * var(--scale-factor));
    text-align: left;
    /* border: red solid 0.5px * var(--scale-factor)); */
    font-size: calc(13.7px * var(--scale-factor));
}

.card0-label6-position {
    top: calc(343px * var(--scale-factor));
    left: calc(53px * var(--scale-factor));
    width: calc(82.5px * var(--scale-factor));
    height: calc(19px * var(--scale-factor));
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: calc(12.9px * var(--scale-factor));
}

.card0-label7-position {
    top: calc(339px * var(--scale-factor));
    left: calc(142.7px * var(--scale-factor));
    width: calc(82.5px * var(--scale-factor));
    height: calc(27.5px * var(--scale-factor));
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: calc(12.9px * var(--scale-factor));
}

.card0-label8-position {
    top: calc(343px * var(--scale-factor));
    left: calc(230.5px * var(--scale-factor));
    width: calc(82.5px * var(--scale-factor));
    height: calc(19px * var(--scale-factor));
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: calc(12.9px * var(--scale-factor));
}

.card0-label9-position {
    top: calc(343px * var(--scale-factor));
    left: calc(320px * var(--scale-factor));
    width: calc(82.5px * var(--scale-factor));
    height: calc(19px * var(--scale-factor));
    color: red;
    font-weight: 900;
    /* border: red solid; */
    font-size: calc(12.9px * var(--scale-factor));
}

.icons {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/png/C0-images.png');
    background-size: contain;
}

.icons-container {
    z-index: -1;
    top: calc(242px * var(--scale-factor));
    left: calc(44px * var(--scale-factor));
    width: calc(506px * var(--scale-factor));
    height: calc(121px * var(--scale-factor));
}
</style>