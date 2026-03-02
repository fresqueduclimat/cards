<template>
    <section data-background-size="cover">
        <div class="container">
            <div class="label frame-container">
                <div class="frame"></div>
            </div>
            <div id="card0-label0" class="label title card0-label0-position">
                <h1 id="card0-text0">{{ $t('V3C0L6') }}</h1>
            </div>
            <div id="card0-label1" v-text-align class="label black card0-label1-position">
                <p id="card0-text1">{{$t('V3C0L7')}}</p>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<!-- pour une résolution de 470x693 -->
<style>

.card0-label1-position {
    top: calc(100px * var(--scale-factor-height));
    left: calc(38px * var(--scale-factor-width));
    width: calc(312px * var(--scale-factor-width));
    height: calc(250px * var(--scale-factor-height));
    text-align: justify;
    /* border: red solid 0.5px; */
}

</style>