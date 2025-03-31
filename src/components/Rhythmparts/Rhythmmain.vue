<template>
  <div>
    <div class="main_box">
      <br />
      <h2>音ゲーログ</h2>
      <br />
      <div class="txt_box">
          趣味で遊んでいるアーケードゲーム(音楽ゲーム)のログです<br />
          <a href="https://x.com/BBD_w"  target="_blank">BBD</a>という音ゲーサークルに所属しています(2022.10 ~)<br><br>
          レート等を計算するエクセルシートを配布しています：
          <a href="https://drive.google.com/drive/folders/1bwJflh1wF74HxpksERLQPb5bE6mzm9cA?usp=sharing"  target="_blank">GoogleDriveのリンク</a><br>
          シートにあるデータを置き換えてご自由に使ってください
          <br /><br />
      </div>
      <br />
      <div class="sub_box">
        <div class="selector_box"><Selector @changeMethod="updatetitle"></Selector></div>
        <div class="text_box">
          <h2>{{ names[title] }}</h2>
          <component :is="title"></component>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Selector from "./Selector.vue";
import CHUNITHM from "./kinds/CHUNITHM.vue";
import SDVX from "./kinds/SDVX.vue";
import iidx from "./kinds/iidx.vue";
import DDR from "./kinds/DDR.vue";
import ongeki from "./kinds/ongeki.vue";
import popn from "./kinds/popn.vue";
import Others from "./kinds/Others.vue";

export default {
  components: {
    Selector,
    CHUNITHM,
    ongeki,
    SDVX,
    iidx,
    Others,
    DDR,
    popn,
  },
  data() {
    return {
      title: "iidx",
      names: {
        ongeki: "オンゲキ",
        CHUNITHM: "CHUNITHM",
        DDR: "Dance Dance Revolution",
        SDVX: "SOUND VOLTEX",
        Others: "OTHERS",
        iidx: "beatmania IIDX",
        popn: "pop'n music",
      },
    };
  },
  methods: {
    updatetitle(title) {
      this.title = title;
    },
  },
};
</script>

<style scoped>
.main_box {
  margin-left: 3%;
  margin-right: 3%;
  width: 94%;
}
.txt_box {
  margin-left: 2%;
}
.sub_box .selector_box {
  position: relative;
}
@media screen and (max-width: 700px) {
  h2 {
  width: 80%;
  padding: 0.5rem 2rem;
  color: #fff;
  background: #866;
  -webkit-box-shadow: 5px 5px 0 #644;
  box-shadow: 5px 5px 0 #644;
}
}
/* for Desktop */
@media screen and (min-width: 700px) {
  h2 {
    width: 90%;
    padding: 0.5rem 2rem;
    color: #fff;
    background: #866;
    -webkit-box-shadow: 5px 5px 0 #644;
    box-shadow: 5px 5px 0 #644;
  }
}
</style>
