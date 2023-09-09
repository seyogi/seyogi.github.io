<template>
  <div>
    <div class="main_box">
      <br />
        <carousel :items-to-show="1" :wrap-around="true">
        <slide v-for="content in contents" :key="content">
          <img class="img" :src="content.imgurl" />
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template> </carousel
      >
      <br />
      <br />
      Max Rating : 17.30<br />
      CLASS EMBLEM : INFINITY -ALL CLEAR-<br />
      フレンドコード : 4069095717545<br />
      <br />
      最近は全くと言っていい程やってないですが、高校~大学1年の頃はメイン機種でした。<br />
      <br />
      <br />
      <br />
      <br />
      <hr style="width: 80%" />
      <ul class="timeline">
        <li>
          <p class="timeline-date">2017年7月</p>
          <div class="timeline-circle" />
          <div class="timeline-content">
            <div class="timeline-txt">
              Angel Beats! コラボ
              <div class="sub-txt">
                今でも大好きな作品とのコラボ！ これを機にCHUNITHMを触り始めました
              </div>
            </div>
          </div>
        </li>

        <li>
          <p class="timeline-date">2018年7月</p>
          <div class="timeline-circle" />
          <div class="timeline-content">
            <div class="timeline-txt">
              RATING 15.00<br />
              <div class="sub-txt">
                俺が虹レだ！ 虹レになった曲はみんな大好きLike the Wind
              </div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2019年10月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              LEVEL13+(旧基準) 全鳥<br />
              <div class="sub-txt">
                <a
                  href="https://twitter.com/syg_74/status/1184375810662096896"
                  target="_blank"
                  >(Twitter)</a
                >
                最後の3つは大鳥居/エンダス/パッソでした<br />
                当時は鍵盤力がなくて本当につらかった...
              </div>
            </div>
          </div>
        </li>

        <li>
          <p class="timeline-date">2022年1月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              蠍火 AJ<br />
              <div class="sub-txt">
                <a
                  href="https://twitter.com/syg_74/status/1486993019458887681"
                  target="_blank"
                  >(Twitter)</a
                >
                記念すべき15初AJです！
              </div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年2月</p>
          <div class="timeline-content">
            <div class="timeline-txt">LEVEL15 全鳥<br /></div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年4月</p>
          <div class="timeline-circle" />
          <div class="timeline-content">
            <div class="timeline-txt">
              <h3>クラス認定 INFINITY 全合格(無限帯)</h3>
              <div class="sub-txt">俺が無限帯だ！</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年5月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              World Vanquisher AJ<br />
              <div class="sub-txt">
                <a
                  href="https://twitter.com/syg_74/status/1526129440975036416"
                  target="_blank"
                  >(Twitter)</a
                >
                まさかこの曲をAJ出来る日が来るとは思いもしませんでした
              </div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年10月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              風唄 AJ<br />
              <div class="sub-txt">
                <a
                  href="https://twitter.com/syg_74/status/1586982674484191232"
                  target="_blank"
                  >(Twitter)</a
                >
                弐寺で鍛えた鍵盤力で押し切りました
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          imgurl: "/img/Rhythm/Result/UNI02.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/UNI01.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main_box {
  padding: 30px;
}
.timeline {
  list-style: none;
}
@media screen and (max-width: 700px) {
  .carousel__slide {
    max-height: 350px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-height: 350px;
    max-width: 100%;
  }
  .timeline > li {
    margin-bottom: 30px;
  }
  .timeline-date {
    width: 110px;
    margin: 2px;
    text-align: center;
    background: #daa;
    border-radius: 10px; /* 角丸半径を50%にする(=円形にする) */
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
/* for Desktop */
@media screen and (min-width: 700px) {
  .carousel__slide {
    height: 350px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-height: 350px;
    max-width: 100%;
  }
  .timeline > li {
    overflow: hidden;
    position: relative;
    margin: 0;
  }
  .timeline-date {
    width: 110px;
    float: left;
    margin-top: 10px;
  }
  .timeline-content {
    width: 75%;
    float: left;
    border-left: 3px #888 solid;
    padding-left: 30px;
  }
  .timeline-circle {
    content: "";
    width: 12px;
    height: 12px;
    background: #833;
    position: absolute;
    left: 106px;
    top: 14px;
    border-radius: 100%;
  }
  .timeline-txt {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
</style>
