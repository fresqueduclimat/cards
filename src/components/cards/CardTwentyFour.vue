<template>
    <CardBase :title="$t('V1C24L1')" :content="$t('V1C24L2')" :card-number="24" :background-front-image="'C24.png'">
        <div id="card24-label1" class="horizontal-center vertical-center label black card24-label1-position">
            <p id="card24-text1" class="font-small">{{ $t('V1C24L3') }}</p>
        </div>
        <div id="card24-label2" class="horizontal-center vertical-center label card24-label2-position">
            <p id="card24-text2" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>    
        <template v-slot:back-content>
            <div id="card24-back-label3" class="label white set-two">
                <p id="card24-back-text3">{{ $t('V1C0L4') + ' ' + "2"}}</p>
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
};
</script>

<!-- pour une résolution de 470x693 -->
<style>
.card24-label1-position {
    top: 212px;
    left: -37px;
    width: 244px;
    height: 52px;
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card24-label2-position {
    top: 126px;
    left: 414px;
    width: 222px;
    height: 22px;
    color: grey;
    /* border: solid red; */
}
</style>

<!-- pour une résolution de 3180x4680 -->
<!-- <style>
.card24-label1-position {
    top: 1430px;
    left: -250px;
    width: 1650px;
    height: 350px;
    transform: rotate(-90deg);
    /* border: solid red; */
}

.card24-label2-position {
    top: 850px;
    left: 2800px;
    width: 1500px;
    height: 150px;
    color: grey;
    /* border: solid red; */
}
</style> -->