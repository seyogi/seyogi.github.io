<template>
  <div>
    <RhythmMain class="center_container"></RhythmMain>
  </div>
</template>

<script setup>
import RhythmMain from "../components/Rhythmmain";

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
  max-width: 940px;
}
</style>