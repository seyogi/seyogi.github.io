<template>
  <div>
    <div class="main_box">
      <h3>ここは何？</h3>
      雑記ページです。<br>
      サイト更新サボり気味、、、新学期はちゃんと書きます。<br>
      <br>
      <h2>About Me</h2>
      <div class="introduction_box"> 
        <img class="icon" src="/img/tairituSD.png" />
        <br>
        HN >Seyogi<br>
        Jobs >Students of TCU Intelligent Systems B2<br>
        Hobbys >RhythmGame,Climbing<br>
        <br>
        音ゲー歴はもう10年以上になります。<br>
      </div>
      <br>
      <Careea></Careea>
       <br><br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    </div>
  </div>
</template>

<script setup>
import Careea from "./Mainparts/Careea";

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
.introduction_box{
  display: flex;
}
.icon {
    margin: 20px ;
    border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
    width:  120px;       /* ※縦横を同値に */
    height: 120px;       /* ※縦横を同値に */
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
