<template>
  <div>
    <div class="main_box">
      <h3>ここは何？</h3>
      雑記ページです。<br>
      サイト更新サボり気味、、、新学期はちゃんと書きます。<br>
      <br>
      <h2>About Me</h2>
      <br>
      HN/せよぎ<br>
      Jobs/Students<br>
      University/TCU Intelligent Systems B2<br>
      <br>
      音ゲー歴はもう10年以上になります。<br>
      <br>
      <Careea></Careea>
       <br><br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    </div>
  </div>
</template>

<script setup>
import Careea from "./Careea";

export default {
  components: {
    Careea,
  },
};
</script>


<style scoped>
.main_box {
    margin-left : 10px ;
}
h2 {
  width:80%;
  padding: 1rem 2rem;
  color: #fff;
  background: #644;
  -webkit-box-shadow: 5px 5px 0 #422;
  box-shadow: 5px 5px 0 #422;
}
h3 {
  width:80%;
  padding: 1rem;
}
</style>
