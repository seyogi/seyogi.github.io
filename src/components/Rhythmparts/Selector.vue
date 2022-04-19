<template>
  <div>
    <div class="main_box">
      <div style="display: flex">
        <div v-for="game in games" :key="game.title">
          <div class="detail_hexagon" :style="game.styles"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          title: "オンゲキ",
          styles: {
            //http://alphasis.info/wp-content/uploads/2012/01/gimp-tutorial-12012402.jpg
            "background-image": `url(/img/Rhythm/logo/ongeki_logo.jpg)`,
          },
        },
        {
          title: "Test",
          styles: {
            "background-image": `url(http://alphasis.info/wp-content/uploads/2012/01/gimp-tutorial-12012402.jpg)`,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.main_box {
  margin-left: 10px;
}
.detail_hexagon {
  display: block;
  width: 200px;
  height: 173px;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  -webkit-clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  position: relative;
  overflow: hidden;
  background-size: contain;
  background-position: center;
}
</style>
