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
      <br />
      <br />
      段位認定 : SP十段(A3)<br />
      最高 : SP足19 / DP足18 <br />
      DDR CODE : 61609228<br /><br />
      19クリア ... 5 / 7(8) <br />
      <br />
      <br />
      <br />
      <hr style="width: 80%" />
      <Timeline :timeline_contents="timeline_contents"></Timeline>
    </div>
  </div>
</template>

<script>
import TimelineContents from "../../assets/DDRTimelineContents.json";
import Timeline from "../Timeline";

export default {
  components: {
    Timeline,
  },
  data() {
    return {
      contents: [
        {
          imgurl: "/img/Rhythm/Result/DDR01.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/DDR02.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/DDR03.jpg",
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
}
</style>
