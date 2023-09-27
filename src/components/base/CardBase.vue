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
            <hr class="label border-white top-left-vertical">
            <hr class="label border-white top-left-horizontal">
            <hr class="label border-white top-right-vertical">
            <hr class="label border-white top-right-horizontal">
            <hr class="label border-white bottom-left-vertical">
            <hr class="label border-white bottom-left-horizontal">
            <hr class="label border-white bottom-right-vertical">
            <hr class="label border-white bottom-right-horizontal">
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
            <hr class="label border-black top-left-vertical">
            <hr class="label border-black top-left-horizontal">
            <hr class="label border-black top-right-vertical">
            <hr class="label border-black top-right-horizontal">
            <hr class="label border-black bottom-left-vertical">
            <hr class="label border-black bottom-left-horizontal">
            <hr class="label border-black bottom-right-vertical">
            <hr class="label border-black bottom-right-horizontal">
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
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/png/" + this.backgroundFrontImage);
        },
    },
};

</script>

<style>

.title {
    position: absolute;
    /* top: 178px;
    left: 240px;
    width: 4200px;
    height: 570px; */
    /* border: solid red; */
    top: 26px;
    left: 35px;
    width: 622px;
    height: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
}

.content {
    /* top: 900px;
    left: 350px;
    width: 4000px;
    height: 1600px; */
    /* border: solid red; */
    top: 133px;
    left: 52px;
    width: 592px;
    height: 236px;
}

.content p {
    /* font-size: 256px; */
    font-size: 156px;
}

.logo-container {
    /* top: 120px;
    left: 3415px;
    width: 970px;
    height: 375px; */
    top: 18px;
    left: 506px;
    width: 143px;
    height: 55px;
}

.logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-en.png');
    background-size: contain;
}

.url {
    font-size: 19px;
}

.back-set-container {
    /* top: 195px;
    left: 180px;
    width: 600px;
    height: 620px; */
    /* border: solid red; */
    top: 29px;
    left: 27px;
    width: 89px;
    height: 92px;
}

.front-set-container {
    /* top: 2410px;
    left: 180px;
    width: 600px;
    height: 620px; */
    /* border: solid red; */
    top: 350px;
    left: 27px;
    width: 89px;
    height: 92px;
}

.first-rectangle {
    background-color: #A4E0E7;
    /* background-color: red; */
    /* top: 50px;
    left: 100px;
    width: 380px;
    height: 507px; */
    top: 7px;
    left: 15px;
    width: 56px;
    height: 75px;
    border-radius: 10%;
    transform: rotate(10deg);
    z-index: 1; /* au fond */
}

.second-rectangle {
    background-color: #71CED0;
    /* top: 50px;
    left: 100px;
    width: 380px;
    height: 507px; */
    top: 7px;
    left: 15px;
    width: 56px;
    height: 75px;
    border-radius: 10%;
    transform: rotate(-15deg);
    z-index: 2; /* milieu */
}

.third-rectangle {
    background-color: #00C6C1;
    /* top: 65px;
    left: 105px;
    width: 380px;
    height: 507px; */
    top: 10px;
    left: 16px;
    width: 56px;
    height: 75px;
    border-radius: 10%;
    transform: rotate(-40deg);
    z-index: 3; /* devant */
}

.card-number {
    z-index: 4;
    font-size: 40px;
}

.set-one {
    /* top: 2670px;
    left: 225px;
    width: 772px;
    height: 560px; */
    top: 394px;
    left: 33px;
    width: 114px;
    height: 82px;
    background-color: red;
    padding-top: 100px;
}

.set-two {
    /* top: 2670px;
    left: 1090px;
    width: 772px;
    height: 560px; */
    top: 394px;
    left: 161px;
    width: 114px;
    height: 82px;
    background-color: red;
    padding-top: 100px;
}

.set-three {
    /* top: 2670px;
    left: 1690px;
    width: 772px;
    height: 560px; */
    top: 394px;
    left: 250px;
    width: 114px;
    height: 82px;
    background-color: red;
    padding-top: 100px;
}

.set-four {
    /* top: 2670px;
    left: 2490px;
    width: 772px;
    height: 560px; */
    top: 394px;
    left: 369px;
    width: 114px;
    height: 82px;
    background-color: red;
    padding-top: 100px;
}

.set-five {
    /* top: 2670px;
    left: 3090px;
    width: 772px;
    height: 560px; */
    top: 394px;
    left: 459px;
    width: 114px;
    height: 82px;
    background-color: red;
    padding-top: 100px;
}

.set p {
    /* font-size: 256px; */
    font-size : 156px;
}

.border-white {
    border: solid white 1px;
}

.border-black {
    border: solid black 1px;
}

.top-left-vertical {
    /* height : 90px;
    top: -100px;
    left: 95px; */
    height : 13px;
    top: -60px;
    left: 14px;
}
.top-left-horizontal {
    /* width : 90px;
    top: 35px;
    left: -35px; */
    width : 13px;
    top: -40px;
    left: -5px;
}
.top-right-vertical {
    /* height : 90px;
    top: -100px;
    left: 4580px; */
    height : 13px;
    top: -60px;
    left: 674px;
}
.top-right-horizontal {
    /* width : 90px;
    top: 35px;
    left: 4620px; */
    width : 13px;
    top: -40px;
    left: 684px;
}
.bottom-left-vertical {
    /* height : 90px;
    top: 3060px;
    left: 95px; */
    height : 13px;
    top: 452px;
    left: 14px;
}
.bottom-left-horizontal {
    /* width : 90px;
    top: 3025px;
    left: -35px; */
    width : 13px;
    top: 447px;
    left: 5px;
}
.bottom-right-vertical {
    /* height : 90px;
    top: 3060px;
    left: 4580px; */
    height : 13px;
    top: 451px;
    left: 674px;
}
.bottom-right-horizontal {
    /* width : 90px;
    top: 3025px;
    left: 4620px; */
    height : 13px;
    top: 447px;
    left: 684px;
}
</style>