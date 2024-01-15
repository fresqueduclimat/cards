<template>
    <section :style="backgroundStyles">
        <div class="container">
            <div id="card43-label0" class="label card43-label0-position">
                <p id="card43-text0">{{ $t('V1C99L1') }}</p>
            </div>
            <div class="label qr-code-memo-container">
                <div class="qr-code-memo"></div>
            </div>
        </div>
        <!-- <hr class="label border-black top-left-vertical">
        <hr class="label border-black top-left-horizontal">
        <hr class="label border-black top-right-vertical">
        <hr class="label border-black top-right-horizontal">
        <hr class="label border-black bottom-left-vertical">
        <hr class="label border-black bottom-left-horizontal">
        <hr class="label border-black bottom-right-vertical">
        <hr class="label border-black bottom-right-horizontal"> -->
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
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || "png",
            mini: process.env.VUE_APP_MINI === 'true',
        };
    },
    computed: {
        backgroundFrontImageUrl() {
            return require(`@/assets/${this.imageType}/C99.${this.imageType}`);
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

<!-- pour une résolution de 470x693 -->
<style>
.card43-label0-position {
    top: calc(21.5px * var(--scale-factor));
    left: calc(30.1px * var(--scale-factor));
    width: calc(535px * var(--scale-factor));
    height: calc(72.2px * var(--scale-factor));
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: calc(60px * var(--scale-factor));
    font-weight: 700;
    color: white;
}

.qr-code-memo {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/qr-code/qr-memo.png');
    background-size: contain;
}

.qr-code-memo-container {
    top: calc(264px * var(--scale-factor));
    left: calc(41.8px * var(--scale-factor));
    width: calc(111px * var(--scale-factor));
    height: calc(111px * var(--scale-factor));
}
</style>