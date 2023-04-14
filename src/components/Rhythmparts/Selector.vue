<template>
  <div>
    <div class="main_box">
      <div v-for="game in games" :key="game.index">
        <div
          @click="incrementByEmit(game.title)"
          class="detail_hexagon"
          :style="position(game)"
        ></div>
        <div
          @click="incrementByEmit(game.title)"
          class="detail"
          :style="position2(game)"
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
          title: "DDR",
          image: `url(/img/Rhythm/logo/DDR_logo.png)`,
          color: "#E6E6E6",
        },
        {
          index: 2,
          title: "SDVX",
          image: `url(/img/Rhythm/logo/sdvx_logo.png)`,
          color: "#3d3d99",
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
        const num = 80;
        var a = {
          top: num * data.index + "px",
          left: Math.sqrt(3) * num * (data.index % 2) + "px",
          "background-image": data.image,
          "background-color": data.color,
        };
        return a;
      };
    },
    position2: function () {
      return function (data) {
        var a = { 
          "background-image": data.image, 
          "background-color": data.color };
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
    display: flex;
  }
  .detail_hexagon {
    display: none;
  }
  .detail {
    padding: 10px;
    cursor: pointer;
    width: 70px;
    height: 70px;
    clip-path: circle(55%);
    background-size: contain;
    background-position: center;
  }
  .detail:hover {
    opacity: 0.5;
    transition: 300ms;
  }
}
/* for Desktop */
@media screen and (min-width: 1080px) {
  .main_box {
    padding-left: 340px;
    overflow: auto;
    height: 500px;
    margin-left: 10px;
  }
  .detail {
    display: none;
  }
  .detail_hexagon {
    padding: 10px;
    cursor: pointer;
    width: 160px;
    height: 138px;
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
