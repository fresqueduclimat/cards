<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card0-label0" v-text-align class="horizontal-center label card0-label0-position">
                <p id="card0-text0">{{ $t('V1C0L5') }}</p>
            </div>
            <div id="card0-label1" v-text-align class="label black card0-label1-position">
                <p id="card0-text1">{{ $t('V1C0L6') + ' ' + $t('V1C0L7') + ' ' + $t('V1C0L8') + ' ' + $t('V1C0L9')}}</p>
            </div>
            <div id="card0-label2" class="label black card0-label2-position">
                <p id="card0-text2">{{ $t('V1C0L10') }}</p>
            </div>
            <div id="card0-label3" class="label card0-label3-position">
                <p id="card0-text3">{{ $t('V1C0L11') }}</p>
            </div>
            <div id="card0-label3" class="label card0-label4-position">
                <p id="card0-text3">{{ $t('V1C0L12') }}</p>
            </div>
            <div id="card0-label3" class="label card0-label5-position">
                <p id="card0-text3">{{ $t('V1C0L13') }}</p>
            </div>
            <div id="card0-label3" class="label card0-label6-position">
                <p id="card0-text3">{{ $t('V1C0L14') }}</p>
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
            return require("@/assets/svg/C0-back.svg");
        },
    },
};
</script>

<style>
.card0-label0-position {
    top: 300px;
    left: 400px;
    width: 3800px;
    height: 350px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size: 200px;
}

.card0-label1-position {
    top: 660px;
    left: 400px;
    width: 3800px;
    height: 1250px;
    text-align: left;
    font-size: 200px;
    /* border : red solid; */
}

.card0-label2-position {
    top: 2150px;
    left: 3320px;
    width: 850px;
    height: 430px;
    transform: rotate(15deg);
    
}

.card0-label3-position {
    top: 2700px;
    left: 420px;
    width: 650px;
    height: 150px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size: 100px;
}

.card0-label4-position {
    top: 2700px;
    left: 1100px;
    width: 650px;
    height: 150px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size: 100px;
}

.card0-label5-position {
    top: 2700px;
    left: 1780px;
    width: 650px;
    height: 150px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size:100px;
}

.card0-label6-position {
    top: 2700px;
    left: 2480px;
    width: 650px;
    height: 150px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size:100px;
}

</style>