<template>
    <section data-background-size="cover">
        <div class="container">
            <div id="card28-label0" class="label card28-label0-position">
                <h1 id="card28-text0">{{ $t('V3C28L0') }}</h1>
            </div>
            <div class="label qr-code-key-container">
                <div class="qr-code-key"></div>
            </div>
            <div class="label frame-container">
                <div class="frame"></div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<!-- pour une résolution de 470x693 -->
<style>

.qr-code-key {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/qr-code/qr-code-key-fr.png');
    background-size: contain;
}

.qr-code-key-container {
    top: calc(90px * var(--scale-factor));
    left: calc(73px * var(--scale-factor));
    width: calc(249px * var(--scale-factor));
    height: calc(249px * var(--scale-factor));
}

.card28-label0-position {
    top: calc(40px * var(--scale-factor-height));
    left: calc(37px * var(--scale-factor-width));
    width: calc(316px * var(--scale-factor-width));
    height: calc(60px * var(--scale-factor-height));
    line-height: 12px; 
    text-align : center;
    /* border: red solid; */
}

</style>
