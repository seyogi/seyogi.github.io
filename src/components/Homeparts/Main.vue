<template>
  <div>
    <div class="main_box">
      <br />
      <h2>Top</h2><br />
      <div class="intro_box">
        Aboutを分離したらトップページが寂しくなってしまったので、以下仮置き<br /><br />

        <h3>Gallery</h3>
        <hr style="width: 100%" /><br>
        <div class="Gallery">
          <div class="Gallerybox">
            <img class="GalleryImg" src="/img/Rhythm/round_one.jpg" /><br>
          </div>
          <div class="Gallerybox">
            <img class="GalleryImg" src="/img/Rhythm/imigura.jpg" /><br>
          </div>
        </div>
        <br><br>
        <h3>サオリさん絆ランクログ</h3>
        <hr style="width: 100%" />
        <a class="date_box">2024.7</a>: お出迎え <a class="sub_box"> / Sheside outside 最高でした</a><br>
        <a class="date_box">2024.9</a>: 絆50 <a class="sub_box"> / 9月3日はサオリさんの誕生日です</a><br>
        <a class="date_box">2024.11</a>: 絆60<br>
        <a class="date_box">2025.1</a>: 絆70 <a class="sub_box"> / だいたい1/3 先は長い</a><br>
        <a class="date_box">2025.4</a>:<br>
        <img class="saoriImg" src="/img/saori78.png" /><br><br>
      </div>
     
    </div>
  </div>
</template>


<script>

</script>


<style scoped>
  .Gallery{
    display: flex;
    flex-wrap: wrap;
  }
  .Gallerybox{
    min-width: 350px;
    width: 50%;
    margin: auto;
    text-align: center;
  }

  .GalleryImg {
    min-width: 300px;
    width: 95%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  .saoriImg {
    width: 90%;
    max-width: 500px;
    margin: auto;
    display: block;
  }

  .date_box{
    display: inline-block;
    min-width:80px;
    margin-left: 20px;
  } 

  .intro_box{
    margin-left: 20px;
    margin-right: 20px;
  } 
  .sub_box{
    font-size: 12px;
  } 

@media screen and (max-width: 700px) {

  .date_box{
    min-width:70px;
    margin-left: 10px;
  } 
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
