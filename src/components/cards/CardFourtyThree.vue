<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card43-label0" class="label black card43-label0-position">
                <p id="card43-text0">{{ $t('V1C99L1') }}</p>
            </div>
            <div id="card43-label1" class="label black card43-label1-position">
                <p id="card43-text1">{{ $t('V1C99L1') }}</p>
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
            return require("@/assets/png/C99.png");
        },
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card43-label0-position {
    top: 262px; /* A' = 178 * 470 / 3180 = 26.29px */
    left: 61px; /* B' = 240 * 693 / 4680 = 35.57px */
    width: 603px; /* C' = 4200 * 693 / 4680 = 628.94px */
    height: 81px; /* D' = 570 * 470 / 3180 = 83.93px */
    /* border: solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 256px;
}

.card43-label1-position {
    top: 407px; /* A' = 2770 * 470 / 3180 = 407.34px */
    left: 142px; /* B' = 555 * 693 / 4680 = 82.34px */
    width: 133px; /* C' = 1000 * 693 / 4680 = 147.84px */
    height: 33px; /* D' = 250 * 470 / 3180 = 36.98px */
    font-size: 200px;
    text-align: left;
    /* border : red solid; */
}


</style>
<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card43-label0-position {
    top: 178px;
    left: 240px;
    width: 4200px;
    height: 570px;
    /* border: solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 256px;
}
.card43-label1-position {
    top: 2770px;
    left: 555px;
    width: 1000px;
    height: 250px;
    font-size: 200px;
    text-align: left;
    /* border : red solid; */
}
</style> -->