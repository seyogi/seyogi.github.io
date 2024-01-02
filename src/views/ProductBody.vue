<template>
  <div><ProductMain class="center_container"></ProductMain></div>
</template>

<script>
import ProductMain from "../components/Productparts/Productmain";

export default {
  components: {
    ProductMain,
  },
};
</script>

<style scoped>
.center_container {
  background-color: #fffae6;
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
}
</style>
