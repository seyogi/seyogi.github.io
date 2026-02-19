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
      </div>
      <br />
      <div class="sub_box">
        <div class="selector_box"><Selector @changeMethod="updatetitle"></Selector></div>
        <h3>Timeline</h3>
        <hr style="width: 100%" />
        <Timeline :timeline_contents="currentTimeline"></Timeline>
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
import Banner from "./banner.vue";

import Selector from "./Selector.vue";
import Timeline from "./timeline.vue";
import CHUNITHMTimeline from "../../assets/CHINITHMTimelineContents.json";
import ongekiTimeline from "../../assets/ongekiTimelineContents.json";
import SDVXTimeline from "../../assets/SDVXTimelineContents.json";
import iidxTimeline from "../../assets/iidxTimelineContents.json";
import DDRTimeline from "../../assets/DDRTimelineContents.json";
import popnTimeline from "../../assets/popnTimelineContents.json";

import Others from "./kinds/Others.vue";
import Gallery from "./kinds/Gallery.vue";

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
      },
      names: {
        ongeki: "オンゲキ",
        CHUNITHM: "CHUNITHM",
        DDR: "Dance Dance Revolution",
        SDVX: "SOUND VOLTEX",
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
