<template>
  <div>
    <div class="main_box">
      <h3>ここは何？</h3>
      雑記ページです。<br />
      サイト更新サボり気味、、、新学期はちゃんと書きます。<br />
      <br />
      <h2>About Me</h2>
      <div class="introduction_box">
        <img class="img_icon" src="/img/tairituSD.png" />
        <div>
          <br />
          HN >Seyogi<br />
          Jobs >Students of TCU Intelligent Systems B2<br />
          Hobbys >RhythmGame,Climbing<br />
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
  margin-left: 10px;
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

.introduction_box .links {
  display: flex;
  padding-top: 10px;
}
.introduction_box .links .box {
  min-width: 40px;
  text-align: center;
  padding-right: 10px;
}
.introduction_box .links .box:hover .icons {
  opacity: 0.5;
  transition: 300ms;
  animation: 2s linear infinite rotation1;
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
