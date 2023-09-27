<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card0-label0" v-text-align class="horizontal-center label card0-label0-position">
                <p id="card0-text0">{{ $t('V1C0L5') }}</p>
            </div>
            <div id="card0-label1" v-text-align class="label black card0-label1-position">
                <p id="card0-text1">{{ $t('V1C0L6') + ' ' + $t('V1C0L7') + ' ' + $t('V1C0L8') + ' ' + $t('V1C0L9')}}</p>
            </div>
            <div id="card0-label2" class="label black card0-label2-position">
                <p id="card0-text2">{{ $t('V1C0L10') }}</p>
            </div>
            <div id="card0-label3" class="label vertical-center card0-label3-position">
                <p id="card0-text3">{{ $t('V1C0L11') }}</p>
            </div>
            <div id="card0-label4" class="label vertical-center card0-label4-position">
                <p id="card0-text4">{{ $t('V1C0L12') }}</p>
            </div>
            <div id="card0-label5" class="label vertical-center card0-label5-position">
                <p id="card0-text5">{{ $t('V1C0L13') }}</p>
            </div>
            <div id="card0-label6" class="label vertical-center card0-label6-position">
                <p id="card0-text6">{{ $t('V1C0L14') }}</p>
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
            return require("@/assets/png/C0-back.png");
        },
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card0-label0-position {
    top: 44px;   /* A' = 300 * 470 / 3180 = 44.49 (arrondi à 44) */
    left: 58px;  /* B' = 400 * 693 / 4680 = 59.06 (arrondi à 58) */
    width: 449px; /* C' = 3800 * 693 / 4680 = 558.56 (arrondi à 449) */
    height: 52px; /* D' = 350 * 470 / 3180 = 51.77 (arrondi à 52) */
    color: red;
    font-weight: 900;
    font-size: 2000px;
}

.card0-label1-position {
    top: 96px;   /* A' = 660 * 470 / 3180 = 97.64 (arrondi à 96) */
    left: 58px;  /* B' = 400 * 693 / 4680 = 59.06 (arrondi à 58) */
    width: 449px; /* C' = 3800 * 693 / 4680 = 558.56 (arrondi à 449) */
    height: 314px; /* D' = 1250 * 470 / 3180 = 184.95 (arrondi à 314) */
    text-align: left;
    font-size: 200px;
}

.card0-label2-position {
    top: 375px;  /* A' = 2150 * 470 / 3180 = 317.57 (arrondi à 375) */
    left: 875px; /* B' = 3320 * 693 / 4680 = 492.41 (arrondi à 875) */
    width: 182px; /* C' = 850 * 693 / 4680 = 126.09 (arrondi à 182) */
    height: 92px; /* D' = 430 * 470 / 3180 = 63.65 (arrondi à 92) */
    transform: rotate(15deg);
}

.card0-label3-position {
    top: 465px;  /* A' = 2700 * 470 / 3180 = 398.11 (arrondi à 465) */
    left: 59px;  /* B' = 420 * 693 / 4680 = 62.12 (arrondi à 59) */
    width: 117px; /* C' = 650 * 693 / 4680 = 97.01 (arrondi à 117) */
    height: 27px; /* D' = 150 * 470 / 3180 = 22.12 (arrondi à 27) */
    color: red;
    font-weight: 900;
    font-size: 100px;
}

.card0-label4-position {
    top: 465px;  /* A' = 2700 * 470 / 3180 = 398.11 (arrondi à 465) */
    left: 315px; /* B' = 1120 * 693 / 4680 = 165.83 (arrondi à 315) */
    width: 117px; /* C' = 650 * 693 / 4680 = 97.01 (arrondi à 117) */
    height: 27px; /* D' = 150 * 470 / 3180 = 22.12 (arrondi à 27) */
    color: red;
    font-weight: 900;
    font-size: 100px;
}

.card0-label5-position {
    top: 465px;  /* A' = 2700 * 470 / 3180 = 398.11 (arrondi à 465) */
    left: 571px; /* B' = 1810 * 693 / 4680 = 268.43 (arrondi à 571) */
    width: 117px; /* C' = 650 * 693 / 4680 = 97.01 (arrondi à 117) */
    height: 27px; /* D' = 150 * 470 / 3180 = 22.12 (arrondi à 27) */
    color: red;
    font-weight: 900;
    font-size: 100px;
}

.card0-label6-position {
    top: 465px;  /* A' = 2700 * 470 / 3180 = 398.11 (arrondi à 465) */
    left: 826px; /* B' = 2510 * 693 / 4680 = 373.08 (arrondi à 826) */
    width: 117px; /* C' = 650 * 693 / 4680 = 97.01 (arrondi à 117) */
    height: 27px; /* D' = 150 * 470 / 3180 = 22.12 (arrondi à 27) */
    color: red;
    font-weight: 900;
    font-size: 100px;
}
</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card0-label0-position {
    top: 300px;
    left: 400px;
    width: 3800px;
    height: 350px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    /* font-size: 200px; */
    font-size:2000px;
}

.card0-label1-position {
    top: 660px;
    left: 400px;
    width: 3800px;
    height: 1250px;
    text-align: left;
    font-size: 200px;
    /* border : red solid; */
}

.card0-label2-position {
    top: 2150px;
    left: 3320px;
    width: 850px;
    height: 430px;
    transform: rotate(15deg);
    
}

.card0-label3-position {
    top: 2700px;
    left: 420px;
    width: 650px;
    height: 150px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size: 100px;
}

.card0-label4-position {
    top: 2700px;
    left: 1120px;
    width: 650px;
    height: 150px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size: 100px;
}

.card0-label5-position {
    top: 2700px;
    left: 1810px;
    width: 650px;
    height: 150px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size: 100px;
}

.card0-label6-position {
    top: 2700px;
    left: 2510px;
    width: 650px;
    height: 150px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    font-size:100px;
}

</style> -->