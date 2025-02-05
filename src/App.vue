<template >
  <Header class="header"></Header>
  <router-view v-slot="{ Component }" class="body">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition> 
  </router-view>
  <Footer class="footer"></Footer>
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
.header {
  height: 40px;
}
.body{
  min-height: calc(100vh - 132px);
  max-width: 940px;
  background-color: #fffae6;
  margin-left: auto;
  margin-right: auto;
}
.footer {
  height: 60px;
  padding : 10px ;
}
</style>
