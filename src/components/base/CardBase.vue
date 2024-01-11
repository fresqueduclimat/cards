<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div :id="`card${cardNumber}-label0`" class="title">
                <h1 :id="`card${cardNumber}-text0`">{{ title }}</h1>
            </div>
            <div class="horizontal-center vertical-center label front-set-container">
                <div class="label first-rectangle"></div>
                <div class="label second-rectangle"></div>
                <div class="label third-rectangle"></div>
                <p class="label font-medium card-number white">{{ cardNumber }}</p>
            </div>
            <!-- <hr class="label border-white top-left-vertical">
            <hr class="label border-white top-left-horizontal">
            <hr class="label border-white top-right-vertical">
            <hr class="label border-white top-right-horizontal">
            <hr class="label border-white bottom-left-vertical">
            <hr class="label border-white bottom-left-horizontal">
            <hr class="label border-white bottom-right-vertical">
            <hr class="label border-white bottom-right-horizontal"> -->
            <slot></slot>
        </div>
    </section>
    <section>
        <div class="container">
            <div :id="`card${cardNumber}-back-label0`" class="horizontal-center vertical-center label black content">
                <p :id="`card${cardNumber}-back-text0`">{{ content }}</p>
            </div>
            <div class="label logo-container">
                <div class="logo"></div>
                <p class="url">climatefresk.org</p>
            </div>
            <div class="horizontal-center vertical-center label back-set-container">
                <div class="label first-rectangle"></div>
                <div class="label second-rectangle"></div>
                <div class="label third-rectangle"></div>
                <p class="label font-medium card-number white">{{ cardNumber }}</p>
            </div>
            <!-- <hr class="label border-black top-left-vertical">
            <hr class="label border-black top-left-horizontal">
            <hr class="label border-black top-right-vertical">
            <hr class="label border-black top-right-horizontal">
            <hr class="label border-black bottom-left-vertical">
            <hr class="label border-black bottom-left-horizontal">
            <hr class="label border-black bottom-right-vertical">
            <hr class="label border-black bottom-right-horizontal"> -->
            <slot name="back-content"></slot>
        </div>
    </section>
</template>


<script>
export default {
    name: "CardBase",
    props: {
        backgroundFrontImage: {
            type: String,
            required: true,
        },
        cardNumber: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || "png",
        };
    },
    computed: {
        backgroundFrontImageUrl() {
            return require(`@/assets/${this.imageType}/${this.backgroundFrontImage}`);
        },
    },
};

</script>

<style>

.title {
    position: absolute;
    /* border: solid red 0.5px; */
    top: 21.5px;
    left: 30.1px;
    width: 535px;
    height: 72.2px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
}

.content {
    /* border: solid red 0.5px; */
    top: 105.8px;
    left: 34.4px;
    width: 533.2px;
    height: 228px;
}

.content p {
    /* font-size: 256px; */
    font-size: 33px;
}

/* default is en logo */
.logo-container {
    top: 16px;
    left: 435px;
    width: 123px;
    height: 47px;
}

.logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-fr.png');
    background-size: contain;
}

.url {
    font-size: 16.3px;
}

.back-set-container {
    /* border: solid red; */
    top: 25px;
    left: 23.2px;
    width: 76.5px;
    height: 82px;
}

.front-set-container {
    /* border: solid red; */
    top: 306px;
    left: 23.2px;
    width: 73.1px;
    height: 79px;
}

.first-rectangle {
    background-color: #A4E0E7;
    /* background-color: red; */
    top: 6px;
    left: 13px;
    width: 48.1px;
    height: 64.5px;
    border-radius: 8.6%;
    transform: rotate(10deg);
    z-index: 1; /* au fond */
}

.second-rectangle {
    background-color: #71CED0;
    top: 6px;
    left: 13px;
    width: 48.1px;
    height: 64.5px;
    border-radius: 8.6%;
    transform: rotate(-15deg);
    z-index: 2; /* milieu */
}

.third-rectangle {
    background-color: #00C6C1;
    top: 8.6px;
    left: 13.8px;
    width: 48px;
    height: 64.5px;
    border-radius: 8.6%;
    transform: rotate(-40deg);
    z-index: 3; /* devant */
}

.card-number {
    z-index: 4;
    font-size: 34px;
}

.set-one {
    top: 340px;
    left: 28px;
    width: 99px;
    height: 56px;
    background-color: red;
    padding-top: 9.5px;
    font-weight: 430;
    font-size : 19px;
}

.set-two {
    top: 340.5px;
    left: 138.5px;
    width: 100px;
    height: 56px;
    background-color: red;
    padding-top: 9.5px;
    font-weight: 430;
    font-size : 19px;
}

.set-three {
    top: 340.5px;
    left: 248.5px;
    width: 100px;
    height: 56px;
    background-color: red;
    padding-top: 9.5px;
    font-weight: 430;
    font-size : 19px;
}

.set-four {
    top: 340.5px;
    left: 358.6px;
    width: 100px;
    height: 56px;
    background-color: red;
    padding-top: 9.5px;
    font-weight: 430;
    font-size : 19px;
}

.set-five {
    top: 340.5px;
    left: 469px;
    width: 100px;
    height: 56px;
    background-color: red;
    padding-top: 9.5px;
    font-weight: 430;
    font-size : 19px;
}

.set p {
    font-size : 134px;
}

.border-white {
    border: solid white 0.8px;
}

.border-black {
    border: solid black 0.8px;
}

.top-left-vertical {
    /* height : 90px;
    top: -100px;
    left: 95px; */
    height : 10px;
    top: -15px;
    left: 14px;
}
.top-left-horizontal {
    /* width : 90px;
    top: 35px;
    left: -35px; */
    width : 10px;
    top: 5px;
    left: -5px;
}
.top-right-vertical {
    /* height : 90px;
    top: -100px;
    left: 4580px; */
    /* height : 10px;
    top: -15px;
    left: 679px; */
    height : 5px;
    top: -10px;
    left: 680px;
}
.top-right-horizontal {
    /* width : 90px;
    top: 35px;
    left: 4620px; */
    /* width : 10px; 
    top : 5px;
    left : 683px;*/
    width : 5px; 
    top: -1px;
    left: 685px;
}
.bottom-left-vertical {
    /* height : 90px;
    top: 3060px;
    left: 95px; */
    height : 10px;
    top: 452px;
    left: 14px;
}
.bottom-left-horizontal {
    /* width : 90px;
    top: 3025px;
    left: -35px; */
    width : 10px;
    top: 446px;
    left: -5px;
}
.bottom-right-vertical {
    /* height : 90px;
    top: 3060px;
    left: 4580px; */
    height : 10px;
    top: 453px;
    left: 678px;
}
.bottom-right-horizontal {
    /* width : 90px;
    top: 3025px;
    left: 4620px; */
    width : 10px;
    top: 446px;
    left: 684px;
}
</style>