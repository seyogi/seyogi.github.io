<template>
  <div>
    <div class="main_box">
      <br />
      <br />
      歴10年以上の音ゲーマーによる自己満ページです。<br />
      <br />
      しばらく更新停止します(2023/3/29追記)<br />
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
  margin-left: 10px;
}
@media screen and (min-width: 1080px) {
  .sub_box {
    display: flex;
  }
  .sub_box .selector_box {
    position: relative;
  }
}
h2 {
  width: 82%;
  padding: 1rem 2rem;
  color: #fff;
  background: #644;
  -webkit-box-shadow: 5px 5px 0 #422;
  box-shadow: 5px 5px 0 #422;
}
</style>
