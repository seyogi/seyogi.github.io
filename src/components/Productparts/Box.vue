<template>
  <div>
    <br />
    <div class="container">
      <div class="content" v-for="content in contents" :key="content" >
        <button @click="click_1(content)">
          <img class="img" :src="content.imgurl" />
          <div class="text">
            {{ content.title }}<br />
          </div>
        </button>
      </div>
    </div>
    <modal :message="message" v-show="modal" @execute-method="executeMethod"></modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      active: "1",
      message: {},
      modal: false,
      contents: [
        {
          imgurl: "/img/product/others/Electron.png",
          title: "SDVX Input Overlay",
          text: "名前の通り",
          Keywords: "Electron",
          url: "https://github.com/seyogi/SDVX_KeyDisplay",
          urltxt: "github"
        },
        {
          imgurl: "/img/product/others/TeiennsaiPlay2.png",
          title: "Lawine",
          text: "文化祭で展示した音楽ゲーム",
          Keywords: "Unity, Arduino",
          url: "https://github.com/seyogi/SDVX_ArduinoCon",
          urltxt: "github"
        },
        {
          imgurl: "/img/product/others/KBTKING.png",
          title: "カブトキング",
          text: "高校時代の部活動で作成した、カブトムシモチーフの競技用ロボット",
          Keywords: "Arduino",
        },
        {
          imgurl: "/img/product/others/scraping.png",
          title: "scraping_sp12_iidx",
          text: "12参考表のデータを参照し、CPI向けのcsvファイルを生成するアプリ",
          Keywords:"Python + Selenium",
        },
      ],
    };
  },
  methods: {
    select: function (num) {
      this.active = num;
    },
    click_1(content) {
      this.message = content;
      this.modal = true;
    },
    executeMethod() {
      this.modal = false;
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
    font-weight: bold;
  }

  .content button{
    background-color: #d4f2ff;
    border: 1px solid #007db9;
  }

  .content .text {
    min-height: 30px;
    padding-top: 10px;
    font-size: 15px;
  }

  .content img {
    max-width: 100%;
    max-height: 400px;
  }

  .content:hover {
    opacity: 0.5;
    transition: 0.3s;
    transform: scale(1.03);
  }
}

/* for Desktop */
@media screen and (min-width: 700px) {
  .content {
    margin: 10px;
    max-width: 250px;
    font-weight: bold;
  }
  .content button{
    background-color: #d4f2ff;
    border: 1px solid #007db9;
  }

  .content .text {
    min-height: 30px;
    padding-top: 10px;
    font-size: 15px;
  }

  .content img {
    width: 250px;
    max-width: 100%;
  }

  .content:hover {
    opacity: 0.5;
    transition: 0.3s;
    transform: scale(1.03);
  }
}
</style>
