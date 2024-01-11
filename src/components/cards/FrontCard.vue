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
                <p>{{ "Climate Fresk - " + $t('V0C0L0') + " - " + $t('V1C0L0') + " - V9.0 - 08/01/2024"}}</p>
            </div>
            <div class="label logo-container-front">
                <div class="local-logo"></div>
            </div>
            <div class="label logo-container-front-small">
                <div class="logo"></div>
            </div>
            <div class="label outline-container">
                <div class="outline">{{ $t('V1C0L15') }}</div>
            </div>
            <!-- <hr class="label border-white top-left-vertical">
            <hr class="label border-white top-left-horizontal">
            <hr class="label border-white top-right-vertical">
            <hr class="label border-white top-right-horizontal">
            <hr class="label border-white bottom-left-vertical">
            <hr class="label border-white bottom-left-horizontal">
            <hr class="label border-white bottom-right-vertical">
            <hr class="label border-white bottom-right-horizontal"> -->
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
        date: "",
        };
    },
    computed: {
        backgroundFrontImageUrl() {
            return require(`@/assets/${this.imageType}/C0.${this.imageType}`);
        },
    },
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
    top: 61px; 
    left: 82.5px;  /* B' = 580 * 693 / 4680 = 86.03 (arrondi à 96) */
    width: 209px; /* C' = 1300 * 693 / 4680 = 192.64 (arrondi à 153) */
    height: 44.7px; /* D' = 350 * 470 / 3180 = 51.77 (arrondi à 52) */
    font-size: 34.4px;
    text-align: left;
    /* border : solid red 0.5px; */
}

.front-card-label1-position {
    top: 104px;
    left: 82.5px;
    height: 44.7px;
    font-size: 25.8px;
    text-align: left;
    /* border : solid red 0.5px; */
}

.front-card-label2-position {
    top: 194px;
    left: 404px;
    width: 499px;
    height: 17px;
    font-size: 12px;
    transform: rotate(-90deg);
    font-weight: 500;
    /* border : solid red 0.5px; */
}

/* default is en logo */
.logo-container-front {
    top: 137.6px;
    left: 62px;
    width: 455px;
    height: 180px;
    /* border : solid red 0.5px; */
}

.logo-container-front-small {
    top: 1000px; /* appears if defined in logoDirective.js*/
    left: 404px;
    width: 123px;
    height: 47.3px;
    /* border : solid red 0.5px; */
}

/* default is en logo */
.outline-container {
    top: 299px;
    left: 173.7px;
    width: 369px;
    font-size: 25.8px;
    text-align:left;
    /* border : solid red 0.5px; */
}
</style>