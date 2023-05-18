<template>
    <section ref="picture" :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card5-label0" class="title card5-label0-position">
                <h1 id="card5-text0" class="font-small">{{ $t('V1C5L1') }}</h1>
            </div>
            <div id="card5-label1" class="horizontal-center vertical-center label black card5-label1-position">
                <p id="card5-text1" class="font-small">{{ $t('V1C5L5') }}</p>
            </div>
            <div id="card5-label2" class="horizontal-center vertical-center label black card5-label2-position">
                <p id="card5-text2" class="font-medium">{{ $t('V1C5L3') }}</p>
            </div>
            <div id="card5-label3" class="horizontal-center vertical-center label black label5 vertical-text card5-label3-position">
                <p id="card5-text3" class="font-small">{{ $t('V1C5L4') }}</p>
            </div>
            <div id="card5-label4" class="horizontal-center vertical-center label black label5 vertical-text card5-label4-position">
                <p id="card5-text4" class="font-small">{{ $t('V1C999L90') }}</p>
            </div>
        </div>
    </section>
    <section ref="back" :data-background-image="backgroundBackImageUrl" data-background-size="cover">
    </section>
</template>

<script>
export default {
    name: "CardThirteen",
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/C5.png");
        },
        backgroundBackImageUrl() {
            return require("@/assets/C5-back.png");
        },
    },
};
</script>

<style>
.font-medium {
    font-weight : 700;
}

.font-small {
    font-weight : 500;
}

.card5-label0-position {
    top: 6vh;
    left: 2vw;
    width: calc(100% - 4vw);
    height: 17vh;
    border : solid red;
}

.card5-label1-position {
    top: 30vh;
    left: 26vw;
    width: 29vw;
    height: 8vh;
}

.card5-label2-position {
    top: 48vh;
    left: 37vw;
    width: 12vw;
    height: 4vh;
}

.card5-label3-position {
    top: 28vh;
    left: 11vw;
    width: 4vw;
    height: 47vh;
}

.card5-label4-position {
    top: 24vh;
    left: 82vw;
    width: 7vw;
    height: 58vh;
}
</style>