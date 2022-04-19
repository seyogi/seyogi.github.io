<template>
  <div>
    <div class="main_box">
      <br />
      <br />
      準備中<br />
      <br />
      いろんな音ゲーの備忘録ブログ的な感じで運用していきたい(願望)<br />
      <br />
      <br />
      <div v-for="game in games" :key="game.title">
        <div class="detail_hexagon" :style="game.styles"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
          img_URL: '../../images/Result/ongeki_rogo.jpg',
          styles: {
            'background-image': `url(../../images/Result/ongeki_rogo.jpg)`,
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
  /*background-Image: url(../../images/Result/ongeki_rogo.jpg);*/
}
</style>
