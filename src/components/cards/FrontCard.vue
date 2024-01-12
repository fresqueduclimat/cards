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
    top: calc(61px * var(--scale-factor)); 
    left: calc(82.5px * var(--scale-factor));  /* B' = 580 * 693 / 4680 = 86.03 (arrondi à 96) */
    width: calc(209px * var(--scale-factor)); /* C' = 1300 * 693 / 4680 = 192.64 (arrondi à 153) */
    height: calc(44.7px * var(--scale-factor)); /* D' = 350 * 470 / 3180 = 51.77 (arrondi à 52) */
    font-size: calc(34.4px * var(--scale-factor));
    text-align: left;
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.front-card-label1-position {
    top: calc(104px * var(--scale-factor));
    left: calc(82.5px * var(--scale-factor));
    height: calc(44.7px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
    text-align: left;
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.front-card-label2-position {
    top: calc(196px * var(--scale-factor));
    left: calc(404px * var(--scale-factor));
    width: calc(333px * var(--scale-factor));
    height: calc(17px * var(--scale-factor));
    font-size: calc(12px * var(--scale-factor));
    font-size: calc(12px * var(--scale-factor));
    transform: rotate(-90deg);
    font-weight: 500;
    /* border : solid red 0.5px * var(--scale-factor)); */
}

/* default is en logo */
.logo-container-front {
    top: calc(137.6px * var(--scale-factor));
    left: calc(62px * var(--scale-factor));
    width: calc(455px * var(--scale-factor));
    height: calc(180px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.logo-container-front-small {
    top: calc(1000px * var(--scale-factor)); /* appears if defined in logoDirective.js*/
    left: calc(404px * var(--scale-factor));
    width: calc(123px * var(--scale-factor));
    height: calc(47.3px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

/* default is en logo */
.outline-container {
    top: calc(299px * var(--scale-factor));
    left: calc(173.7px * var(--scale-factor));
    width: calc(369px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
    text-align:left;
    /* border : solid red 0.5px * var(--scale-factor)); */
}
</style>