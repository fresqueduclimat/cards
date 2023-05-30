<template>
    <CardBase :title="$t('V1C22L1')" :content="$t('V1C22L2')" :card-number="22" :background-front-image="'C22.png'"
        :background-back-image="'C22-back.png'">
        <div id="card22-label1" class="horizontal-center vertical-center label black card22-label1-position">
            <p id="card22-text1" class="font-small">{{ $t('V1C22L3') }}</p>
        </div>
        <div id="card22-label2" class="horizontal-center vertical-center label black card22-label2-position">
            <p id="card22-text2" class="font-small">{{ $t('V1C22L7') }}</p>
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
.card22-label1-position {
    top: 800px;
    left: 300px;
    width: 4070px;
    height: 300px;
    /* border: solid red; */
}
.card22-label2-position {
    top: 1170px;
    left: 1300px;
    width: 1357.2px;
    height: 500px;
    /* border: solid red; */
}
</style>