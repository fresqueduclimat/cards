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
    },
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/" + this.backgroundFrontImage);
        },
        backgroundBackImageUrl() {
            return require("@/assets/" + this.backgroundBackImage);
        },
    },
};
</script>

<style>
.title {
    position: absolute;
    top: 178px;
    left: 50px;
    width: 4580px;
    height: 570px;
    border: solid red;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    top: 805px;
    left: 100px;
    width: 4480px;
    height: 1866px;
    border: solid red;
}

.content p {
    font-size: 256px;
}
</style>