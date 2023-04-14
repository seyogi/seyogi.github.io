<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style>
#app {

}
</style>
