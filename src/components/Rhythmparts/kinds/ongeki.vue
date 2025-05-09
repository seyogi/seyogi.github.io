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
        Max Rating : 17.04 (Act.3) / 22.001 (Re:Fresh)<br />
        フレンドコード : 4067035919555<br />
        <br />
        <a href="https://x.com/syg_74/status/1652928889893842946" target="_blank">(2023/5/1)</a> RATING MASTER<br>
        <a href="https://x.com/syg_74/status/1920390414982406617" target="_blank">(2025/5/8)</a> ULTIMATE RATING MASTER<br>
        <br />
        <hr style="width: 80%" />
        <Timeline :timeline_contents="timeline_contents"></Timeline>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineContents from "../../../assets/ongekiTimelineContents.json";
import Timeline from "../Timeline.vue";

export default {
  components: {
    Timeline,
  },
  data() {
    return {
      contents: [
        {
          imgurl: "/img/Rhythm/Result/GEKI01.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/GEKI02.jpg",
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
    max-height: 450px;
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
    max-height: 450px;
    max-width: 100%;
  }
}
</style>
