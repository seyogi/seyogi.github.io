<template>
  <div>
    <div class="tabs">
      <ul class="tabWrap">
        <li @click="select('1')">Lawine</li>
        <li @click="select('2')">ロボコン</li>
        <li @click="select('3')">課題研究</li>
        <li @click="select('4')">HackDay</li>
        <li @click="select('5')">SDPBL(2-1)</li>
      </ul>
      <div class="contentsWrap">
        <p v-if="active == '1'">
          <img
            class="img"
            src="/img/product/lawine/TeiennsaiPlay.png"
            style="width: 250px; max-width: 100%"
          />
          <img
            class="img"
            src="/img/product/lawine/result.png"
            style="max-height: 250px; max-width: 100%"
          />
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
            src="/img/product/robots/KBTKING.png"
            style="width: 400px; max-width: 100%"
          /><br />↑パフォーマンスロボット"カブトキング"<br /><br />
          所属していた部活動にて、Arduinoでいくつかロボットを作りました。<br />
          画像は指定されたコースをライントレースしながら、パフォーマンスを行うロボットになります。<br />
          大会では<font color="#AAA">奇跡的に</font>3位に入賞することが出来ました<br />
        </p>
        <p v-else-if="active == '3'">
          <img
            class="img"
            style="width: 200px; max-width: 100%"
            src="/img/product/flutter/App_notification.jpg"
          /><br />
          高校の課題研究としてFlutterで製作した、名前を呼ばれた際に通知するアプリケーションです。<br />
          <font color="#AAA">出来はいまいちですが、共同開発の良い経験になりました。</font><br />
        </p>
        <p v-else-if="active == '4'">
          <img
            class="img"
            src="/img/product/robots/magichand.png"
            style="max-height: 180px; max-width: 100%"
          />
          <img
            class="img"
            src="/img/product/robots/magicpost.png"
            style="max-height: 180px; max-width: 100%"
          /><br />
          Hack Dayとは、Yahoo社主催(多分)の24時間で開発を行うという企画です。<br />
          <br />
          以下参加歴<br />
          2018・・・左の画像のゴツイ手袋(Arduino)<br>
          2021・・・右の画像のダンボールポスト(JavaScript)<br />
          <br />
          説明はぜひYouTubeライブのアーカイブをご覧ください(リンク準備中)<br />
        </p>
          <p v-else-if="active == '5'">
          <img
            class="img"
            src="/img/product/sdpbl/pbl_app01.png"
            style="max-height: 270px; max-width: 100%"
          />
          <img
            class="img"
            src="/img/product/sdpbl/pbl_app02.png"
            style="max-height: 270px; max-width: 100%"
          /><br />
          大学の製作課題としてjavaで製作した、授業資料を管理するデスクトップアプリケーションです。<br />
          javaのGUIライブラリであるjavaFXを用いて、他学部を交えて共同開発しました。<br />
          (Eclipseで.jarファイルの作成 → exewrapで.exeに梱包)<br /><br />
          出来もよく良い経験になりました。<br />
        </p>
      </div>
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
  transition: 300ms;
}
li:last-child {
  border-right: none;
}
.contentsWrap {
  width: 100%;
  min-height: 500px;
  padding: 10px;
  border: 1px solid #007db9;
}
</style>
