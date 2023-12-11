<template>
  <div>
    <div class="main_box">
      <br />
      <dir class="carousel_box">
        <carousel :items-to-show="1" :wrap-around="true">
          <slide v-for="content in contents" :key="content">
            <img class="img" :src="content.imgurl" />
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </dir>
      <br />
      <br />
      VOLFORCE : 21.009(IMPERIAL II)<br />
      SKILL ANALYZER : 後光暴龍天 / 銀枠神暴龍天<br />
      SDVX ID:SV-3690-6541<br />
      <br />
      寺が落ち着いたのでモチベ大復活。インぺ2まで駆け抜けました。<br />
      Vaddict:<a
        href="https://vaddict.b35.jp/user.php?player_id=SV-3690-6541"
        target="_blank"
        >URL</a
      ><br />
      <br />
      <br />
      <br />
      <hr style="width: 80%" />
      <Timeline :timeline_contents="timeline_contents"></Timeline>
    </div>
  </div>
</template>

<script>
import TimelineContents from "../../assets/SDVXTimelineContents.json";
import Timeline from "../Timeline";

export default {
  components: {
    Timeline,
  },
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
      timeline_contents: TimelineContents,
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
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-width: 80%;
  }
  .timeline > li {
    overflow: hidden;
    position: relative;
    margin: 0;
  }
  .timeline-line {
    content: "";
    width: 3px;
    height: 100%;
    background: #888;
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
  .timeline-date .month {
    display: none;
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
/* for Desktop */
@media screen and (min-width: 700px) {
  .carousel_box {
    width: 85%;
  }
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
    background: #888;
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
