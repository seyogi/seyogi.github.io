<template>
  <div>
    <Banner></Banner>
    <div class="main_box">
      <br />
      <h2>RhythmGame Log</h2>
      <br />
      <div class="txt_box">
        趣味で遊んでいるアーケードゲーム(音楽ゲーム)のログです<br />
        <a href="https://x.com/BBD_w"  target="_blank">BBD</a>という音ゲーサークルに所属しています(2022.10 ~)<br><br>
        レート等を計算するエクセルシートを配布しています：
        <a href="https://drive.google.com/drive/folders/1bwJflh1wF74HxpksERLQPb5bE6mzm9cA?usp=sharing"  target="_blank">GoogleDriveのリンク</a><br>
        シートにあるデータを置き換えてご自由に使ってください
        <br /><br />
        ---ライバル募集中---<br />
        CHUNITHM : 4069095717545 (<a href="https://chunirec.net/users/seyogi" target="_blank">chunirec</a>)<br />
        オンゲキ : 4067035919555 (<a href="https://ongeki-score.net/user/4925" target="_blank">OngekiScoreLog</a>)<br />
        IIDX ID : 7228-1124 (<a href="https://sp12.iidx.app/users/7228-1124" target="_blank">☆12参考表</a>/<a href="https://cpi.makecir.com/users/view/5825" target="_blank">CPI</a>) <br />
        SDVX ID : SV-3690-6541 (<a href="https://vaddict.b35.jp/user.php?player_id=SV-3690-6541" target="_blank">Vaddict</a>)<br />
        ポプとも : 3089-8010-8948<br />
        DDRCODE : 61609228<br />
      </div>
      <br />
      <div class="sub_box">
        <div class="selector_box"><Selector @changeMethod="updatetitle"></Selector></div>
        <br />
        <h3>Timeline</h3>
        <hr style="width: 100%" />
        <Timeline :timeline_contents="currentTimeline"></Timeline>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";

import Selector from "./Selector.vue";
import Timeline from "./Timeline.vue";
import CHUNITHMTimeline from "../../assets/RhythmGameTLContents/CHINITHM.json";
import ongekiTimeline from "../../assets/RhythmGameTLContents/ongeki.json";
import SDVXTimeline from "../../assets/RhythmGameTLContents/SDVX.json";
import iidxTimeline from "../../assets/RhythmGameTLContents/iidx.json";
import DDRTimeline from "../../assets/RhythmGameTLContents/DDR.json";
import popnTimeline from "../../assets/RhythmGameTLContents/popn.json";
import OthersTimeline from "../../assets/RhythmGameTLContents/Others.json";

export default {
  components: {
    Banner,
    Selector,
    Timeline,
    CHUNITHMTimeline,
    ongekiTimeline,
    SDVXTimeline,
    iidxTimeline,
    DDRTimeline,
    popnTimeline,
    OthersTimeline,
  },
  data() {
    return {
      title: "iidx",
      timeline_contents:{
        ongeki: ongekiTimeline,
        CHUNITHM: CHUNITHMTimeline,
        DDR: DDRTimeline,
        SDVX: SDVXTimeline,
        iidx: iidxTimeline,
        popn: popnTimeline,
        Others : OthersTimeline
      },
      names: {
        ongeki: "オンゲキ",
        CHUNITHM: "CHUNITHM",
        DDR: "Dance Dance Revolution",
        SDVX: "SOUND VOLTEX",
        iidx: "beatmania IIDX",
        popn: "pop'n music",
        Others: "Others"
      },
    };
  },
  methods: {
    updatetitle(title) {
      this.title = title;
    },
  },
  computed: {
    // return the array corresponding to the current title; fallback to empty
    currentTimeline() {
      return this.timeline_contents[this.title] || [];
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
