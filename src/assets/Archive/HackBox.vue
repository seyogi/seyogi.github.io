<template>
  <div class="box">
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
</template>

<script>
export default {
  components: {},
  data() {
    return {
      contents: [
        {
          competition: "OPEN HACK U 2024",
          title: "あおなび",
          imgurl: "/img/product/hack/Ao_navi.png",
        },
        {
          competition: "JPHACKS 2023",
          title: "スマートホームメイド",
          imgurl: "/img/product/hack/smarthome.png",
        },
        {
          competition: "JPHACKS 2022",
          title: "Qsahaiel",
          imgurl: "/img/product/hack/Qsahaiel2.png",
        },
        {
          competition: "Digital Hack Day 2021",
          title: "A.I.POST",
          imgurl: "/img/product/hack/magicpost.png",
        },
        {
          competition: "Hack Day 2018",
          title: "Sound hand",
          imgurl: "/img/product/hack/soundhand.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 700px) {
  .box {
    margin: 20px 0;
    width: 100%;
  }
  .carousel__slide {
    max-height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-height: 100%;
    max-width: 85%;
    padding-top: 30px;
  }
}
/* for Desktop */
@media screen and (min-width: 700px) {
  .box {
    margin: auto;
    display: block;
    width: 90%;
  }
  .carousel__slide {
    max-height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-height: 100%;
    max-width: 80%;
    padding-top: 30px;
  }
}
</style>
