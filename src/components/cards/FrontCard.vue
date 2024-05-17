<template>
    <section data-background-size="cover">
        <div class="container">
            <div class="label black front-card-label0-position">
                <p>{{ $t('V0C0L0') }}</p>
            </div>
            <div class="label black front-card-label1-position">
                <p>{{ $t('V1C0L0') }}</p>
            </div>
            <div class="label white front-card-label2-position">
                <p>{{ "Climate Fresk - " + $t('V0C0L0') + " - " + $t('V1C0L0') + " - V9.0 - 16/05/2024"}}</p>
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
            <div class="label frame-container">
                <div class="frame"></div>
            </div>
            <hr class="label border-white border-vertical top-left-vertical">
            <hr class="label border-white border-horizontal top-left-horizontal">
            <hr class="label border-white border-vertical top-right-vertical">
            <hr class="label border-white border-horizontal top-right-horizontal">
            <hr class="label border-black border-vertical bottom-left-vertical">
            <hr class="label border-black border-horizontal bottom-left-horizontal">
            <hr class="label border-black border-vertical bottom-right-vertical">
            <hr class="label border-black border-horizontal bottom-right-horizontal"> 
        </div>
    </section>
</template>

<script>
export default {
    name: "CardOne",
    data() {
        return {
        imageType: process.env.VUE_APP_IMAGE_TYPE || "png",
        date: "",
        };
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
    left: calc(402px * var(--scale-factor));
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
    width: calc(122px * var(--scale-factor));
    height: calc(47.3px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

/* default is en logo */
.outline-container {
    background-color: white;
    top: calc(299px * var(--scale-factor));
    left: calc(173.7px * var(--scale-factor));
    width: calc(369px * var(--scale-factor));
    font-size: calc(25.8px * var(--scale-factor));
    text-align:left;
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.frame-container {
    z-index: -1;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-top: calc(39px * var(--scale-factor)) solid #00acb3;
    border-left: calc(39px * var(--scale-factor)) solid #00acb3;
    border-bottom: calc(39px * var(--scale-factor)) solid #e30613;
    border-right: calc(39px * var(--scale-factor)) solid #e30613;
}

section hr.label {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-style: none;
    overflow: hidden;
    unicode-bidi: normal;
}
hr.label.border-white.top-left-vertical {
    border-top: 0.1px solid white;
    border-left: 0.1px solid white;
}

hr.label.border-white.top-left-horizontal {
    border-top: 0.1px solid white;
    border-left: 0.1px solid white;
}

hr.label.border-white.top-right-vertical {
    border-top: 0.1px solid white;
    border-right: 0.1px solid white;
}

hr.label.border-white.top-right-horizontal {
    border-top: 0.1px solid white;
    border-right: 0.1px solid white;
}

hr.label.border-black.bottom-left-vertical {
    border-bottom: 0.1px solid black;
    border-left: 0.1px solid black;
}

hr.label.border-black.bottom-left-horizontal {
    border-bottom: 0.1px solid black;
    border-left: 0.1px solid black;
}

hr.label.border-black.bottom-right-vertical {
    border-bottom: 0.1px solid black;
    border-right: 0.1px solid black;
}

hr.label.border-black.bottom-right-horizontal {
    border-bottom: 0.1px solid black;
    border-right: 0.1px solid black;
}

/* 1 */
.top-left-horizontal {
    /* width: calc(597px* var(--scale-factor)); */
    width : 7px;
    top: 14px;
    left: 0px;
}
/* 2 */
.top-left-vertical {
    /* height: calc(408px * var(--scale-factor)); */
    height: 7px;
    top: 0px;
    left: 15px;
}
/* 3 */
.bottom-left-horizontal {
    width : 7px;
    top: calc(calc(408px * var(--scale-factor)) - 15px);
    left: 0px
}
/* 4 */
.top-right-vertical {
    height: 7px;
    top: 0px;
    left: calc(calc(597px* var(--scale-factor)) - 14px);
}
.top-right-horizontal {
    width : 7px;
    top: 14px;
    left: calc(calc(597px* var(--scale-factor)) - 7px);
}
 .bottom-left-vertical {
    height: 7px;
    top: calc(calc(408px * var(--scale-factor)) - 7px);
    left: 15px;
}
.bottom-right-vertical {
    height: 7px;
    top: calc(calc(408px * var(--scale-factor)) - 9px);
    left: calc(calc(597px* var(--scale-factor)) - 14px);
}
.bottom-right-horizontal {
    width: 7px;
    top: calc(calc(408px * var(--scale-factor)) - 15px);
    left: calc(calc(597px* var(--scale-factor)) - 7px);
}
</style>