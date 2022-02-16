<template>
  <div>
    <div class="main_box">
      <br> 
      一般学生音ゲーマーのせよぎによる雑記ページです。<br>
      Vue触ったし年内にはサイト一新しようかなーとか考えてから年をまたいで一ヶ月経ちました。<br>
      <br>
      <h2>About Me</h2>
      <br>
      音ゲー歴10年以上の情報系大学生B2(予定)です。<br>
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
</style>
