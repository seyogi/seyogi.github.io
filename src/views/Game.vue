<template>
  <div>
    <GameMain class="center_container"></GameMain>
  </div>
</template>

<script setup>
import GameMain from "../components/Gamemain";

export default {
  components: {
    GameMain,
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