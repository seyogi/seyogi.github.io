<template>
  <div>
    <div class="main_box">
      <br />
      <div class="carousel_box">
        <carousel :items-to-show="1" :wrap-around="true">
          <slide v-for="content in contents" :key="content">
            <img class="img" :src="content.imgurl" />
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
      <div class="text_box">
        段位認定 : SP皆伝 <br />
        アリーナ : A2(スコア) / A1(ミスカン) <br />
        IIDX ID : 7228-1124 (<a href="https://sp12.iidx.app/users/7228-1124" target="_blank">☆12参考表</a>) 
        <br />
        <br />
        BISTROVERから本格的に始めました。ライバル募集中！<br />
        <a href="https://x.com/syg_74/status/1873960278578389487" target="_blank">2024/12/31</a> 全白達成<br />
        <br />
        <hr style="width: 80%" />
        <Timeline :timeline_contents="timeline_contents"></Timeline>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineContents from "../../../assets/iidxTimelineContents.json";
import Timeline from "../Timeline";

export default {
  components: {
    Timeline,
  },
  data() {
    return {
      contents: [
        {
          imgurl: "/img/Rhythm/Result/Beatmania02.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/Beatmania01.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/Beatmania03.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/Beatmania04.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/Beatmania05.jpg",
        },
      ],
      timeline_contents: TimelineContents,
    };
  },
};
</script>

<style scoped>
.main_box {
}
.main_box .text_box {
  padding: 20px;
}
.timeline {
  list-style: none;
}
@media screen and (max-width: 700px) {
  .carousel__slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-width: 100%;
    max-height: 350px;
  }
}
/* for Desktop */
@media screen and (min-width: 700px) {
  .carousel_box {
    margin: auto;
    display: block;
    width: 90%;
  }
  .carousel__slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-height: 350px;
    max-width: 100%;
  }
}
</style>
