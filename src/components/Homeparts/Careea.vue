<template>
  <div>
    <h3>略歴</h3>
    <hr style="width: 80%" />
    <ul class="timeline">
      <li>
        <p class="timeline-date">2018年4月</p>
        <div class="timeline-circle" />
        <div class="timeline-content">
          <div class="timeline-txt">
            東京工業大学附属科学技術高等学校入学
            <div class="sub-txt">情報・コンピュータサイエンス分野</div>
            マイコン制御部入部<br />
            <div class="sub-txt">Microcomputer Control Club (MCC)</div>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2018年12月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            Hack Day 2018<br />
            <div class="sub-txt">Sound Hand / TOBIC</div>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2019年10月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            弟燕祭 音ゲー展示<br />
            <div class="sub-txt">Lawine / 個人製作</div>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2020年2月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            高校生パフォーマンスロボット競技大会<br />
            <div class="sub-txt">3位入賞 : カブトキング / MCC</div>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2021年4月</p>
        <div class="timeline-circle" />
        <div class="timeline-content">
          <div class="timeline-txt">
            東京都市大学入学
            <div class="sub-txt">知能情報工学科</div>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2021年9月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            Digital Hack Day 2021<br />
            <div class="sub-txt">A.I. Post / ご注文は豆腐職人ですか？</div>
          </div>
        </div>
      </li>
      <li>
        <p class="timeline-date">2022年10月</p>
        <div class="timeline-content">
          <div class="timeline-txt">
            JPHACKS 2022<br />
            <div class="sub-txt">Qusahaiel / ご注文は豆腐職人ですか？</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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
@media screen and (max-width: 700px) {
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
    top: 18px;
    border-radius: 100%;
  }
  .timeline-txt {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
    margin-bottom: 15px;
    color: #444;
  }
}
</style>
