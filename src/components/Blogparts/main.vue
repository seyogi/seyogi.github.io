<template>
  <div>
    <Banner></Banner>
    <div class="main_box">
        <br>
        整備中です<br>
        外部ブログは
        <a href="https://seyogi.hatenablog.com/" target="_blank" class="linktxt">こちら</a >
        <br>
        <br>
        <hr>
        <blog_preview></blog_preview>
    </div>
  </div>
</template>

<script>
import blog_preview from "./blog_preview.vue";
import Banner from "./banner.vue";

export default {
  components: {
    Banner,
    blog_preview,
  },
};
</script>

<style scoped>
@media screen and (max-width: 700px) {
  .main_box {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }
}

/* for Desktop */
@media screen and (min-width: 700px) {
  .main_box {
    width: 92%;
    margin-left: 4%;
    margin-right: 4%;
  }
}
</style>
