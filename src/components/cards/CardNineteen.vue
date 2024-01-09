<template>
    <CardBase :title="$t('V1C19L1')" :content="$t('V1C19L2')" :card-number="19" :background-front-image="`C19.${imageType}`">
        <div id="card19-label1" class="horizontal-center vertical-center label card19-label1-position">
            <p id="card19-text1" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>
        <div id="card19-fixed-label1" class="horizontal-center vertical-center label card19-fixed-label1-position">
            <p id="card19-fixed-text1" class="font-small">{{'+' + $t('V1C19L3')}}</p>
        </div>
        <div id="card19-fixed-label2" class="horizontal-center vertical-center label card19-fixed-label2-position">
            <p id="card19-fixed-text2" class="font-small">{{'+' + $t('V1C19L4')}}</p>
        </div>
        <template v-slot:back-content>
            <div id="card19-back-label1" class="label white set-three">
                <p id="card19-back-text1">{{ $t('V1C0L4') + ' ' + "3"}}</p>
            </div>
        </template>
    
    </CardBase>
</template>

<script>
import CardBase from "@/components/base/CardBase.vue";

export default {
    name: "CardOne",
    components: {
        CardBase,
    },
    data() {
        return {
            imageType: process.env.VUE_APP_IMAGE_TYPE || 'png',
        };
    },
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card19-label1-position {
    top: 414px;
    left: 104px;
    width: 252px;
    height: 30px;
    color : grey;
    /* border: solid red; */
}

.card19-label2-position {
    top: 414px;
    left: 104px;
    width: 252px;
    height: 30px;
    color : grey;
    /* border: solid red; */
}

.card19-fixed-label1-position {
    top: 265px;
    left: 174px;
    width: 100px;
    height: 50px;
    font-size: 40px;
    /* border: solid red; */
}

.card19-fixed-label2-position {
    top: 357px;
    left: 277px;
    width: 100px;
    height: 50px;
    font-size: 40px;
    /* border: solid red; */
}
</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card19-label1-position {
    top: 2800px;
    left: 450px;
    width: 1700px;
    height: 200px;
    color : grey;
    /* border: solid red; */
}
</style> -->