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
        <br />
        ポックラ：97.50<br />
        最高クリア：ノマゲ49/イージー50<br />
        <br />
        ポプともID：3089-8010-8948<br />
        <br />
        <hr style="width: 80%" />
        <Timeline :timeline_contents="timeline_contents"></Timeline>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineContents from "../../../assets/popnTimelineContents.json";
import Timeline from "../Timeline.vue";

export default {
  components: {
    Timeline,
  },
  data() {
    return {
      contents: [
        {
          imgurl: "/img/Rhythm/Result/popn02.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/popn01.jpg",
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
