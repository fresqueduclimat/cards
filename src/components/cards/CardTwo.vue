<template>
    <CardComplete :title="$t('V1C5L1')" :background-image="'card2.png'" :content="$t('V1C5L2')" :card-number="5"
        :lot-number="1">
        <div class="graph-container">
            <div class="graph-caption">
                <p class="vertical-text graph-text">{{ $t('V1C5L4') }}</p>
            </div>
            <div class="graph-content">
                <img class="graph-image" src="@/assets/card2_total_graph.png" alt="graph">
                <p class="graph-title graph-text">{{ $t('V1C5L5') }}</p>
                <p class="graph-label">{{ $t('V1C5L3') }}</p>
                <div class="line"></div>
                <p class="graph-label s1">{{ $t('V1C5L11') }}</p>
                <p class="graph-label s2">{{ $t('V1C5L12') }}</p>
                <p class="graph-label s3">{{ $t('V1C5L13') }}</p>
                <p class="graph-label s4">{{ $t('V1C5L14') }}</p>
                <p class="graph-label s5">{{ $t('V1C5L15') }}</p>
                <p class="pin pin-middle"></p>
                <p class="pin pin-right"></p>
                <p class="pin pin-left"></p>
                <p class="timeline-1">2060</p>
                <p class="timeline-2">2080</p>
            </div>
            <div class="graph-caption">
                <p class="vertical-text graph-text">{{ $t('V1C999L90') }}</p>
            </div>
        </div>
    </CardComplete>
</template>

<script>
import CardComplete from "@/components/base/CardComplete.vue";

export default {
    name: "CardTwo",
    components: {
        CardComplete,
    },
};
</script>

<style>
.graph-content {
    position: relative;
    width: 100%;
    height: 100%;
}

.graph-image {
    width: 100%;
    max-width: 100% !important;
}

.graph-title {
    position: absolute;
    text-align: center;
    width: 30%;
    left: 20%;
    top: calc(3% + var(--offset));
}

.graph-label {
    position: absolute;
    text-align: center;
    padding-block: 4px;
    padding-inline: 8px;
    font-weight: bold;
    font-size: 16px;
    left: 27%;
    top: calc(24% + var(--offset));
    background-color: white;
    border: 3px solid black;
}

.line {
    position: absolute;
    width: 16%;
    height: 3px;
    left: 23%;
    top: calc(27% + var(--offset));
    background-color: black;
    display: block;
    transform: rotate(0.04turn) translateX(14vw) translateY(-3.8vh);
}

.s1 {
    left: 55%;
    top: calc(43% + var(--offset));
    background-color: white;
    color: #00a9cf;
    border: 3px solid #00a9cf;
}

.s2 {
    left: 68%;
    top: calc(36% + var(--offset));
    background-color: white;
    color: #003466;
    border: 3px solid #003466;
}

.s3 {
    left: 76%;
    top: calc(28% + var(--offset));
    background-color: white;
    color: #f69320;
    border: 3px solid #f69320;
}

.s4 {
    left: 77%;
    top: calc(12% + var(--offset));
    background-color: white;
    color: #e90000;
    border: 3px solid #e90000;
}

.s5 {
    left: 67%;
    top: calc(3% + var(--offset));
    background-color: white;
    color: #980002;
    border: 3px solid #980002;
}

.pin {
    position: absolute;
    text-align: center;
    width: 12px;
    height: 12px;
    border-radius: 20px;
}

.pin-middle {
    left: 59%;
    top: calc(29.9% + var(--offset));
    background: black;
}


.pin-right {
    left: 86%;
    top: calc(49.3% + var(--offset));
    background: #003466;
}

.pin-left {
    left: 78%;
    top: calc(49.3% + var(--offset));
    background: #00a9cf;
}

.timeline-1 {
    color: #00a9cf;
    position: absolute;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    left: 76%;
    top: calc(52% + var(--offset));
}

.timeline-2 {
    color: #003466;
    position: absolute;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    left: 84.5%;
    top: calc(52% + var(--offset));
}

.graph-caption {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: end;
    height: calc(100% - var(--offset));
    width: 100%;
}

.graph-text {
    font-size: 20px;
}

.vertical-text {
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
}
</style>