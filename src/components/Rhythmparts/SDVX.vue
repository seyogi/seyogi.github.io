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
      ><br />
      <br />
      VOLFORCE : 20.279(IMPERIAL1)<br />
      SKILL ANALYZER : 後光暴龍天<br />
      SDVX ID:SV-3690-6541<br />
      <br />
      18PUC 0<br />
      <br />
      <br />
      <br />
      <hr style="width: 80%" />
      <ul class="timeline">
        <li>
          <p class="timeline-date">2020年7月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              SKILL ANALYZER 剛力羅 合格<br />
              <div class="sub-txt">累計100クレ</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年8月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              SKILL ANALYZER 或帝滅斗 合格<br />
              <div class="sub-txt">累計200クレ</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2021年3月</p>
          <div class="timeline-content">
            <div class="timeline-circle" />
            <div class="timeline-txt">
              <h3>SKILL ANALYZER 暴龍天 合格</h3>
              <div class="sub-txt">
                累計飛んで約700クレ<br />旧筐体とVMの移り変わりの時期で色々ありました。
              </div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2021年5月</p>
          <div class="timeline-content">
            <div class="timeline-txt">VOLFORCE CRIMSON 到達<br /></div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2021年11月</p>
          <div class="timeline-content">
            <div class="timeline-circle" />
            <div class="timeline-txt">
              <h3>VOLFORCE IMPERIAL 到達</h3>
              <div class="sub-txt">
                <a
                  href="https://twitter.com/syg_74/status/1464499042738597892"
                  target="_blank"
                  >(Twitter)</a
                >
                累計約1500クレ ちょうど暴龍天が折り返しでした<br />
              </div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2023年3月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              Lachryma《Re:Queen’M》GRV S
              <div class="sub-txt">
                <a
                  href="https://twitter.com/syg_74/status/1635556285444923392"
                  target="_blank"
                  >(Twitter)</a
                >
                満足リザルト。もうゴール、していいよね<br />
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
          imgurl: "/img/Rhythm/Result/SDVX01.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/SDVX02.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main_box {
  min-width: 600px;
  padding-left: 30px;
}
.timeline {
  list-style: none;
}
@media screen and (max-width: 700px) {
  .carousel__slide {
    max-height: 500px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-height: 500px;
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
    height: 500px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-height: 500px;
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
