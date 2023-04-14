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
        </template>
      </carousel>
      <br />
      <br />
      段位認定 : SP皆伝(RESIDENT)<br />
      IIDX ID : 7228-1124<br />
      <br />
      BISTROVERから本格的に始めました。<br />
      最近は目標もなくだらだらやってます。<br />
      <br />
      ☆12地力表:<a href="https://sp12.iidx.app/users/7228-1124" target="_blank">URL</a
      ><br />
      <br />
      <br />
      <br />

      <hr style="width: 80%" />
      <ul class="timeline">
        <li>
          <p class="timeline-date">2021年4月</p>
          <div class="timeline-circle" />
          <div class="timeline-content">
            <div class="timeline-txt">
              X-record 第一弾
              <div class="sub-txt">これを機に弐寺を触り始める</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2021年11月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              段位認定 SP七段 合格<br />
              <div class="sub-txt">そこまで拗らせなかった</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年1月</p>
          <div class="timeline-content">
            <div class="timeline-txt">段位認定 SP九段 合格<br /></div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年6月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              LEVEL12 初ハード<br />
              <div class="sub-txt">12初めての白ランプは赤いイカでした</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年7月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              段位認定 SP十段 合格<br />
              <h3>段位認定 SP中伝 合格</h3>
              <div class="sub-txt">requiem...</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年9月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              LEVEL12 ハード100曲<br />
              <div class="sub-txt">Valanga</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年11月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              LEVEL12 ハード200曲<br />
              <div class="sub-txt">Visterhv</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年12月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              LEVEL12 ハード300曲<br />
              <div class="sub-txt">Boomy and The Boost</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2023年1月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              LEVEL12 ハード400曲<br />
              <div class="sub-txt">ピアノ独奏無言歌 "灰燼"</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2023年2月</p>
          <div class="timeline-content">
            <div class="timeline-circle" />
            <div class="timeline-txt">
              <h3>段位認定 SP皆伝 合格</h3>
              <div class="sub-txt">
                <a
                  href="https://twitter.com/syg_74/status/1629064608454692865"
                  target="_blank"
                  >(Twitter)</a
                >
                小学生の頃に初めてAC音ゲーに触れた日からおよそ10年...遂に！！！
              </div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2023年3月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              LEVEL12 エクハ100曲<br />
              <div class="sub-txt">
                SOLID STATE SQUADで決めようと思ったら10回くらい落ちて泣いた
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
          imgurl: "/img/Rhythm/Result/Beatmania02.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/Beatmania01.jpg",
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
    max-height: 350px;
    width: 80%;
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
