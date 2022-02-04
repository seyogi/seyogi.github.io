<template>
  <div>
    <MusicMain class="center_container"></MusicMain>
  </div>
</template>

<script setup>
import MusicMain from "../components/Musicmain";

export default {
  components: {
    MusicMain,
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