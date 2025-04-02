<template>
  <div>
    <div class="main_box">
      <br />
      <h2>Top</h2><br />
      <div class="intro_box">
        Aboutを分離したらトップページが寂しくなってしまいました；；<br />
        何かいいアイデアを思いついたら更新します<br />
      </div>
    </div>
  </div>
</template>

<style scoped>

.intro_box{
    margin-left: 20px;
  } 

@media screen and (max-width: 700px) {

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
