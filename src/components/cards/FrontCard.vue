<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div class="label black front-card-label0-position">
                <p>{{ $t('V0C0L0') }}</p>
            </div>
            <div class="label black front-card-label1-position">
                <p>{{ $t('V1C0L0') }}</p>
            </div>
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
    computed: {
        backgroundFrontImageUrl() {
            return require("@/assets/svg/C0.svg");
        },
    },
};
</script>

<style>
.front-card-label0-position {
    top: 550px;
    left: 550px;
    width: 1300px;
    height: 350px;
    font-size: 200px;
    text-align: left;
}

.front-card-label1-position {
    top: 550px;
    left: 2200px;
    width: 2000px;
    height: 350px;
    font-size: 200px;
    text-align: right;
}

</style>