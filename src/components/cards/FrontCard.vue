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
    font-size: 270px;
    text-align: left;
}

.front-card-label1-position {
    top: 81px;   /* A' = 550 * 470 / 3180 = 80.92 (arrondi à 81) */
    left: 176px; /* B' = 1200 * 693 / 4680 = 177.86 (arrondi à 176) */
    width: 357px; /* C' = 3000 * 693 / 4680 = 529.82 (arrondi à 357) */
    height: 52px; /* D' = 350 * 470 / 3180 = 51.77 (arrondi à 52) */
    font-size: 270px;
    text-align: right;
}

.front-card-label2-position {
    top: 389px;  /* A' = 1515 * 470 / 3180 = 223.11 (arrondi à 389) */
    left: 784px; /* B' = 3170 * 693 / 4680 = 468.99 (arrondi à 784) */
    width: 180px; /* C' = 2580 * 693 / 4680 = 382.24 (arrondi à 180) */
    height: 27px; /* D' = 150 * 470 / 3180 = 22.12 (arrondi à 27) */
    font-size: 95px;
    transform: rotate(-90deg);
}

.logo-container-front {
    top: 244px;  /* A' = 955 * 470 / 3180 = 140.92 (arrondi à 244) */
    left: 232px; /* B' = 300 * 693 / 4680 = 44.48 (arrondi à 232) */
    width: 537px; /* C' = 3650 * 693 / 4680 = 543.66 (arrondi à 537) */
    height: 230px; /* D' = 1550 * 470 / 3180 = 228.65 (arrondi à 230) */
}

.outline-container {
    top: 465px;  /* A' = 2290 * 470 / 3180 = 338.82 (arrondi à 465) */
    left: 363px; /* B' = 1400 * 693 / 4680 = 206.73 (arrondi à 363) */
    font-size: 200px;
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