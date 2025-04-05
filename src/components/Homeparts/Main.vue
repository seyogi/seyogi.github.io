<template>
  <div>
    <div class="main_box">
      <br />
      <h2>Top</h2><br />
      <div class="intro_box">
        Aboutを分離したらトップページが寂しくなってしまったので、以下仮置き<br /><br />
        <h3>サオリさん絆ランクログ</h3>
        <hr style="width: 100%" />
        <a class="date_box">2024.7</a>: お出迎え Sheside outside 神イベでした...<br>
        <a class="date_box">2024.9</a>: 絆50 9月3日は錠前サオリさんの誕生日です<br>
        <a class="date_box">2024.11</a>: 絆60<br>
        <a class="date_box">2025.1</a>: 絆70 だいたい1/3 先は長い<br>
        <a class="date_box">2025.4</a>:<br>
        <img class="saoriImg" src="/img/saori78.png" /><br><br>
      </div>
     
    </div>
  </div>
</template>


<script>
import TimelineContents from '../../assets/SaoriKizuna.json';
import Timeline from "./Timeline.vue";

export default {
  components: {
    Timeline,
  },
  data() {
    return {
      timeline_contents:TimelineContents,
    };
  },
};
</script>


<style scoped>

  .saoriImg {
    width: 90%;
    max-width: 600px;
    margin: auto;
    display: block;
  }
  .date_box{
    display: inline-block;
    min-width:80px;
    margin-left: 20px;
  } 

  .intro_box{
    margin-left: 20px;
  } 

@media screen and (max-width: 700px) {

  .main_box {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }
  h2 {
    width: 80%;
    padding: 0.5rem 2rem;
    color: #fff;
    background: #866;
    -webkit-box-shadow: 5px 5px 0 #644;
    box-shadow: 5px 5px 0 #644;
  }
}

/* for Desktop */
@media screen and (min-width: 700px) {
  
  .main_box {
    margin-left: 4%;
    margin-right: 4%;
    width: 92%;
  }
  h2 {
    width: 90%;
    padding: 0.5rem 2rem;
    color: #fff;
    background: #866;
    -webkit-box-shadow: 5px 5px 0 #644;
    box-shadow: 5px 5px 0 #644;
  }
  
}


@keyframes rotation1 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>
