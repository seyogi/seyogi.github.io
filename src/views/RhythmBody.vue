<template>
  <div>
    <RhythmMain class="center_container"></RhythmMain>
  </div>
</template>

<script>
import RhythmMain from "../components/Rhythmparts/Rhythmmain";

export default {
  components: {
    RhythmMain,
  },
};
</script>

<style scoped>
.center_container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
}
</style>
