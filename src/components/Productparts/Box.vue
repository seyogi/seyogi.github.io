<template>
  <div>
    <br />
    <br />
    <div class="tabs">
      <ul class="tabWrap">
        <li class="list" @click="select('1')">文化祭音ゲー</li>
        <li class="list" @click="select('2')">ロボコン</li>
        <li class="list" @click="select('3')">製作課題(高校)</li>
        <li class="list" @click="select('4')">製作課題(大学)</li>
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
          自作音ゲーです。
          <br />
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
          /><br />
          高校時代に所属していた部活動でロボットを作ってました。<br />
          画像は指定されたコースをライントレースしながらパフォーマンスを行うカブトムシロボットになります。<br />
        </p>
        <p v-else-if="active == '3'">
          <img
            class="img"
            style="width: 200px; max-width: 100%"
            src="/img/product/flutter/App_notification.jpg"
          /><br />
          高校の課題研究としてFlutterで製作した、名前を呼ばれた際に通知するアプリケーションです。<br />
          私の知識が乏しく未完成に終わりましたが、共同開発の良い経験になりました。<br />
        </p>
        <p v-else-if="active == '4'">
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
          大学課題で製作した、授業資料を管理するデスクトップアプリケーションです。<br />
          javaのGUIライブラリであるjavaFXを用いて、他学部を交えて共同開発しました。<br />
          (Eclipseで.jarファイルの作成 → exewrapで.exeに梱包)<br /><br />
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
.list {
  border-radius: 10px 10px 0 0;
  width: auto;
  padding: 10px 20px;
  color: #fff;
  border-right: 1px solid #fff;
  background-color: #007db9;
  cursor: pointer;
  list-style: none;
}
.list:hover {
  opacity: 0.5;
  transition: 300ms;
}
.list:last-child {
  border-right: none;
}
.contentsWrap {
  width: 100%;
  min-height: 500px;
  padding: 10px;
  border: 1px solid #007db9;
}
</style>
