<template>
  <div>
    <div class="main_box">
      <br />
      <h2>About Me</h2>
      <br />
      情報系大学生による雑記ページです。<br />
      <br />
      <div class="introduction_box">
        <div class="left">
          <img class="img_icon" src="/img/me.png" />
          <div class="links">
            <a
              href="https://twitter.com/syg_74"
              target="_blank"
              rel="noopener noreferrer"
              class="box"
            >
              <font-awesome-icon
                class="icons"
                icon="fa-brands fa-twitter"
                size="2x"
                color="#422"
              />
            </a>
            <a
              href="https://github.com/seyogi"
              target="_blank"
              rel="noopener noreferrer"
              class="box"
            >
              <font-awesome-icon
                class="icons"
                icon="fa-brands fa-github"
                size="2x"
                color="#422"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC4HgyRgl5mOy7QXtOnm-pzQ"
              target="_blank"
              rel="noopener noreferrer"
              class="box"
            >
              <font-awesome-icon
                class="icons"
                icon="fa-brands fa-youtube"
                size="2x"
                color="#422"
              />
            </a>
          </div>
        </div>

        <div class="right">
          <br />
          &lt;Name&gt;  Seyogi<br />
          &lt;Jobs&gt;  Students of TCU Intelligent Systems B3<br />
          &lt;Hobbys&gt;  RhythmGame, Climbing, Walking<br /><br>
          &lt;Qualifications&gt; <br>
          <div class="sub">
          ・普通自動車免許(AT)<br>
          ・基本情報技術者
          </div>
          <br />
        </div>
        <br />
      </div>
      <br />
      <Careea></Careea>
      <br /><br />
      <br />
      <br />

      <br />
    </div>
  </div>
</template>

<script>
import Careea from "./Careea";

export default {
  components: {
    Careea,
  },
};
</script>

<style scoped>
.main_box {
  margin-left: 10px;
  width: 98%;
}
.introduction_box {
  display: flex;
}
.img_icon {
  margin: 20px;
  border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
  width: 120px; /* ※縦横を同値に */
  height: 120px; /* ※縦横を同値に */
  
}
.introduction_box .left {
  margin: 0 20px 30px 0;
}
.introduction_box .right {
  font-family:  "Arial";
  font-size:17px;
}
.introduction_box .right .sub{
  font-size:15px;
}
.introduction_box .links {
  
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

h2 {
  width: 80%;
  padding: 1rem 2rem;
  color: #fff;
  background: #644;
  -webkit-box-shadow: 5px 5px 0 #422;
  box-shadow: 5px 5px 0 #422;
}
h3 {
  width: 80%;
  padding: 1rem;
}
</style>
