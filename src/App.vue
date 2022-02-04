<template>
  <div>
    <div id="loading"></div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};

window.onload = ()=>{
    const loader = document.getElementById('loading');
    loader.style.opacity = 0; // 画像要素のopacityプロパティの値を0(透明)にする
    setTimeout(() => {
      loader.style.display = "none"; 
    }, 1000);
}

</script>

<style scoped>

#loading {
    width: 100vw;
    height: 100vh;
    background-color: #534641;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display:visible;
    opacity: 1;
    transition: opacity 1s;
}

</style>
