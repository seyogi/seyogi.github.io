<template>
  <div>
    <div class="main_box">
      <br />
      <br />
      歴10年以上の音ゲーマーによる自己満ページです。更新中。。。<br /><br />
      いろいろ計算する<a
        href="https://drive.google.com/file/d/1eEWmv2dzkAwZakEuNscZqwOq3Tjr2QXL/view?usp=sharing"
        target="_blank"
        >Excelシート</a
      >配布中<br />
      <br />
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
import Selector from "./Selector";
import CHUNITHM from "./CHUNITHM";
import SDVX from "./SDVX";
import iidx from "./iidx";
import DDR from "./DDR";
import Others from "./Others";

export default {
  components: {
    Selector,
    CHUNITHM,
    SDVX,
    iidx,
    Others,
    DDR,
  },
  data() {
    return {
      title: "iidx",
      names: {
        CHUNITHM: "CHUNITHM",
        DDR: "Dance Dance Revolution",
        SDVX: "SOUND VOLTEX",
        Others: "OTHERS",
        iidx: "beatmania IIDX",
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
  margin-left: 2%;
  margin-right: 2%;
  width: 96%;
}
.sub_box {
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
