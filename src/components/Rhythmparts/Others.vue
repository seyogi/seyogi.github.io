<template>
  <div>
    <div class="main_box">
      <br />
      <h3>オンゲキ</h3>
      <br />
      <div class="sub_box">
        <img src="/img/Rhythm/Result/GEKI01.jpg" class="img" />
        <div class="side_box">
          Max Rating : 17.01<br />
          <br />
          無印から細々やってます。<br />
          <a href="https://twitter.com/syg_74/status/1652928889893842946" target="_blank"
            >(2023/5/1)</a
          >RATING MASTER
          <br />
        </div>
      </div>
       <h3>maimai</h3>
      <br />
      <div class="sub_box">
        <img src="/img/Rhythm/Result/maimai01.jpg" class="img" />
        <div class="side_box">
          Max Rating : 15001<br />
          <br />
          つい先日虹レになりました。ようやく三機種虹！<br />
          <br />
        </div>
      </div>
      <h3>太鼓の達人</h3>
      <br />
      <div class="sub_box">
        <img src="/img/Rhythm/Result/Taiko01.jpg" class="img" />
        <div class="side_box">
          段位 : 十段(2023)<br />
          <br />
          一番最初に触れた音ゲーです。<br />
          最近やっと十段取れました。<br />
          <br />
        </div>
      </div>
      <h3>pop'n music</h3>
      <br />
      <div class="sub_box">
        <img src="/img/Rhythm/Result/popn01.jpg" class="img" />
        <div class="side_box">
          ポックラ : 94.?<br />
          最高 : 49<br />
          <br />
          安定47？48のクリアがちらほらついてきました。<br />
          <br />
        </div>
      </div>
      <h3>Arcaea</h3>
      <br />
      <div class="sub_box">
        <img src="/img/Rhythm/Result/Arcaea01.jpeg" class="img" />
        <div class="side_box">
          Potential : 13.00<br />
          ID : 424 326 576<br />
          <br />
          ~ver3.12まで全曲全難易度PMでした。<br />
          半世紀後に全PM復帰予定です。<br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {
  width: 45%;
  max-width: 350px;
}
h3 {
  width: 60%;
  font-size: 100%;
  max-height: 30px;
  margin-left: 20px;
  padding: 0 1rem;
  border-left: 6px double #644;
  background: linear-gradient(to right, #dbb, #fffae6);
}
/* for Desktop */
@media screen and (min-width: 640px) {
  .sub_box {
    display: flex;
    width: 90%;
    padding-left: 20px;
    padding-bottom: 70px;
  }
}
@media screen and (max-width: 639px) {
  img {
    padding-left: 20px;
  }
}
.side_box {
  padding-left: 20px;
  width: 45%;
}
</style>
