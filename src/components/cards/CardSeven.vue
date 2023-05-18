<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card7-label0" class="title card7-label0-position">
                <h1 id="card7-text0">{{ $t('V1C7L1') }}</h1>
            </div>
            <div id="card7-label1" class="horizontal-center vertical-center label black card7-label1-position">
                <h3 id="card7-text1">{{ $t('V1C7L5') }}</h3>
            </div>
            <div id="card7-label2" class="horizontal-center vertical-left label black card7-label2-position">
                <h2 id="card7-text2">{{ $t('V1C7L3') }}</h2>
            </div>
            <div id="card7-label3" class="horizontal-center vertical-left label black label3 card7-label3-position">
                <h2 id="card7-text3">{{ $t('V1C7L4') }}</h2>
            </div>
        </div>
    </section>
    <section :data-background-image="backgroundBackImageUrl" data-background-size="cover">
    </section>
</template>

<script>
export default {
    name: "CardThirteen",
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/C7.png");
        },
        backgroundBackImageUrl() {
            return require("@/assets/C7-back.png");
        },
    },
};
</script>

<style>
.card7-label0-position {
    top: 6vh;
    left: 2vw;
    width: calc(100% - 4vw);
    height: 17vh;
    border : solid red;
}
.card7-label1-position {
    top: 24vh;
    left: 9vw;
    width: 87vw;
    height: 8vh;
}

.card7-label2-position {
    top: 64vh;
    left: 36vw;  
    width: 27vw;
    height: 10vh; 
}

.card7-label3-position {
    top: 78vh;
    left: 36vw;
    width: 27vw;
    height: 10vh;
}
</style>