<template>
  <div>
    <div class="main_box">
      <br />
      <Careea></Careea>
      <br />
      <h2>HACKATHON</h2>
      <HackBox></HackBox>
      <br />
      <h2>OTHERS</h2>
      <Box></Box>
      <br />
    </div>
  </div>
</template>

<script>
import Careea from "./Careea";
import Box from "./Box";
import HackBox from "./HackBox";

export default {
  components: {
    Box,
    HackBox,
    Careea,
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
  margin-left: 2%;
  margin-right: 2%;
  width: 96%;
}
@media screen and (max-width: 700px) {
  h2 {
  width: 80%;
  padding: 0.5rem 2rem;
  color: #fff;
  background: #866;
  -webkit-box-shadow: 5px 5px 0 #644;
  box-shadow: 5px 5px 0 #644;
}
}
/* for Desktop */
@media screen and (min-width: 700px) {
  h2 {
    width: 90%;
    padding: 0.5rem 2rem;
    color: #fff;
    background: #866;
    -webkit-box-shadow: 5px 5px 0 #644;
    box-shadow: 5px 5px 0 #644;
  }
}
</style>
