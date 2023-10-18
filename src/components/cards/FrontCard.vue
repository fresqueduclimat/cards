<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div class="label black front-card-label0-position">
                <p>{{ $t('V0C0L0') }}</p>
            </div>
            <div class="label black front-card-label1-position">
                <p>{{ $t('V1C0L0') }}</p>
            </div>
            <div class="label white front-card-label2-position">
                <p>{{ "Climate Fresk - " + $t('V0C0L0') + " - Adults - V8.4- 09/09/2024"}}</p>
            </div>
            <div class="label logo-container-front">
                <div class="logo"></div>
            </div>
            <div class="label outline-container">
                <div class="outline">All the cards are in your hands!</div>
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
            return require("@/assets/png/C0.png");
        },
    },
    data: () => ({
          date: ''
        }),
    methods: {
          printDate: function () {
            return new Date().toLocaleDateString();
          }
        },
    mounted: function () {
        this.date = this.printDate();
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.front-card-label0-position {
    top: 81px;   /* A' = 550 * 470 / 3180 = 80.92 (arrondi à 81) */
    left: 96px;  /* B' = 580 * 693 / 4680 = 86.03 (arrondi à 96) */
    width: 153px; /* C' = 1300 * 693 / 4680 = 192.64 (arrondi à 153) */
    height: 52px; /* D' = 350 * 470 / 3180 = 51.77 (arrondi à 52) */
    font-size: 40px;
    text-align: left;
    /* border : solid red 0.5px; */
}

.front-card-label1-position {
    top: 81px;
    left: 250px;
    width: 350px;
    height: 52px;
    font-size: 40px;
    text-align: right;
    /* border : solid red 0.5px; */
}

.front-card-label2-position {
    top: 225px;
    left: 470px;
    width: 380px;
    height: 20px;
    font-size: 14px;
    transform: rotate(-90deg);
    font-weight: 500;
    /* border : solid red 0.5px; */
}

.logo-container-front {
    top: 160px;
    left: 72px;
    width: 529px;
    height: 210px;
    /* border : solid red 0.5px; */
}

.outline-container {
    top: 347px;
    left: 202px;
    width: 429px;
    font-size: 30px;
    /* border : solid red 0.5px; */
}
</style>


<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.front-card-label0-position {
    top: 550px;
    left: 580px;
    width: 1300px;
    height: 350px;
    font-size: 270px;
    text-align: left;
}

.front-card-label1-position {
    top: 550px;
    left: 1200px;
    width: 3000px;
    height: 350px;
    font-size: 270px;
    text-align: right;
}

.front-card-label2-position {
    top: 1515px;
    left: 3170px;
    width: 2580px;
    height: 150px;
    font-size: 95px;
    /* border: solid white; */
    transform: rotate(-90deg);

}

.logo-container-front {
    top: 955px;
    left: 300px;
    width: 3650px;
    height: 1550px;
    /* border :solid red; */
}

.outline-container {
    top: 2290px;
    left: 1400px;
    font-size: 200px;
}

</style> -->