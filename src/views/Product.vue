<template>
  <div>
    <ProductMain class="center_container"></ProductMain>
  </div>
</template>

<script setup>
import ProductMain from "../components/Productmain";

export default {
  components: {
    ProductMain,
  },
};
</script>

<style scoped>
.center_container {
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
}
</style>