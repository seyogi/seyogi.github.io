<template>
  <div>
    <Banner></Banner>
    <div class="container">
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Main from "../components/Homeparts/Main.vue";
import Banner from "../components/Homeparts/Banner.vue";

export default {
  components: {
    Main,
    Banner,
  },
};
</script>

