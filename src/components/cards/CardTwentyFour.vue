<template>
    <CardBase :title="$t('V1C24L1')" :content="$t('V1C24L2')" :card-number="24" :background-front-image="'C24.png'"
        :background-back-image="'C24-back.png'">
        <div id="card24-label1" class="horizontal-center vertical-center label black card24-label1-position">
            <p id="card24-text1" class="font-small">{{ $t('V1C24L3') }}</p>
        </div>
        <div id="card24-label2" class="horizontal-center vertical-center label card24-label2-position">
            <p id="card24-text2" class="font-small">{{ $t('V1C999L90') }}</p>
        </div>    
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

<style>
.card24-label1-position {
    top: 1430px;
    left: -250px;
    width: 1700px;
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
</style>