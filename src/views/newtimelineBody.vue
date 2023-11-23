<template>
  <div class="center_container">
    <h3>略歴</h3>
    <hr style="width: 80%" />
    <div class="timeline" v-for="content in contents" :key="content">
      <li>
        <div class="timeline-line" />
        <p class="timeline-date" v-if="'date_y' in content">
          <a v-if="'date_y' in content">{{content.date_y}}</a>
          <a class="month" v-if="'date_m' in content">{{content.date_m}}</a>
        </p>
        
        <div class="timeline-content">
          <div class="timeline-circle" v-if="content.circle == true" />
          <div class="timeline-txt">
            {{content.text}}
            <div class="sub-txt" v-if="'sub_text' in content" >
                {{content.sub_text}}
            </div>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
const elements = document.getElementsByClassName("sub-li");

export default {
  components: {},
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
  data() {
    return {
      contents: [
        {
          circle: true, 
          model: "iidx",
          date_y: "2018年",
          date_m: " 4月",
          text: "東京工業大学附属科学技術高等学校 入学",
          sub_text: "情報・コンピュータサイエンス分野",
        },
        {
          model: "sdvx",
          date_y: "", 
          text: "マイコン制御部入部",
          sub_text: "Microcomputer Control Club (MCC)"
        },
        {
          date_y: "",
          date_m: "12月",
          text: "Hack Day 2018",
          sub_text: "Sound Hand / TOBIC"
        },
        {
          date_y: "2019年",
          date_m: "10月",
          text: "弟燕祭 音ゲー展示",
          sub_text: "Lawine / 個人製作"
        },
        {
          date_y: "2020年",
          date_m: " 2月",
          text: "高校生パフォーマンスロボット競技大会 … 3位入賞",
          sub_text: "カブトキング / MCC"
        },
        {
          circle: true, 
          model: "iidx",
          date_y: "2021年",
          date_m: " 4月",
          text: "東京都市大学 入学",
          sub_text: "知能情報工学科",
        },
        {
          date_y: "",
          date_m: " 9月",
          text: "Digital Hack Day 2021",
          sub_text: "A.I. Post / ご注文は豆腐職人ですか？"
        },
        {
          date_y: "2022年",
          date_m: "10月",
          text: "JPHACKS 2022",
          sub_text: "Qusahaiel / ご注文は豆腐職人ですか？"
        },
        {
          date_y: "2023年",
          date_m: "10月",
          text: "JPHACKS 2023 … スポンサー賞 受賞 / Award Day 進出",
          sub_text: "スマートホームメイド / 高輪ﾊﾞｯﾄﾞｹﾞｰﾄｳｪｲ前ﾊｰﾄﾞｳｪｱ幼稚園"
        },
      ],
    };
  },
};
</script>

<style scoped>
.timeline {
  list-style: none;
}
@media screen and (max-width: 700px) {
  .timeline > li {
    overflow: hidden;
    position: relative;
    margin: 0;
  }
  .timeline-line {
    content: "";
    width: 3px;
    height: 100%;
    background:#888;
    position: absolute;
    left: 20px;
  }
  .timeline-circle {
    content: "";
    width: 12px;
    height: 12px;
    background: #833;
    position: absolute;
    left: 16px;
    top: 5px;
    border-radius: 100%;
  }
  .timeline-content {
    width: 75%;
    float: left;
    position: relative;
    padding-left: 50px;
  }
  .timeline-date {
    width: 80px;
    margin: 4px;
    text-align: center;
    background: #daa;
    border-radius: 10px; /* 角丸半径を50%にする(=円形にする) */
    margin-left: 40px;
  }
  .timeline-date .month{
    display: none;
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
    width: 100px;
    float: left;
    margin-top: 12px;
    margin-right: 10px;
    text-align: right;
  }  
  .timeline-line {
    content: "";
    width: 3px;
    height: 100%;
    background:#888;
    position: absolute;
    left: 110px;
  }
  .timeline-circle {
    content: "";
    width: 12px;
    height: 12px;
    background: #833;
    position: absolute;
    left: 106px;
    top: 16px;
    border-radius: 100%;
  }
  .timeline-content {
    width: 75%;
    float: left;
    padding-left: 30px;
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
