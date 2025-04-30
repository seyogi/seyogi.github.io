<template>
    <div>
      <div class="main_box">
        <br />
        <h3>ラウンドワン高津</h3>
        <br />
        <div class="sub_box">
          <img src="/img/Rhythm/round_one.jpg" class="img" />
          <div class="side_box">
            since:2025/4/13       
            <br />
          </div>
        </div>
        <h3>イミグランデ溝の口</h3>
        <br />
        <div class="sub_box">
          <img src="/img/Rhythm/imigura.jpg" class="img" />
          <div class="side_box">
            
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
  