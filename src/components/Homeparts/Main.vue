<template>
  <div>
    <div class="main_box">
      <br />
      情報系大学生による雑記ページです。<br />
      <br />
      <h2>About Me</h2>
      <div class="introduction_box">
        <div class="left">
          <img class="img_icon" src="/img/me.png" />
          <div class="links">
            <a href="https://twitter.com/syg_74" target="_blank" rel="noopener noreferrer" class="box">
              <font-awesome-icon class="icons" icon="fa-brands fa-twitter" size="2x" color="#422" />
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
            <b>Seyogi</b><br />
            TCU Intelligent Systems B3<br /><br />
            <h4>- Hobby -</h4>
            RhythmGame / Walking / Climbing<br /><br />
            <h4>- Qualifications -</h4>
            <a class="sub">
              普通自動車免許(AT)<br />
              基本情報技術者<br />
              応用情報技術者<br />
            </a>
          </div>
          <div class="Phone_text">
            <b>Seyogi</b><br />
            TCU Intelligent Systems B3<br /><br />
            <h4>- Hobby -</h4>
            RhythmGame<br />
            Walking<br />
            Climbing<br /><br />
            <h4>- Qualifications -</h4>
            普通自動車免許(AT)<br />
            基本情報技術者<br />
            応用情報技術者<br />
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br /><br /><br />
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style scoped>
.main_box {
  margin-left: 4%;
  margin-right: 4%;
  width: 92%;
}

@media screen and (max-width: 700px) {
  .introduction_box {}

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

  .introduction_box .right {
    margin: 30px 30px;
    font-family: "Arial";
    font-size: 17px;
  }

  .introduction_box .right .sub {
    font-size: 15px;
  }

  .Desktop_text {
    display: block;
    text-align: center;
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

@media screen and (max-width: 700px) {
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
