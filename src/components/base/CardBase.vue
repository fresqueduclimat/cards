<template>
    <section :style="backgroundStyles">
        <div class="container">
            <div :id="`card${cardNumber}-label0`" class="label title">
                <h1 :id="`card${cardNumber}-text0`">{{ title }}</h1>
            </div>
            <slot></slot>
        </div>
    </section>
    <section>
        <div class="container">
            <div :id="`card${cardNumber}-titleback-label0`" class="label black title">
                <h1 :id="`card${cardNumber}-titleback-text0`">{{ title }}</h1>
            </div>
            <div :id="`card${cardNumber}-back-label0`" class="label black content">
                <p :id="`card${cardNumber}-back-text0`">{{ content }}</p>
            </div>
            <div class="label logo-container">
                <div class="logo"></div>
                <p class="url">climatefresk.org</p>
            </div>
            <div class="label logo-icon-container">
                <div class="logo-icon"></div>
            </div>
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
        cardNumberFront: {
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
    /* border: solid red 0.5px; */
    top: calc(40px * var(--scale-factor-height));
    left: calc(35.5px * var(--scale-factor-width));
    width: calc(318px * var(--scale-factor-width));
    height: calc(60px * var(--scale-factor-height));
    text-align: left;

}

.number {
    top: calc(18px * var(--scale-factor-height));
    left: calc(353px * var(--scale-factor-width));
    width: calc(20px * var(--scale-factor-width));
    height: calc(20px * var(--scale-factor-height));
    font-size : 12px;
    opacity: 0.5;
    text-align: center;
    
}

.content {
    /* border: solid red 0.5px; */
    top: calc(100px * var(--scale-factor-height));
    left: calc(35.5px * var(--scale-factor-width));
    width: calc(318px * var(--scale-factor-width));
    height: calc(190px * var(--scale-factor-height));
    text-align: left;
    line-height: 12px; 
}

.title h1 {
    font-size: calc(23px * var(--scale-factor));
}

.content p {
    /* font-size: calc(256px * var(--scale-factor)); */
    font-size: calc(20px * var(--scale-factor));
}

/* default is en logo */
.logo-container {
    top: calc(330px * var(--scale-factor-height));
    left: calc(281px * var(--scale-factor-width));
    width: calc(80px * var(--scale-factor-width));
    height: calc(31px * var(--scale-factor-height));
}

.logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-en.png');
    background-size: contain;
}

.url {
    font-size: calc(11px * var(--scale-factor));
}

.back-set-container-one {
    /* border: solid red; */
    top: calc(332px * var(--scale-factor-height));
    left: calc(33px * var(--scale-factor-width));
    width: calc(24px * var(--scale-factor-width));
    height: calc(22px * var(--scale-factor-height));
}

.back-set-container-two {
    /* border: solid red; */
    top: calc(332px * var(--scale-factor-height));
    left: calc(92px * var(--scale-factor-width));
    width: calc(24px * var(--scale-factor-width));
    height: calc(22px * var(--scale-factor-height));
}

.back-set-container-three {
    /* border: solid red; */
    top: calc(332px * var(--scale-factor-height));
    left: calc(150px * var(--scale-factor-width));
    width: calc(24px * var(--scale-factor-width));
    height: calc(22px * var(--scale-factor-height));
}

.back-set-container-four {
    /* border: solid red; */
    top: calc(332px * var(--scale-factor-height));
    left: calc(207px * var(--scale-factor-width));
    width: calc(24px * var(--scale-factor-width));
    height: calc(22px * var(--scale-factor-height));
}

.front-set-container {
    /* border: solid red; */
    top: calc(306px * var(--scale-factor-height));
    left: calc(23.2px * var(--scale-factor-width));
    width: calc(73.1px * var(--scale-factor-width));
    height: calc(79px * var(--scale-factor-height));
}

/*
.first-rectangle {
    background-color: #A4E0E7;
    top: calc(10px * var(--scale-factor-height));
    left: calc(13px * var(--scale-factor-width));
    width: calc(28px * var(--scale-factor-width));
    height: calc(38px * var(--scale-factor-height));
    border-radius: 8.6%;
    transform: rotate(10deg);
    z-index: 1; */ /* au fond */ /*
}

.second-rectangle {
    background-color: #71CED0;
    top: calc(10px * var(--scale-factor-height));
    left: calc(13px * var(--scale-factor-width));
    width: calc(28px * var(--scale-factor-width));
    height: calc(38px * var(--scale-factor-height));
    border-radius: 8.6%;
    transform: rotate(-15deg);
    z-index: 2; */ /* milieu */ /*
}

.third-rectangle {
    background-color: #00C6C1;
    top: calc(11px * var(--scale-factor-height));
    left: calc(13.8px * var(--scale-factor-width));
    width: calc(28px * var(--scale-factor-width));
    height: calc(38px * var(--scale-factor-height));
    border-radius: 8.6%;
    transform: rotate(-40deg);
    z-index: 3; */ /* devant */ /*
} */

.logo-icon-container-one {
    top: calc(326px * var(--scale-factor));
    left: calc(21px * var(--scale-factor));
    width: calc(54px * var(--scale-factor));
    height: calc(54px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.logo-icon-container-two {
    top: calc(326px * var(--scale-factor));
    left: calc(79px * var(--scale-factor));
    width: calc(54px * var(--scale-factor));
    height: calc(54px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.logo-icon-container-three {
    top: calc(326px * var(--scale-factor));
    left: calc(137px * var(--scale-factor));
    width: calc(54px * var(--scale-factor));
    height: calc(54px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.logo-icon-container-four {
    top: calc(326px * var(--scale-factor));
    left: calc(195px * var(--scale-factor));
    width: calc(54px * var(--scale-factor));
    height: calc(54px * var(--scale-factor));
    /* border : solid red 0.5px * var(--scale-factor)); */
}

.logo-icon {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-icon.png');
    background-size: contain;
}

.card-number {
    z-index: 4;
    font-size: calc(17px * var(--scale-factor));
}


.set-one {
    top: calc(355px * var(--scale-factor-height));
    left: calc(21px * var(--scale-factor-width));
    width: calc(54px * var(--scale-factor-width));
    height: calc(50px * var(--scale-factor-height));
    padding-top: 3px;
    background-color: #ffc629;
    border-radius: 3px;
    z-index: 5;
    font-size: 14px;
}


.set-two {
    top: calc(355px * var(--scale-factor-height));
    left: calc(79px * var(--scale-factor-width));
    width: calc(54px * var(--scale-factor-width));
    height: calc(50px * var(--scale-factor-height));
    padding-top: 3px;
    background-color: #ffc629;
    border-radius: 3px;
    z-index: 5;
    font-size: 14px;
}

.set-three {
    top: calc(355px * var(--scale-factor-height));
    left: calc(137px * var(--scale-factor-width));
    width: calc(54px * var(--scale-factor-width));
    height: calc(50px * var(--scale-factor-height));
    padding-top: 3px;
    background-color: #ffc629;
    border-radius: 3px;
    z-index: 5;
    font-size: 14px;
}

.set-four {
    top: calc(355px * var(--scale-factor-height));
    left: calc(195px * var(--scale-factor-width));
    width: calc(54px * var(--scale-factor-width));
    height: calc(50px * var(--scale-factor-height));
    padding-top: 3px;
    background-color: #ffc629;
    border-radius: 3px;
    z-index: 5;
    font-size: 14px;
}

.set p {
    font-size: calc(134px * var(--scale-factor));
}
</style>