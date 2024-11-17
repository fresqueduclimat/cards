<template>
    <section :style="backgroundStyles">
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
            mini: process.env.VUE_APP_MINI === 'true',
        };
    },
    computed: {
        backgroundFrontImageUrl() {
            return require(`@/assets/${this.imageType}/${this.backgroundFrontImage}`);
        },
        backgroundStyles() {
            if (this.mini) { 
                return {
                    backgroundImage: `url(${this.backgroundFrontImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top left',
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    width: '411px', // Pour occuper toute la largeur de la section parente
                    height: '279px', // Pour occuper toute la hauteur de la section parente
                };
            } else {
                return {
                    backgroundImage: `url(${this.backgroundFrontImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top left',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: '100%',
                };
            } 
        },
    },
};

</script>

<style>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 500;
}

.background {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 423px;
    height: 291px;
}

.title {
    position: absolute;
    /* border: solid red 0.5px * var(--scale-factor)); */
    top: calc(21.5px * var(--scale-factor-height));
    left: calc(30.1px * var(--scale-factor-width));
    width: calc(535px * var(--scale-factor-width));
    height: calc(72.2px * var(--scale-factor-height));
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
}

.content {
    /* border: solid red 0.5px * var(--scale-factor)); */
    top: calc(105.8px * var(--scale-factor-height));
    left: calc(34.4px * var(--scale-factor-width));
    width: calc(533.2px * var(--scale-factor-width));
    height: calc(228px * var(--scale-factor-height));
}

.content p {
    /* font-size: calc(256px * var(--scale-factor)); */
    font-size: calc(33px * var(--scale-factor));
}

/* default is en logo */
.logo-container {
    top: calc(18px * var(--scale-factor-height));
    left: calc(435px * var(--scale-factor-width));
    width: calc(123px * var(--scale-factor-width));
    height: calc(48px * var(--scale-factor-height));
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
    top: calc(25px * var(--scale-factor-height));
    left: calc(30.2px * var(--scale-factor-width));
    width: calc(76.5px * var(--scale-factor-width));
    height: calc(82px * var(--scale-factor-height));
}

.front-set-container {
    /* border: solid red; */
    top: calc(306px * var(--scale-factor-height));
    left: calc(23.2px * var(--scale-factor-width));
    width: calc(73.1px * var(--scale-factor-width));
    height: calc(79px * var(--scale-factor-height));
}

.first-rectangle {
    background-color: #A4E0E7;
    /* background-color: red; */
    top: calc(6px * var(--scale-factor-height));
    left: calc(13px * var(--scale-factor-width));
    width: calc(48.1px * var(--scale-factor-width));
    height: calc(64.5px * var(--scale-factor-height));
    border-radius: 8.6%;
    transform: rotate(10deg);
    z-index: 1; /* au fond */
}

.second-rectangle {
    background-color: #71CED0;
    top: calc(6px * var(--scale-factor-height));
    left: calc(13px * var(--scale-factor-width));
    width: calc(48.1px * var(--scale-factor-width));
    height: calc(64.5px * var(--scale-factor-height));
    border-radius: 8.6%;
    transform: rotate(-15deg);
    z-index: 2; /* milieu */
}

.third-rectangle {
    background-color: #00C6C1;
    top: calc(8.6px * var(--scale-factor-height));
    left: calc(13.8px * var(--scale-factor-width));
    width: calc(48px * var(--scale-factor-width));
    height: calc(64.5px * var(--scale-factor-height));
    border-radius: 8.6%;
    transform: rotate(-40deg);
    z-index: 3; /* devant */
}

.card-number {
    z-index: 4;
    font-size: calc(34px * var(--scale-factor));
}

.set-one {
    top: calc(340px * var(--scale-factor-height));
    left: calc(28px * var(--scale-factor-width));
    width: calc(99px * var(--scale-factor-width));
    height: calc(70px * var(--scale-factor-height));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set-two {
    top: calc(340.5px * var(--scale-factor-height));
    left: calc(138.5px * var(--scale-factor-width));
    width: calc(100px * var(--scale-factor-width));
    height: calc(70px * var(--scale-factor-height));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set-three {
    top: calc(340.5px * var(--scale-factor-height));
    left: calc(248.5px * var(--scale-factor-width));
    width: calc(100px * var(--scale-factor-width));
    height: calc(70px * var(--scale-factor-height));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set-four {
    top: calc(340.5px * var(--scale-factor-height));
    left: calc(358.6px * var(--scale-factor-width));
    width: calc(100px * var(--scale-factor-width));
    height: calc(70px * var(--scale-factor-height));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set-five {
    top: calc(340.5px * var(--scale-factor-height));
    left: calc(469px * var(--scale-factor-width));
    width: calc(100px * var(--scale-factor-width));
    height: calc(70px * var(--scale-factor-height));
    background-color: red;
    padding-top: calc(9.5px * var(--scale-factor));
    font-weight: 430;
    font-size: calc(19px * var(--scale-factor));
}

.set p {
    font-size: calc(134px * var(--scale-factor));
}
</style>