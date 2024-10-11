<template>
  <div><iidxradar class="center_container"></iidxradar></div>
</template>

<script>
import iidxradar from "../components/iidxradarparts/App.vue";

export default {
  components: {
    iidxradar,
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
