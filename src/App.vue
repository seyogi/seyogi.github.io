<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition> 
  </router-view>
  <Footer></Footer>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Header, Footer },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style>
.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
#app {
}
</style>
