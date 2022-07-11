<template>
  <div>
    <div class="main_box">
      <br />
      <br />
      歴10年以上の音ゲーマーによる自己満ページです。準備中。<br />
      <br />
      いろんな音ゲーの備忘録ブログ的な感じで運用していきたい(願望)<br />
      以下モチベ順
      <br />
      <br />
      <Selector @changeMethod="updatetitle"></Selector>
      <br />
      <h2>{{ names[title] }}</h2>
      <component :is="title"></component>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Selector from "./Rhythmparts/Selector";
import Ongeki from "./Rhythmparts/Ongeki";
import CHUNITHM from "./Rhythmparts/CHUNITHM";
import SDVX from "./Rhythmparts/SDVX";
import iidx from "./Rhythmparts/iidx";
import DDR from "./Rhythmparts/DDR";
import Arcaea from "./Rhythmparts/Arcaea";

export default {
  components: {
    Selector,
    Ongeki,
    CHUNITHM,
    SDVX,
    iidx,
    Arcaea,
    DDR,
  },
  data() {
    return {
      title: "Arcaea",
      names:{
        Ongeki:"オンゲキ",
        CHUNITHM:"CHUNITHM",
        DDR:"Dance Dance Revolution",
        SDVX:"SOUND VOLTEX",
        Arcaea:"Arcaea",
        iidx:"beatmania IIDX",
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
  margin-left: 10px;
}
h2 {
  width:80%;
  padding: 1rem 2rem;
  color: #fff;
  background: #644;
  -webkit-box-shadow: 5px 5px 0 #422;
  box-shadow: 5px 5px 0 #422;
}
</style>
