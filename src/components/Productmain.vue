<template>
  <div>
    <div class="main_box">
      <br />
      <br />
      <h2>過去の製作物(仮置き場)</h2>
      <br />
      <div class="tabs">
        <ul class="tabWrap">
          <li @click="select('1')">タブ1</li>
          <li @click="select('2')">タブ2</li>
          <li @click="select('3')">タブ3</li>
          <li @click="select('4')">タブ4</li>
        </ul>
        <div class="contentsWrap">
          <p v-if="active == '1'">
            <img class="img" src="/img/product/flutter/App_notification.jpg" />
          </p>
          <p v-else-if="active == '2'">
            <img class="img" src="/img/product/lawine/TeiennsaiPlay.png" />
          </p>
          <p v-else-if="active == '3'">
            <img class="img" src="/img/product/robots/KBTKING.jpg" />
          </p>
          <p v-else-if="active == '4'">
            <img class="img" src="/img/product/robots/magichand.png" />
            <img class="img" src="/img/product/robots/magicpost.png" />
          </p>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
    };
  },
  methods: {
    select: function (num) {
      this.active = num;
      this.style.background = "#000";
    },
  },
};
</script>

<style scoped>
.main_box {
  margin-left: 10px;
}
.img {
  width: 240px; /* ※縦横を同値に */
}
h2 {
  width: 80%;
  padding: 1rem 2rem;
  color: #fff;
  background: #644;
  -webkit-box-shadow: 5px 5px 0 #422;
  box-shadow: 5px 5px 0 #422;
}

.tabs {
  width: 90%;
}
.tabWrap {
  display: flex;
  margin-bottom: 0;
  padding-left: 0;
}
li {
  border-radius: 10px 10px 0 0;
  width: auto;
  padding: 10px 20px;
  color: #fff;
  border-right: 1px solid #fff;
  background-color: #007db9;
  cursor: pointer;
  list-style: none;
}
li:hover {
  opacity: 0.5;
  color: white;
  transition : 300ms;
}
li:last-child {
  border-right: none;
}
.contentsWrap {
  width: 100%;
  border: 1px solid #007db9;
}
</style>
