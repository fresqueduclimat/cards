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
    /* border: solid red 0.5px * var(--scale-factor)); */
    top: calc(21.5px * var(--scale-factor));
    left: calc(30.1px * var(--scale-factor));
    width: calc(535px * var(--scale-factor));
    height: calc(72.2px * var(--scale-factor));
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
}

.content {
    /* border: solid red 0.5px * var(--scale-factor)); */
    top: calc(105.8px * var(--scale-factor));
    left: calc(34.4px * var(--scale-factor));
    width: calc(533.2px * var(--scale-factor));
    height: calc(228px * var(--scale-factor));
}

.content p {
    /* font-size: calc(256px * var(--scale-factor)); */
    font-size: calc(33px * var(--scale-factor));
}

/* default is en logo */
.logo-container {
    top: calc(16px * var(--scale-factor));
    left: calc(435px * var(--scale-factor));
    width: calc(123px * var(--scale-factor));
    height: calc(47px * var(--scale-factor));
}

.logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-fr.png');
    background-size: contain;
}

.url {
    font-size: calc(16.3px * var(--scale-factor));
}

.back-set-container {
    /* border: solid red; */
    top: calc(25px * var(--scale-factor));
    left: calc(23.2px * var(--scale-factor));
    width: calc(76.5px * var(--scale-factor));
    height: calc(82px * var(--scale-factor));
}

.front-set-container {
    /* border: solid red; */
    top: calc(306px * var(--scale-factor));
    left: calc(23.2px * var(--scale-factor));
    width: calc(73.1px * var(--scale-factor));
    height: calc(79px * var(--scale-factor));
}

.first-rectangle {
    background-color: #A4E0E7;
    /* background-color: red; */
    top: calc(6px * var(--scale-factor));
    left: calc(13px * var(--scale-factor));
    width: calc(48.1px * var(--scale-factor));
    height: calc(64.5px * var(--scale-factor));
    border-radius: 8.6%;
    transform: rotate(10deg);
    z-index: 1; /* au fond */
}

.second-rectangle {
    background-color: #71CED0;
    top: calc(6px * var(--scale-factor));
    left: calc(13px * var(--scale-factor));
    width: calc(48.1px * var(--scale-factor));
    height: calc(64.5px * var(--scale-factor));
    border-radius: 8.6%;
    transform: rotate(-15deg);
    z-index: 2; /* milieu */
}

.third-rectangle {
    background-color: #00C6C1;
    top: calc(8.6px * var(--scale-factor));
    left: calc(13.8px * var(--scale-factor));
    width: calc(48px * var(--scale-factor));
    height: calc(64.5px * var(--scale-factor));
    border-radius: 8.6%;
    transform: rotate(-40deg);
    z-index: 3; /* devant */
}

.card-number {
    z-index: 4;
    font-size: calc(34px * var(--scale-factor));
}

.set-one {
    top: calc(340px * var(--scale-factor));
    left: calc(28px * var(--scale-factor));
    width: calc(99px * var(--scale-factor));
    height: calc(56px * var(--scale-factor));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set-two {
    top: calc(340.5px * var(--scale-factor));
    left: calc(138.5px * var(--scale-factor));
    width: calc(100px * var(--scale-factor));
    height: calc(56px * var(--scale-factor));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set-three {
    top: calc(340.5px * var(--scale-factor));
    left: calc(248.5px * var(--scale-factor));
    width: calc(100px * var(--scale-factor));
    height: calc(56px * var(--scale-factor));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set-four {
    top: calc(340.5px * var(--scale-factor));
    left: calc(358.6px * var(--scale-factor));
    width: calc(100px * var(--scale-factor));
    height: calc(56px * var(--scale-factor));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set-five {
    top: calc(340.5px * var(--scale-factor));
    left: calc(469px * var(--scale-factor));
    width: calc(100px * var(--scale-factor));
    height: calc(56px * var(--scale-factor));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set p {
    font-size: calc(134px * var(--scale-factor));
}

.border-white {
    border: solid white 0.8px;
}

.border-black {
    border: solid black 0.8px;
}

.top-left-vertical {
    height: calc(10px * var(--scale-factor));
    top: calc(-15px * var(--scale-factor));
    left: calc(14px * var(--scale-factor));
}
.top-left-horizontal {
    width: calc(10px * var(--scale-factor));
    top: calc(5px * var(--scale-factor));
    left: calc(-5px * var(--scale-factor));
}
.top-right-vertical {
    height: calc(5px * var(--scale-factor));
    top: calc(-10px * var(--scale-factor));
    left: calc(680px * var(--scale-factor));
}
.top-right-horizontal {
    width: calc(5px * var(--scale-factor)); 
    top: calc(-1px * var(--scale-factor));
    left: calc(685px * var(--scale-factor));
}
.bottom-left-vertical {
    height: calc(10px * var(--scale-factor));
    top: calc(452px * var(--scale-factor));
    left: calc(14px * var(--scale-factor));
}
.bottom-left-horizontal {
    width: calc(10px * var(--scale-factor));
    top: calc(446px * var(--scale-factor));
    left: calc(-5px * var(--scale-factor));
}
.bottom-right-vertical {
    height: calc(10px * var(--scale-factor));
    top: calc(453px * var(--scale-factor));
    left: calc(678px * var(--scale-factor));
}
.bottom-right-horizontal {
    width: calc(10px * var(--scale-factor));
    top: calc(446px * var(--scale-factor));
    left: calc(684px * var(--scale-factor));
}
</style>