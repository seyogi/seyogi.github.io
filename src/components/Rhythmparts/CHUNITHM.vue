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
        Max Rating : 17.33<br />
        CLASS EMBLEM : INFINITY -ALL CLEAR-<br />
        フレンドコード : 4069095717545<br />
        <br />
        最近は全くと言っていい程やってないですが、高校~大学1年の頃はメイン機種でした。<br />
        <br />
        <br />
        <br />
        <br />
        <hr style="width: 80%" />
        <Timeline :timeline_contents="timeline_contents"></Timeline>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineContents from "../../assets/CHINITHMTimelineContents.json";
import Timeline from "../Timeline";

export default {
  components: {
    Timeline,
  },
  data() {
    return {
      contents: [
        {
          imgurl: "/img/Rhythm/Result/UNI02.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/UNI01.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/UNI03.jpg",
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
