<template>
  <div>
    <Banner></Banner>
    <div class="container">
      <Main class="center_container"></Main>
    </div>
  </div>
</template>

<script>
import Main from "../components/Homeparts/Main";
import Banner from "../components/Homeparts/Banner";

export default {
  components: {
    Main,
    Banner,
  },
};
</script>

