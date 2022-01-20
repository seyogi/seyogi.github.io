<template>
  <div class="header">
    <div class="inner">
      <div class="logo">
        <div class="box">
          <img src="../../images/icon.png" />
        </div>
        <div class="box">
          <a class="Linktxt" href="">Seyogi's<br />Labo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*---------- Header ----------*/
@font-face {
  font-family: "Arcaea";
  src: url(../../fonts/kingsgmb.ttf);
}

.header {
  padding-top: 10px;
  background: #534641;
  border-top: 1px dashed #746a69;
  border-bottom: 1px dashed #746a69;
}
.header .logo {
  overflow: hidden;
}
.header .logo .box {
  float: left;
}
.header .logo .Linktxt {
  color: #c4a8a5;
  font-size: 40px;
  vertical-align: top;
  font-family: Arcaea;
  text-decoration: none;
}
.header .logo img {
  width: 70px;
}
.header .inner {
  width: 940px;
  margin: 0 auto;
  max-width: 100%;
}
</style>
