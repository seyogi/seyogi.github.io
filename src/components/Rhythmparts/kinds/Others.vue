<template>
  <div>
    <div class="main_box">
      <br />
      <h3>maimai</h3>
      <br />
      <div class="sub_box">
        <img src="/img/Rhythm/Result/maimai01.jpg" class="img" />
        <div class="side_box">
          Max Rating : 15033<br />
          <br />
          BUDDiESで虹レになりました。<br>
          リーチかかってから三機種虹まで長かった～！<br />
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
          一番最初に触れた音ゲーです。(モモイロでした)<br />
          ニジイロ2023でやっと十段取れました<br />
          <br />
        </div>
      </div>
      <h3>jubeat</h3>
      <br />
      <div class="sub_box">
        <img src="/img/Rhythm/Result/jubeat1.jpg" class="img" />
        <div class="side_box">
          これとビーストからBEMANIの世界に入りました<br />
          <br />
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
    width: 95%;
    padding-left: 20px;
    padding-bottom: 70px;
  }
  .img {
    width: 50%;
    max-width: 350px;
  }
  .side_box {
    padding-left: 20px;
    width: 50%;
  }
}
@media screen and (max-width: 639px) {
  img {
    width: 100%;
    max-width: 350px;
    padding-left: 20px;
  }
  .side_box {
    padding-left: 20px;
    padding-bottom: 20px;
  }
}
</style>
