<template>
  <div>
    <br />
    <br />
    <div class="container">
      <div v-for="content in contents" :key="content">
        <div class="content">
          <img class="img" :src="content.imgurl" style="width: 250px; max-width: 100%" />
          <div class="text">
            {{ content.title }}<br />
            <a class="sub">{{ content.text }}</a><br />
          </div>
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
          imgurl: "/img/product/others/TeiennsaiPlay2.png",
          title: "Lawine",
          text: "Unity,Arduino",
          //後日デモ動画<a href="https://www.youtube.com/watch?v=MPh_ZoqeVxU" target="_blank">URL</a>(非公開)
        },
        {
          imgurl: "/img/product/others/KBTKING.png",
          title: "カブトキング",
          text: "Arduino",
        },
        {
          imgurl: "/img/product/others/App_notification.jpg",
          title: "スマホアプリ(名称未定)",
          text: "Flutter",
        },
        {
          imgurl: "/img/product/others/pbl_app.png",
          title: "デスクトップアプリ(名称未定)",
          text: "JavaFX",
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
}
.content {
  margin: 10px;
  width: 250px;
  height: 300px;
  border: 1px solid #007db9;
}
.content .text {
  padding: 10px;

}.content .text .sub{
  font-size: 12px;
}
</style>
