<template>
  <carousel :items-to-show="1" :wrap-around="true">
    <slide v-for="content in contents" :key="content">
      <img class="img" :src="content.imgurl" />
      {{ content.competition }}<br />
      {{ content.title }}
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      contents: [
        {
          competition: "JPHACKS 2022",
          title: "Qsahaiel",
          imgurl: "/img/product/robots/Qsahaiel2.png",
        },
        {
          competition: "Hack Day 2018",
          title: "Sound hand",
          imgurl: "/img/product/robots/soundhand.png",
        },
        {
          competition: "Digital Hack Day 2021",
          title: "A.I.POST",
          imgurl: "/img/product/robots/magicpost.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel__slide {
  height: 350px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide img {
  max-height: 80%;
  max-height: 300px;
  max-width: 80%;
  padding-right:30px;
}
</style>
