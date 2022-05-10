<template>
  <div>
    <div class="main_box">
      <div style="display: flex">
        <div v-for="game in games" :key="game.index">
          <div
            @click="incrementByEmit(game.title)"
            class="detail_hexagon"
            :style="position(game)"
          ></div>
        </div>
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
          title: "Ongeki",
          image: `url(/img/Rhythm/logo/ongeki_logo.png)`,
          color: "pink",
        },
        {
          index: 1,
          title: "CHUNITHM",
          image: `url(/img/Rhythm/logo/chunithm_logo.png)`,
          color: "#FF6",
        },
        {
          index: 2,
          title: "SDVX",
          image: `url(/img/Rhythm/logo/sdvx_logo.png)`,
          color: "#E6E6E6",
        },
        {
          index: 3,
          title: "Arcaea",
          image: `url(/img/Rhythm/logo/arcaea_logo.png)`,
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
          top: num * (data.index % 2) + "px",
          left: Math.sqrt(3) * num * data.index + "px",
          "background-image": data.image,
          "background-color": data.color,
        };
        return a;
      };
    },
  },
};
</script>

<style scoped>
.main_box {
  overflow: auto;
  height: 280px;
  position: relative;
  margin-left: 10px;
}
.main_box::-webkit-scrollbar {
  height: 10px;
  background: #eee;
}
.main_box::-webkit-scrollbar-thumb {
  background: #ff8095;
  border-radius: 5px;
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
  color: white;
  transition : 300ms;
}
</style>
