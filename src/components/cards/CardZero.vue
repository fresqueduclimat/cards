<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card0-label0" class="horizontal-center label black card0-label0-position">
                <p id="card0-text0">{{ $t('V1C0L5') }}</p>
            </div>
            <div id="card0-label1" class="label black card0-label1-position">
                <p id="card0-text1">{{ $t('V1C0L6') + ' ' + $t('V1C0L7') + ' ' + $t('V1C0L8') + ' ' + $t('V1C0L9')}}</p>
            </div>
            <div id="card0-label2" class="label black card0-label2-position">
                <p id="card0-text2">{{ $t('V1C0L10') }}</p>
            </div>
            <div id="card0-label3" class="label black card0-label3-position">
                <p id="card0-text3">{{ $t('V1C0L11') }}</p>
            </div>
            <div id="card0-label4" class="label black card0-label4-position">
                <p id="card0-text4">{{ $t('V1C0L12') }}</p>
            </div>
            <div id="card0-label5" class="label black card0-label5-position">
                <p id="card0-text5">{{ $t('V1C0L13') }}</p>
            </div>
            <div id="card0-label6" class="label black card0-label6-position">
                <p id="card0-text6">{{ $t('V1C0L14') }}</p>
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
            return require("@/assets/C0-back.png");
        },
    },
};
</script>

<style>
.card0-label0-position {
    top: 350px;
    left: 450px;
    width: 2300px;
    height: 350px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size: 200px;
}

.card0-label1-position {
    top: 650px;
    left: 450px;
    width: 3700px;
    height: 1350px;
    text-align: left;
    font-size: 100px;
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
    left: 500px;
    width: 550px;
    height: 200px;
    color : red;
    /* font-weight: 900; */
    /* border : red solid; */
    font-size: 100px;
}

.card0-label4-position {
    top: 2700px;
    left: 1200px;
    width: 550px;
    height: 200px;
    color : red;
    /* font-weight: 900; */
    /* border : red solid; */
}

.card0-label5-position {
    top: 2700px;
    left: 1850px;
    width: 550px;
    height: 200px;
    color : red;
    /* font-weight: 900; */
    /* border : red solid; */
}

.card0-label6-position {
    top: 2700px;
    left: 2600px;
    width: 550px;
    height: 200px;
    color : red;
    /* font-weight: 900; */
    /* border : red solid; */
}

</style>