<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <p v-if="msg.length > 0">
      {{ msg }}
    </p>
    ???
    <p v-else>no text</p>
    <input type="text" v-model="msg" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Banner from "./components/Banner";

export default {
  components: {
    Header,
    Banner,
  },
  data() {
    return {
      msg: "ホームページ更新中です",
    };
  },
};
</script>
