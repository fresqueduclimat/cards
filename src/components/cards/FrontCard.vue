<template>
    <section data-background-size="cover">
        <div class="container">
            <div class="label black front-card-label0-position">
                <p>{{ $t('V3C0L1') }}</p>
            </div>
            <div class="label black front-card-label1-position">
                <p>{{ $t('V3C0L2') }}</p>
            </div>
            <div class="label black front-card-label2-position">
               <p>{{ "Climate Fresk - " + $t('V3C0L1') + " - " + $t('V3C0L2') + " - " + $t('V3C0L4') + " - 10/03/2026"}}</p>
            </div>
            <div class="label logo-container-front">
                <div class="logo"></div>
            </div>
            <div class="label outline-container">
                <div class="outline">{{ $t('V3C0L5') }}</div>
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

.front-card-label0-position p{
    color : black;
}
.front-card-label1-position p{
    color : black;
}

.front-card-label0-position {
    top: calc(75px * var(--scale-factor));
    left: calc(55px * var(--scale-factor));
    width: calc(60px * var(--scale-factor));
    height: calc(40px * var(--scale-factor));
    font-size: calc(19px * var(--scale-factor));
    text-align: left;
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.front-card-label1-position {
    top: calc(75px * var(--scale-factor));
    left: calc(125px * var(--scale-factor));
    width: calc(215px * var(--scale-factor));
    height: calc(40px * var(--scale-factor));
    font-size: calc(17px * var(--scale-factor));
    text-align: right;
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.front-card-label2-position {
    top: calc(191px * var(--scale-factor));
    left: calc(200px * var(--scale-factor));
    width: calc(337px * var(--scale-factor));
    height: calc(17px * var(--scale-factor));
    font-size: calc(10px * var(--scale-factor));
    transform: rotate(-90deg);
    font-weight: 500;
    /* border : solid red 0.5px * var(--scale-factor)); */
}

/* default is en logo */
.logo-container-front {
    top: calc(155px * var(--scale-factor));
    left: calc(64px * var(--scale-factor));
    width: calc(260px * var(--scale-factor));
    height: calc(100px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
    /* display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;*/
}


/* default is en logo */
.outline-container {
    background-color: white;
    top: calc(252px * var(--scale-factor));
    left: calc(105px * var(--scale-factor));
    width: calc(234px * var(--scale-factor));
    font-size: calc(14px * var(--scale-factor));
}

.frame-container {
    z-index: -1;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-top: calc(31px * var(--scale-factor)) solid #00acb3;
    border-left: calc(31px * var(--scale-factor)) solid #00acb3;
    border-bottom: calc(31px * var(--scale-factor)) solid #ffc629;
    border-right: calc(31px * var(--scale-factor)) solid #ffc629;
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
    top: calc(calc(389px * var(--scale-factor)) - 15px);
    left: 0px
}
/* 4 */
.top-right-vertical {
    height: 7px;
    top: 0px;
    left: calc(calc(389px* var(--scale-factor)) - 14px);
}
.top-right-horizontal {
    width : 7px;
    top: 14px;
    left: calc(calc(389px* var(--scale-factor)) - 7px);
}
 .bottom-left-vertical {
    height: 7px;
    top: calc(calc(389px * var(--scale-factor)) - 7px);
    left: 15px;
}
.bottom-right-vertical {
    height: 7px;
    top: calc(calc(389px * var(--scale-factor)) - 7px);
    left: calc(calc(389px* var(--scale-factor)) - 14px);
}
.bottom-right-horizontal {
    width: 7px;
    top: calc(calc(389px * var(--scale-factor)) - 14px);
    left: calc(calc(389px* var(--scale-factor)) - 7px);
}
</style>


