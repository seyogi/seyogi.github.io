<template>
  <div>
    <div class="main_box">
      <br />
      <br />
      音楽ゲームのリザルトログです<br />
      <br>
      <h3>雑記</h3>
      BBDという音ゲーサークルに所属しています<br>
      最近のメイン：IIDX,DDR,pop'n<br /><br />
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
import CHUNITHM from "./kinds/CHUNITHM";
import SDVX from "./kinds/SDVX";
import iidx from "./kinds/iidx";
import DDR from "./kinds/DDR";
import ongeki from "./kinds/ongeki";
import popn from "./kinds/popn";
import Others from "./kinds/Others";

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
