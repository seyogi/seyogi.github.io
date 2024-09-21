<template>
  <div>
    <br />
    <div class="container">
      <div class="content" v-for="content in contents" :key="content">
        <img class="img" :src="content.imgurl" />
        <div class="text">
          {{ content.title }}<br />
          <a class="sub">
            {{ content.text }}
            <br/>
            {{ content.text2 }}
          </a><br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
      contents: [
        {
          imgurl: "/img/product/others/Electron.png",
          title: "SDVX Input Overlay",
          text: "名前の通り",
          text2: "Keywords: Electron",
        },
        {
          imgurl: "/img/product/others/TeiennsaiPlay2.png",
          title: "Lawine",
          text: "文化祭で展示した音楽ゲーム",
          text2: "Keywords: Unity,Arduino",
        },
        {
          imgurl: "/img/product/others/KBTKING.png",
          title: "カブトキング",
          text: "競技用ロボット",
          text2: "Keywords: Arduino",
        },
        {
          imgurl: "/img/product/others/scraping.png",
          title: "scraping_sp12_iidx",
          text: "12参考表のデータを参照し、CPI向けのcsvファイルを生成するアプリ",
        },
      ],
    };
  },
  methods: {
    select: function (num) {
      this.active = num;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}
@media screen and (max-width: 700px) {
  .content {
    width: calc(50% - 12px);
    margin: 5px;
    border: 1px solid #007db9;
  }
  .content .text {
    min-height: 50px;
    padding: 5px 7.5px;
    font-size: 15px;
  }
  .content .text .sub {
    font-size: 12px;
  }
  .content img {
    max-width: 100%;
    max-height: 400px;
  }
}
/* for Desktop */
@media screen and (min-width: 700px) {
  .content {
    margin: 10px;
    max-width: 250px;
    height: 300px;
    border: 1px solid #007db9;
  }
  .content .text {
    padding: 10px;
  }
  .content img {
    width: 250px;
    max-width: 100%;
  }
  .content .text .sub {
    font-size: 12px;
  }
}
</style>
