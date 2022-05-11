<template>
  <div>
    <div class="main_box">
      <br />
      <br />
      <h2>過去の製作物(仮置き場)</h2>
      <br />
      <div class="tabs">
        <ul class="tabWrap">
          <li @click="select('1')">Lawine</li>
          <li @click="select('2')">ロボコン</li>
          <li @click="select('3')">課題研究</li>
          <li @click="select('4')">HackDay</li>
        </ul>
        <div class="contentsWrap">
          <p v-if="active == '1'">
            <img class="img" width="250" src="/img/product/lawine/TeiennsaiPlay.png" />
            <img class="img" height="250" src="/img/product/lawine/result.png" />
            <br />
            高校時代に文化祭の部活動ブースで展示した
            <font color="#AAA">/*著作権ガン無視*/</font>自作音ゲーです。
            <br />
            <font color="#AAA"> (学校教育の一環だし許して...) </font><br />
            ゲームはUnity、コントローラはArduinoで作成しました。<br />
            <br />
            後日デモ動画<a
              href="https://www.youtube.com/watch?v=MPh_ZoqeVxU"
              target="_blank"
              >URL</a
            >(非公開)
          </p>
          <p v-else-if="active == '2'">
            <img
              class="img"
              width="400"
              src="/img/product/robots/KBTKING.png"
            /><br />↑パフォーマンスロボット"カブトキング"<br /><br />
            所属していた部活動にて、Arduinoでいくつかロボットを作りました。<br />
            画像はその中の一つで、指定されたコースをライントレースしながらパフォーマンスを行うロボットになります。<br />
            大会では奇跡的に3位に入賞することが出来ました<br />
          </p>
          <p v-else-if="active == '3'">
            <img
              class="img"
              width="200"
              src="/img/product/flutter/App_notification.jpg"
            /><br />
            高校時代の授業一つ、課題研究にて製作した、利用者の名前を呼ばれた際に通知するアプリケーションです。<br />
            出来はいまいちですが、共同開発の良い経験になりました。<br />
            <br />
            一応Flutterで作りました。<br />
          </p>
          <p v-else-if="active == '4'">
            <img class="img" height="200" src="/img/product/robots/magichand.png" />
            <img class="img" height="200" src="/img/product/robots/magicpost.png" /><br>
            Hack DayはYahoo社主催の(多分)、24時間で何かしらのモノを作るという企画です。<br>
            私は2018年(高1)、2021(B1)の二回参加し、初回は左の画像のゴツイ手袋みたいなやつ、2回目は右の画像のポストみたいなやつを作りました。<br><br>
            説明はぜひYouTubeライブのアーカイブをご覧ください(リンク準備中)<br>
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
  transition: 300ms;
}
li:last-child {
  border-right: none;
}
.contentsWrap {
  width: 100%;
  padding: 10px;
  border: 1px solid #007db9;
}
</style>
