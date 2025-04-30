<template>
    <div>
      <div class="main_box">
        <br />
        <h3>ラウンドワン高津 (2025/4/9)</h3>
        <br />
        <div class="sub_box">
          <img src="/img/Rhythm/round_one.jpg" class="img" />
          <div class="side_box">
            2025/4/13(日)をもって閉店<br>
            ポップンではお世話になりました<br>
            <br />
          </div>
        </div>
        <h3>イミグランデ溝の口 (2025/3/8)</h3>
        <br />
        <div class="sub_box">
          <img src="/img/Rhythm/imigura.jpg" class="img" />
          <div class="side_box">
            雪の降る溝の口<br>
            「天気悪いしゲーセンに人おらんやろ！」とかよく言いますが、この日は本当に人が少なかった
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
  