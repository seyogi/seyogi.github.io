<template>
  <div class="header">
    <div class="inner">
      <div class="contents">
        <div class="logo">
          <router-link to="/" class="logobox">
            <img src="/img/icon.png" class="logoimg" />
            <div class="logotxt">SEYOGI's<br />Labo</div>
          </router-link>
        </div>
        <div class="pc">
          <div class="link">
            <router-link to="/" class="linkbox">
              <div class="japanesetxt">トップページ</div>
              Top
            </router-link>
            <router-link to="/Rhythm" class="linkbox">
              <div class="japanesetxt">音ゲーリザ他</div>
              GameRecords
            </router-link>
          </div>
        </div>
        <div class="sm">
          <slide right noOverlay width="200">
            <span>            
            <router-link to="/" class="linkbox">
              <div class="japanesetxt">トップページ</div>
              Top
            </router-link>
            </span>
            <span>
              <router-link to="/Music" class="linkbox">
                <div class="japanesetxt">音ゲーリザ他</div>
                GameRecords
              </router-link>
            </span>
          </slide>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

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
.header .inner {
  width: 940px;
  margin: 0 auto;
  max-width: 100%;
}
.header .contents {
  display: flex;
  padding-right: 30px;
}
.header .contents .logo {
  padding-right: 100px;
}
.header .contents .logobox {
  text-decoration: none;
  display: flex;
}
.header .contents .logoimg {
  width: 70px;
  height: 70px;
}
.header .contents .logotxt {
  color: #c4a8a5;
  font-size: 40px;
  vertical-align: top;
  font-family: Arcaea;
}
@media screen and (min-width: 600px) {
  .sm {
    display: none;
  }
  #hamburger {
    display: none;
  }
  .header .contents .link {
    height: 70px;
    display: flex;
    gap: 6px 5px;
  }
  .header .contents .linkbox {
    min-width: 70px;
    text-decoration: none;
    padding: 18px 5px;
    background: #c4a8a5;
    text-align: center;
    font-size: 10px;
  }
  .linkbox .japanesetxt {
    font-size: 15px;
  }
}
@media screen and (max-width: 599px) {
  .pc {
    display: none;
  }
  .linkbox{
    color: #c4a8a5;
    font-size: 15px;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
  }
  .linkbox .japanesetxt {
    font-size: 20px;
  }
}
</style>
