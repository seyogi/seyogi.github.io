<template>
  <div>
    <div class="main_box">
      <br />
      <h2>About Here</h2><br />
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
      </div>
      <br />
      <h2>About Me</h2><br />
      <div class="introduction_box">
        <div class="left">
          <img class="img_icon" src="/img/me.png" />
          <div class="links">
            <a href="https://twitter.com/syg_74" target="_blank" rel="noopener noreferrer" class="box">
              <font-awesome-icon class="icons" icon="fa-brands fa-x-twitter" size="2x" color="#422" />
            </a>
            <a href="https://github.com/seyogi" target="_blank" rel="noopener noreferrer" class="box">
              <font-awesome-icon class="icons" icon="fa-brands fa-github" size="2x" color="#422" />
            </a>
            <a href="https://www.youtube.com/channel/UC4HgyRgl5mOy7QXtOnm-pzQ" target="_blank" rel="noopener noreferrer"
              class="box">
              <font-awesome-icon class="icons" icon="fa-brands fa-youtube" size="2x" color="#422" />
            </a>
          </div>
          
        </div>
        <div class="right">
          <div class="Desktop_text">
            <div class="name">SEYOGI</div>
            TCU Graduate School<br />
            Informatics M1<br /><br />
            <h4>- Interests</h4>
            <pre class="eng">&#009;Artificial Neural Networks</pre>
            <pre class="eng">&#009;Neuroscience</pre>
            <pre class="eng">&#009;Brain Computer Interface</pre>
            <br />
            <h4>- Qualifications</h4>
            <pre>&#009;基本情報技術者 (2023.6)</pre>
            <pre>&#009;応用情報技術者 (2023.12)</pre><br /><br /><br /><br />
          </div>
          <div class="Phone_text">
            <div class="name">SEYOGI</div><br />
            TCU Graduate School Informatics M1<br /><br />
            <h3>- Interests - </h3>
            <p>Neuroscience</p>
            <p>Artificial Neural Networks</p>
            <p>Brain Computer Interface</p>
            <br />
            <h3>- Qualifications -</h3>
            基本情報技術者<br />
            応用情報技術者<br /><br />
            <h3>- Hobby -</h3>
            RhythmGame<br />
            Walking<br />
            Climbing<br />
          </div>
        </div>
        <br />
      </div><br>
      <h2>Activity</h2>
      <Activity class="Activity_box"></Activity>
      <br /><br /><br />
    </div>
  </div>
</template>

<script>
import Activity from "./Activity.vue";

export default {
  components: {
    Activity,
  },
};
</script>

<style scoped>

.intro_box{
    margin-left: 20px;
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
  .Activity_box {
    margin: 30px 10px;
  }
  h2 {
    width: 80%;
    padding: 0.5rem 2rem;
    color: #fff;
    background: #866;
    -webkit-box-shadow: 5px 5px 0 #644;
    box-shadow: 5px 5px 0 #644;
  }
  .introduction_box .right{
    margin-top: 0px;
  }

  .introduction_box .left {
    margin: 30px auto;
    text-align: center;
  }

  .introduction_box .left .img_icon {
    margin: 20px;
    border-radius: 50%;
    /* 角丸半径を50%にする(=円形にする) */
    width: 120px;
    /* ※縦横を同値に */
    height: 120px;
    /* ※縦横を同値に */
  }
  .introduction_box .name {
    font-weight: bold;
    font-family: "Arial";
    font-size: 36px;
  }

  .Desktop_text {
    display: none;
  }

  .Phone_text {
    display: block;
    text-align: center;
  }
}

/* for Desktop */
@media screen and (min-width: 700px) {
  
.main_box {
  margin-left: 4%;
  margin-right: 4%;
  width: 92%;
}
  .Activity_box {
    margin: 30px;
  }
  .introduction_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .introduction_box .left {
    margin: 30px;
  }

  .introduction_box .left .img_icon {
    margin: 20px;
    border-radius: 50%;
    /* 角丸半径を50%にする(=円形にする) */
    width: 120px;
    /* ※縦横を同値に */
    height: 120px;
    /* ※縦横を同値に */
  }  

  .Desktop_text {
    display: block;
    text-align: left;
  }
  .introduction_box .name {
    font-weight: bold;
    font-family: "Arial";
    font-size: 28px;
    margin-bottom: 5px;
  }
  .introduction_box .right {
    display: block;
    margin: 30px 30px 0px 30px;
    font-family: "Arial";
    font-size: 17px;
  } 
  .introduction_box .right pre{
    font-family: "Arial";
    font-size: 15px;
  }
  .introduction_box .right .eng {
    font-size: 16px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .Phone_text {
    display: none;
  }
}

.introduction_box .links {
  justify-content: center;
  display: flex;
  padding-left: 10px;
  margin: 0 auto;
}

.introduction_box .links .box {
  min-width: 40px;
  text-align: center;
  padding-right: 10px;
}

.introduction_box .links .box:hover .icons {
  opacity: 0.5;
  transition: 300ms;
  animation: 1s ease-in-out rotation1;
}

@keyframes rotation1 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* for Desktop */
@media screen and (min-width: 700px) {
  h2 {
    width: 90%;
    padding: 0.5rem 2rem;
    color: #fff;
    background: #866;
    -webkit-box-shadow: 5px 5px 0 #644;
    box-shadow: 5px 5px 0 #644;
  }
}
</style>
