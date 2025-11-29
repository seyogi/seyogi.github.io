<template>
  <div>
    <Banner></Banner>
    <div class="main_box">
      <br />
      <h2>Top</h2><br />
      <div class="intro_box">
        情報系大学院生の雑記ページです<br />
        <br />
        当サイトは主に<br />
        
        <ul>
          <li>趣味(音楽ゲーム)の話</li>
          <li>個人/チームでの製作活動の話</li>
        </ul>
        などの要素で構成されています
        <br />
        <br />    
        <h3>latest</h3>
        <hr style="width: 90%" /><br>
        <Blog />
        <br />
        <br />
            
        <!---->
      </div>
    </div>
  </div>
</template>


<script>
import Banner from "./Banner.vue";
import Blog from "./Blog.vue";

export default {
  components: {
    Banner,
    Blog
  },
};
</script>


<style scoped>
  .intro_box{
    margin-left: 20px;
    margin-right: 20px;
  } 
  li{
    margin: 2px 0px 2px 40px;
    list-style-type: square;
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
