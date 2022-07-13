<template>
  <div>
    <div class="main_box">
      <br />
      <br />
      <h2>過去の製作物(仮置き場)</h2>
      <br />
      <Box></Box>
      <br />
    </div>
  </div>
</template>

<script>
import Box from "./Productparts/Box";

export default {
   components: {
    Box,
  },
  data() {
    return {
      active: "1",
    };
  },
  methods: {
    select: function (num) {
      this.active = num;
      this.style.background = "#000";
    },
  },
};
</script>

<style scoped>
.main_box {
  margin-left: 10px;
  width: 100%;
}
h2 {
  width: 80%;
  padding: 1rem 2rem;
  color: #fff;
  background: #644;
  -webkit-box-shadow: 5px 5px 0 #422;
  box-shadow: 5px 5px 0 #422;
}
</style>
