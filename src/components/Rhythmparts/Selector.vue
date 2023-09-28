<template>
  <div>
    <div class="main_box">
      <div v-for="game in games" :key="game.index">
        <div
          @click="incrementByEmit(game.title)"
          class="detail_hexagon"
          :style="position(game)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          index: 0,
          title: "iidx",
          image: `url(/img/Rhythm/logo/iidx_logo.png)`,
          color: "#ffaf4d",
        },
        {
          index: 1,
          title: "SDVX",
          image: `url(/img/Rhythm/logo/sdvx_logo.png)`,
          color: "#3d3d99",
        },
        {
          index: 2,
          title: "DDR",
          image: `url(/img/Rhythm/logo/DDR_logo.png)`,
          color: "#E6E6E6",
        },
        {
          index: 3,
          title: "CHUNITHM",
          image: `url(/img/Rhythm/logo/chunithm_logo.png)`,
          color: "#FF6",
        },
        {
          index: 4,
          title: "Others",
          image: `url(/img/Rhythm/logo/others.png)`,
          color: "#1f1e33",
        },
      ],
      title: "none",
    };
  },
  methods: {
    incrementByEmit(title) {
      this.$emit("changeMethod", (this.title = title));
    },
  },
  computed: {
    position: function () {
      return function (data) {
        const num = 40;
        var a = {
          top: num * (data.index % 2) + "px",
          left: Math.sqrt(3) * num * (data.index) + "px",
          "background-image": data.image,
          "background-color": data.color,
        };
        return a;
      };
    },
  },
};

function resizeWindow() {}

window.addEventListener("resize", resizeWindow);
</script>

<style scoped>
@media screen and (max-width: 1080px) {
  .main_box {
    height: 150px;
    margin-left: 10px;
    display: relative;
  }
  .detail_hexagon {
    padding: 5px;
    cursor: pointer;
    width: 80px;
    height: 69px;
    clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    -webkit-clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    position: absolute;
    background-size: contain;
    background-position: center;
  }
  .detail_hexagon:hover {
    opacity: 0.5;
    transition: 300ms;
  }
}
/* for Desktop */
@media screen and (min-width: 1080px) {
  .main_box {
    height: 150px;
    margin-left: 10px;
    display: relative;
  }
  .detail_hexagon {
    padding: 5px;
    cursor: pointer;
    width: 80px;
    height: 69px;
    clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    -webkit-clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    position: absolute;
    background-size: contain;
    background-position: center;
  }
  .detail_hexagon:hover {
    opacity: 0.5;
    transition: 300ms;
  }
}
</style>
