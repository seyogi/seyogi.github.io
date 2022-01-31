<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div class="container">
      <Main class="center_container"></Main>
      <Twitter class="right_container"></Twitter>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Twitter from "./components/Twitter";

export default {
  components: {
    Header,
    Banner,
    Main,
    Twitter,
    Footer,
  },
};
</script>

<style scoped>

/*---------- Banner ----------*/
@media screen and (max-width: 1379px) {
  .center_container {
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
  }
  .right_container {
    display: none;
    width: 0%;
  }
}
@media screen and (min-width: 1380px) {
  .container {
    max-width: 1380px; /*必要な幅に設定*/
    margin: auto; /*ブラウザ中央に配置*/
  }
  .container:after {
    /*clearfix設定*/
    content: "";
    display: block;
    clear: both;
  }
  .center_container {
    width: 940px;
    padding-left: 220px;
    float: left; /*左にフロート配置*/
  }
  .right_container {
    padding-top: 20px;
    height: 100%;
    display: inline;
    float: right;
    position: sticky;
    top: 20px;
  }
}
</style>
