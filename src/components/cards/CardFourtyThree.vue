<template>
    <section :data-background-image="backgroundFrontImageUrl" data-background-size="cover">
        <div class="container">
            <div id="card43-label0" v-text-align class="label black card43-label0-position" >
                <p id="card43-text0">{{ $t('V1C999L2') }}</p>
            </div>
            <div id="card43-label1" v-text-align class="label black card43-label1-position">
                <p id="card43-text1">{{ $t('V1C999L3') + ' ' + $t('V1C999L4')}}</p>
            </div>
            <div id="card43-label2" v-text-align class="label black card43-label2-position">
                <p id="card43-text2">{{ $t('V1C999L5') }}</p>
            </div>
            <div id="card43-label3" v-text-align class="label black card43-label3-position">
                <p id="card43-text3">{{ $t('V1C999L6') }}</p>
            </div>
            <div id="card43-label4" class="label black card43-label4-position">
                <p id="card43-text4">{{ $t('V1C999L7') }}</p>
            </div>
            <div id="card43-label5" class="label black card43-label5-position">
                <p id="card43-text5">{{ $t('V1C999L8') }}</p>
            </div>
            <div id="card43-label6" class="label black card43-label6-position">
                <p id="card43-text6">{{ $t('V1C999L9') }}</p>
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
            return require("@/assets/C99-back.png");
        },
    },
};
</script>

<style>
.card43-label0-position {
    top: 400px;
    left: 350px;
    width: 2900px;
    height: 300px;
    font-weight: 900;
    font-size: 200px;
    text-align : left;
    /* border : red solid; */
}

.card43-label1-position {
    top: 700px;
    left: 350px;
    width: 2900px;
    height: 950px;
    text-align: left;
    font-size: 100px;
    /* border : red solid; */
}

.card43-label2-position {
    top: 1700px;
    left: 350px;
    width: 1300px;
    height: 250px;
    text-align: left;
    font-size: 100px;
    /* border : red solid; */
}

.card43-label3-position {
    top: 1700px;
    left: 1900px;
    width: 1300px;
    height: 250px;
    text-align: left;
    font-size: 100px;
    /* border : red solid; */
}

.card43-label4-position {
    top: 2550px;
    left: 3320px;
    width: 950px;
    height: 300px;
    font-size: 100px;
    /* border : red solid; */
}

.card43-label5-position {
    top: 850px;
    left: 3420px;
    width: 850px;
    height: 230px;
    /* border : red solid; */
    
}

.card43-label6-position {
    top: 1250px;
    left: 3420px;
    width: 850px;
    height: 230px;
    /* border : red solid; */
    
}

.card43-label7-position {
    top: 2700px;
    left: 1200px;
    width: 500px;
    height: 200px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    
}

.card43-label8-position {
    top: 2700px;
    left: 1850px;
    width: 500px;
    height: 200px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    
}

.card43-label9-position {
    top: 2700px;
    left: 2600px;
    width: 500px;
    height: 200px;
    color : red;
    font-weight: 900;
    /* border : red solid; */
    
}

</style>