<template>
  <div>
    <div id="main" class="main_box">
      <div v-for="game in games" :key="game.index" :ref="gamesRef">
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
import { ref } from "vue";

export default {
  setup() {
    const gameItems = ref([]);
    const gamesRef = (el) => {
      if (el) {
        gameItems.value.push(el);
      }
    };
    return {
      gameItems,
      gamesRef,
    };
  },
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
      hexagon_size: 50,
    };
  },
  mounted: function () {
    this.resizeWindow()
    window.addEventListener("resize", this.resizeWindow);
  },
  beforeUnmount: function () {
    window.removeEventListener("resize", this.resizeWindow);
  },
  methods: {
    resizeWindow() {
      const width = document.documentElement.clientWidth;
      if (width < 960) {
        this.gameItems.forEach((elem, index) => {
          const hexagon_num = Math.floor(width/(this.hexagon_size*2))
          const br_num = Math.floor(index/hexagon_num)
          elem.querySelector("div").style.top = 
          (this.hexagon_size * 2) * br_num + this.hexagon_size * ((index%hexagon_num) % 2)+ "px";
          elem.querySelector("div").style.left = 
          Math.sqrt(3) * this.hexagon_size * (index%hexagon_num) + "px";
          document.getElementById('main').style.height = Math.sqrt(3) * this.hexagon_size * (2 + br_num) + "px";
        });
      }
      else{
        this.gameItems.forEach((elem, index) => {
          elem.querySelector("div").style.top = this.hexagon_size * (index % 2) + "px";
          elem.querySelector("div").style.left = Math.sqrt(3) * this.hexagon_size * index + "px";
        });
      }
    },
    incrementByEmit(title) {
      this.$emit("changeMethod", (this.title = title));
    },
  },
  computed: {
    position: function () {
      return function (data) {
        const num = this.hexagon_size;
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

function resizeWindow() {}

window.addEventListener("resize", resizeWindow);
</script>

<style scoped>
.main_box {
  height: calc(120px * (1.732 / 2) * 2);
  display: relative;
}
.detail_hexagon {
  padding: 5px;
  cursor: pointer;
  width: 100px;
  height: calc(100px * (1.732 / 2));
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
</style>
