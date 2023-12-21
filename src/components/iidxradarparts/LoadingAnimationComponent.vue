<template>
    <div class="dot-pulse-container">
        <div class="dot-pulse">
            <div class="dot-pulse__dot"></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.dot-pulse-container {
    display: flex;
    justify-content: center;
}

.dot-pulse {
    /* --uib-size: 40px; */
    --uib-size: 40px;
    --uib-speed: 1.0s;
    --uib-color: #2296f3;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--uib-size);
    height: calc(var(--uib-size) * 0.27);
}

.dot-pulse__dot,
.dot-pulse::before,
.dot-pulse::after {
    content: '';
    display: block;
    height: calc(var(--uib-size) * 0.18);
    width: calc(var(--uib-size) * 0.18);
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
}

.dot-pulse::before {
    animation: pulse var(--uib-speed) ease-in-out infinite;
}

.dot-pulse__dot {
    animation: pulse var(--uib-speed) ease-in-out
    calc(var(--uib-speed) * 0.125) infinite both;
}

.dot-pulse::after {
    animation: pulse var(--uib-speed) ease-in-out
    calc(var(--uib-speed) * 0.25) infinite;
}

@keyframes pulse {
    0%,
    100% {
    transform: scale(0);
    }

    50% {
    transform: scale(1.5);
    }
}

</style>