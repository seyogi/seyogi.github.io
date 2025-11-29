<template>
  <div class="header">
    <div class="inner">
      <div class="contents">
        <div class="logobox"> 
          <router-link to="/StopWatch" >
            <img src="/img/icon.png" class="logoimg" />
          </router-link>
          <router-link to="/" class="logo">
            <div class="logotxt">SEYOGI.DEV</div>
          </router-link>
        </div>
        <div class="link">
          <router-link to="/About" class="linkbox">
            <div class="japanesetxt">About</div>
          </router-link>
          <router-link to="/MusicGameRecord" class="linkbox">
            <div class="japanesetxt">Records</div>
          </router-link>
          <router-link to="/iidx_radar" class="linkbox">
            <div class="japanesetxt">NotesRadar</div>
          </router-link>
        </div>
        <button ype="button" class="menu-btn" v-on:click="this.open = !this.open">
          <font-awesome-icon
            class="icons"
            icon="fa fa-bars"
            size="2x"
            color="#c4a8a5"
            aria-hidden="true"
          />
        </button>
        <div class="menu" v-bind:class="{ 'is-active': this.open }">
          <router-link to="/" class="menu__item" v-on:click="this.open = !this.open">
            <div class="japanesetxt">トップページ</div>
            Top
          </router-link>
          <router-link to="/About" class="menu__item" v-on:click="this.open = !this.open">
            <div class="japanesetxt">管理人紹介</div>
            About
          </router-link>
          <router-link to="/MusicGameRecord" class="menu__item" v-on:click="this.open = !this.open">
            <div class="japanesetxt">音ゲーログ</div>
            Records
          </router-link>
          <router-link to="/iidx_radar" class="menu__item" v-on:click="this.open = !this.open">
            <div class="japanesetxt">ノーツレーダー</div>
            NotesRadar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
/*---------- Header ----------*/
@font-face {
  font-family: "Arcaea";
  src: url(../../fonts/kingsgmb.ttf);
}

.header {
  padding-top: 10px;
  border-top: 1px dashed #746a69;
  border-bottom: 1px dashed #746a69;
  background: #534641;
}
.header .inner {
  width: 940px;
  margin: 0 auto;
  max-width: 100%;
}
.header .contents .logo {
  text-decoration: none;
}
.header .contents .logobox {
  padding-right: 50px;
  display: flex;
}
.header .contents .logoimg {
  padding-right: 5px;
  padding-left: 5px;
  width: 30px;
  height: 30px;
}
.header .contents .logotxt {
  color: #c4a8a5;
  font-size: 40px;
  vertical-align: top;
  font-family: Arcaea;
}
.header .contents .logobox :hover{
  color: #fdd6d6;
}
.menu-btn {
  position: fixed;
  top: 5px;
  right: 10px;
  z-index: 5;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
}
.menu{
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(5, 5, 5, 0.7);
}
.menu{
  transform: translateX(200px);
  transition: all .3s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active{
  transform: translateX(0);
}
.menu__item{
  text-decoration: none;
  position: relative;
  z-index: 4;
  width: 100%;
  height: auto;
  padding: .5em 1em;
  text-align: center;
  font-size: 15px;
  color: #d4b8b5;
  box-sizing: border-box;
}
.menu__item :hover{
  color: #fdd6d6;
}
.menu__item .japanesetxt{
  font-size: 20px;
  font-weight: bold;
}
@media screen and (min-width: 720px) {
  .header .contents {
    display: flex;
    padding-right: 30px;
  }
  .header .contents .link {
    height: 30px;
    display: flex;
    gap: 5px 5px;
  }
  .header .contents .linkbox {
    text-decoration: none;
    padding: 3px 5px;
    color: #c4a8a5;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
  }
  .header .contents .linkbox :hover{
    color: #fdd6d6;
  }
  .linkbox .japanesetxt {
    font-size: 15px;
  }
}
@media screen and (max-width: 720px) {
  .header .contents .link {
    height: 45px;
    display: none;
    gap: 6px 5px;
  }
}
</style>
