<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div :id="`card${cardNumber}-label0`" class="title">
                <h1 :id="`card${cardNumber}-text0`">{{ title }}</h1>
            </div>
            <slot></slot>
        </div>
    </section>
    <section :data-background-image="backgroundBackImageUrl" data-background-size="cover">
        <div class="container">
            <div :id="`card${cardNumber}-back-label0`" class="horizontal-center vertical-center label black content">
                <p :id="`card${cardNumber}-back-text0`">{{ content }}</p>
            </div>
            <div class="label logo-container">
                <div class="logo"></div>
                <p class="url">www.climatefresk.org</p>
            </div>
            <div class="horizontal-center vertical-center label rectangle-container">
                <div class="label first-rectangle"></div>
                <div class="label second-rectangle"></div>
                <div class="label third-rectangle"></div>
                <p class="label font-medium card-number white">{{ cardNumber }}</p>
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
        backgroundBackImage: {
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
        set: {
            type: String,
            required: true,
        },
    },
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/png/" + this.backgroundFrontImage);
        },
        backgroundBackImageUrl() {
            return require("@/assets/png/" + this.backgroundBackImage);
        },
    },
};

</script>

<style>
.title {
    position: absolute;
    top: 178px;
    left: 240px;
    width: 4200px;
    height: 570px;
    /* border: solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
}

.content {
    top: 900px;
    left: 350px;
    width: 4000px;
    height: 1600px;
    /* border: solid red; */
}

.content p {
    font-size: 256px;
}

.logo-container {
    top: 120px;
    left: 3415px;
    width: 970px;
    height: 375px;
}

.logo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/logo-en.png');
    background-size: contain;
}

.url {
    font-size: 100px;
}

.rectangle-container {
    top: 195px;
    left: 180px;
    width: 600px;
    height: 620px;
    /* border: solid red; */
}

.first-rectangle {
    background-color: #A4E0E7;
    /* background-color: red; */
    top: 50px;
    left: 100px;
    width: 380px;
    height: 507px;
    border-radius: 10%;
    transform: rotate(10deg);
    z-index: 1; /* au fond */
}

.second-rectangle {
    background-color: #71CED0;
    top: 50px;
    left: 100px;
    width: 380px;
    height: 507px;
    border-radius: 10%;
    transform: rotate(-15deg);
    z-index: 2; /* milieu */
}

.third-rectangle {
    background-color: #00C6C1;
    top: 65px;
    left: 105px;
    width: 380px;
    height: 507px;
    border-radius: 10%;
    transform: rotate(-40deg);
    z-index: 3; /* devant */
}

.card-number {
    z-index: 4;
    font-size: 250px;
    font-family: "League Gothic", Impact, sans-serif;
}

.set-one {
    top: 2670px;
    left: 225px;
    width: 772px;
    height: 560px;
    background-color: red;
    padding-top: 100px;
}

.set-two {
    top: 2670px;
    left: 1090px;
    width: 772px;
    height: 560px;
    background-color: red;
    padding-top: 100px;
}

.set p {
    font-size: 256px;
}
</style>