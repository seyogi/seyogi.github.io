<template>
  <div>
    <div class="main_box">
      <br />
      <carousel :items-to-show="1" :wrap-around="true">
        <slide v-for="content in contents" :key="content">
          <img class="img" :src="content.imgurl" />
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template> </carousel
      ><br />
      <br />
      段位認定 : SP十段(A3)<br />
      最高 : SP足19 / DP足18 <br />
      DDR CODE : 61609228<br /><br />
      これからも皆伝目指して精進していきたいと思います。<br />
      <br />
      <br />
      <br />
      <hr style="width: 80%" />
      <ul class="timeline">
        <li>
          <p class="timeline-date">2020年11月</p>
          <div class="timeline-circle" />
          <div class="timeline-content">
            <div class="timeline-txt">
              POLICY BREAK 第46弾 (FLOOR INFECTION 第38弾)
              <div class="sub-txt">ENDYMION移植回 これを機にDDRを触り始める</div>
            </div>
          </div>
        </li>

        <li>
          <p class="timeline-date">2021年1月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              SP最高15
              <div class="sub-txt">Valkyrie dimension 踊</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年3月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              SP最高18
              <div class="sub-txt">Valkyrie dimension 激</div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年9月</p>
          <div class="timeline-content">
            <div class="timeline-txt">段位認定 SP九段 合格<br /></div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2023年1月</p>
          <div class="timeline-content">
            <div class="timeline-txt">段位認定 SP十段 合格</div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2023年2月</p>
          <div class="timeline-circle" />
          <div class="timeline-content">
            <div class="timeline-txt">
              <h3>SP最高19</h3>
              <div class="sub-txt">
                <a
                  href="https://twitter.com/syg_74/status/1622884164608610304"
                  target="_blank"
                  >(Twitter)</a
                >
                PARANOiA Revolution 鬼
              </div>
            </div>
          </div>
        </li>
        <li>
          <p class="timeline-date">2023年2月</p>
          <div class="timeline-content">
            <div class="timeline-txt">
              SP18全クリア
              <br />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          imgurl: "/img/Rhythm/Result/DDR01.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/DDR02.jpg",
        },
        {
          imgurl: "/img/Rhythm/Result/DDR03.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main_box {
  padding: 30px;
}
.timeline {
  list-style: none;
}
@media screen and (max-width: 700px) {
  .carousel__slide {
    height: 350px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-height: 350px;
    max-width: 100%;
  }
  .timeline > li {
    margin-bottom: 30px;
  }
  .timeline-date {
    width: 110px;
    margin: 2px;
    text-align: center;
    background: #daa;
    border-radius: 10px; /* 角丸半径を50%にする(=円形にする) */
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
/* for Desktop */
@media screen and (min-width: 700px) {
  .carousel__slide {
    max-height: 350px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel__slide img {
    max-height: 300px;
    max-width: 100%;
  }
  .timeline > li {
    overflow: hidden;
    position: relative;
    margin: 0;
  }
  .timeline-date {
    width: 110px;
    float: left;
    margin-top: 10px;
  }
  .timeline-content {
    width: 75%;
    float: left;
    border-left: 3px #888 solid;
    padding-left: 30px;
  }
  .timeline-circle {
    content: "";
    width: 12px;
    height: 12px;
    background: #833;
    position: absolute;
    left: 106px;
    top: 14px;
    border-radius: 100%;
  }
  .timeline-txt {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
</style>
