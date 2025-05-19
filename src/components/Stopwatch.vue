<template>
    <div class="stopwatch">
      <div class="time-display">{{ formattedTime }}</div>
  
      <div class="buttons">
        <button @click="start">スタート</button>
        <button @click="stop">ストップ</button>
        <button @click="reset">リセット</button>
        <button @click="recordLap">ラップ</button>
      </div>
  
      <div class="lap-list" v-if="laps.length">
        <h3>ラップタイム</h3>
        <ul>
          <li v-for="(lap, i) in laps" :key="i">{{ formatTime(lap) }}</li>
        </ul>
      </div>
  
      <div class="notify-settings">
        <h3>通知タイミング設定</h3>
        <div class="input-group">
          <label>分</label>
          <input type="number" min="0" v-model.number="notifyMin" />
        </div>
        <div class="input-group">
          <label>秒</label>
          <input type="number" min="0" max="59" v-model.number="notifySec" />
        </div>
        <button @click="addNotifyTime">追加</button>
  
        <div class="notify-list" v-if="notifyTimes.length">
          <h4>通知予定</h4>
          <ul>
            <li v-for="(t, i) in notifyTimes" :key="i">
              {{ formatTime(t * 1000) }}
              <button @click="removeNotifyTime(i)">削除</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, computed, onBeforeUnmount } from 'vue';

const time = ref(0);
const running = ref(false);
const laps = ref([]);
const interval = ref(null);

const notifyTimes = ref([]);
const notifyMin = ref(0);
const notifySec = ref(0);
const notified = ref(new Set());
const audio = new Audio('/Xylophone.mp3');

let startTime = 0; // タイマー開始の基準時刻（ms）
let pausedTime = 0; // ストップ時の経過時間（ms）

const formattedTime = computed(() => formatTime(time.value));

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 10);
  return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 2)}`;
}

function pad(num, size = 2) {
  return String(num).padStart(size, '0');
}

function start() {
  if (!running.value) {
    running.value = true;
    startTime = performance.now() - pausedTime;  // 途中から再開できるように調整
    interval.value = setInterval(() => {
      const now = performance.now();
      time.value = Math.floor(now - startTime);
      checkNotify();
    }, 30); // 30ms毎くらいで十分
  }
}

function stop() {
  if (running.value) {
    running.value = false;
    clearInterval(interval.value);
    pausedTime = time.value;
  }
}

function reset() {
  stop();
  time.value = 0;
  laps.value = [];
  notified.value.clear();
  pausedTime = 0;
}

function recordLap() {
  laps.value.push(time.value);
}

function addNotifyTime() {
  if (
    Number.isInteger(notifyMin.value) && notifyMin.value >= 0 &&
    Number.isInteger(notifySec.value) && notifySec.value >= 0 && notifySec.value <= 59
  ) {
    const totalSec = notifyMin.value * 60 + notifySec.value;
    if (!notifyTimes.value.includes(totalSec)) {
      notifyTimes.value.push(totalSec);
      notifyTimes.value.sort((a, b) => a - b);
      notifyMin.value = 0;
      notifySec.value = 0;
    }
  }
}

function removeNotifyTime(index) {
  notifyTimes.value.splice(index, 1);
}

function checkNotify() {
  const currentSec = Math.floor(time.value / 1000);
  notifyTimes.value.forEach((t) => {
    if (currentSec === t && !notified.value.has(t)) {
      audio.play();
      notified.value.add(t);
    }
  });
}

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>
  
  <style scoped>
  .stopwatch {
    min-width: 500px;
    margin: 0 auto;
    text-align: center;
    font-family: sans-serif;
  }
  .time-display {
    font-size: 100px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .buttons button {
    margin: 0 5px;
    padding: 8px 16px;
    font-size: 16px;
  }
  .lap-list {
    margin-top: 20px;
    text-align: left;
  }
  .notify-settings {
    padding-left: 100px;
    margin-top: 30px;
    text-align: left;
  }
  .input-group {
    display: inline-block;
    margin-right: 10px;
  }
  .input-group label {
    display: block;
    font-weight: bold;
  }
  .input-group input {
    width: 60px;
    padding: 4px;
    font-size: 16px;
  }
  .notify-list ul {
    list-style: none;
    padding-left: 0;
  }
  .notify-list li {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
  .notify-list button {
    margin-left: 10px;
  }
  </style>
  