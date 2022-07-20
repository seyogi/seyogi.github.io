<template>
  <div>
    略歴
    <font-awesome-icon icon="fa-solid fa-circle-question" v-on:click="test()" />
    <hr style="width: 80%" />
    <ul class="timeline">
      <li>
        <p class="timeline-date">2018年4月</p>
        <div class="timeline-circle" />
        <div class="timeline-content">
          <div class="timeline-txt">
            <h3>東京工業大学附属科学技術高等学校 入学</h3>
            <div class="sub-txt">情報・コンピュータサイエンス分野</div>
            マイコン制御部(MCC) 入部<br />
          </div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2018年7月</p>
        <div class="timeline-content">
          <div class="timeline-txt">CHUNITHM 虹レ到達<br /></div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2018年12月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            Hack Day 2018 参加<br />
          </div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2019年2月</p>
        <div class="timeline-content">
          <div class="timeline-txt">オンゲキ 虹レ到達<br /></div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2019年10月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            弟燕祭 個人製作音ゲー Lawine 展示<br />
            <div class="sub-li">CHUNITHM LEVEL13+ 全鳥<br /></div>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2020年2月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            高校生パフォーマンスロボット競技大会 3位入賞<br />
          </div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2020年5月</p>
        <div class="timeline-content">
          <div class="timeline-txt">Arcaea 全譜面PM<br /></div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2020年6月</p>
        <div class="timeline-content">
          <div class="timeline-txt">Dynamix WAVETEST CLASS11 Prime<br /></div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2021年3月</p>
        <div class="timeline-content">
          <div class="timeline-txt">SOUNDVOLTEX SKILL ANALYZER 暴龍天 合格<br /></div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2021年4月</p>
        <div class="timeline-circle" />
        <div class="timeline-content">
          <div class="timeline-txt">
            <h3>東京都市大学 入学</h3>
            <div class="sub-txt">知能情報工学科</div>
          </div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2021年5月</p>
        <div class="timeline-content">
          <div class="timeline-txt">Arcaea 全譜面PM奪還<br /></div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2021年9月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            Digital Hack Day 2021 参加<br />
          </div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2021年11月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            Beatmania IIDX 段位認定 七段 合格<br />
            DanceDanceRevolution 段位認定 七段 合格<br />
            CHUHITHM クラス認定 INFINITY 合格<br />
            SOUNDVOLTEX VOLFORCE IMPERIAL 到達<br />
          </div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2022年1月</p>
        <div class="timeline-content">
          <div class="timeline-txt">Beatmania IIDX 段位認定 九段 合格<br /></div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2022年2月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            Dynamix WAVETEST CLASS12 High<br />
            CHUHITHM LEVEL15 全鳥<br />
          </div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2022年4月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            CHUHITHM クラス認定 INFINITY 全合格(無限帯)<br />
          </div>
        </div>
      </li>
      <li class="sub-li">
        <p class="timeline-date">2022年7月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            Beatmania IIDX 段位認定 十段 合格<br />
            Beatmania IIDX 段位認定 中伝 合格<br />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const elements = document.getElementsByClassName("sub-li");

export default {
  methods: {
    test() {
      for (var i = 0; elements.length; i++) {
        if (elements[i].style.display == "block") {
          elements[i].style.display = "none";
        } else {
          elements[i].style.display = "block";
        }
      }
    },
  },
};
</script>

<style scoped>
.timeline {
  list-style: none;
}
.sub-li {
  display: none;
  color: #888;
  font-size: 14px;
}
@media screen and (max-width: 639px) {
  .timeline > li {
    margin-bottom: 30px;
  }
}
/* for Desktop */
@media screen and (min-width: 640px) {
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
