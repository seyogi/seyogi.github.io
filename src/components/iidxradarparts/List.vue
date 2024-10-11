<template>
  <div class="main_box">
    表示曲数
    <input type="number" v-model="numInput" size="5" />
    <div
        v-for="Data in this.ShowData.slice(0, this.numInput)"
        :key="Data.index"
      >
        <div class="scoreData_container">
          <div class="score">
            <div
              class="maintxt"
              :style="colorDataScore(Data.RadarScore)"
            >
              {{ Math.floor(Data.RadarScore * Math.pow(10, 2)) / Math.pow(10, 2) }}
              <a class="subtxt"
                >({{ Math.floor((Data.RadarScore - Data.MAXRadarScore) * Math.pow(10, 2)) / Math.pow(10, 2) }})
              </a>
            </div>
          </div>
          <div class="diff" :style="colorDataDiff(Data.Diff)">
            {{ Data.Level }}
            <div class="sub">{{ Data.Diff }}</div>
          </div>
          <div class="songData">
            {{ Data.Title }}
            <div class="sub">{{ Data.Artist }}</div>
          </div>
        </div>
      </div>
    <br />
  </div>
</template>

<script>
  export default {
    props: ['ShowData'],
    data(){
      return{
        numInput: "10",
      }
    },
    methods: {
      colorDataDiff(diff) {
        if (diff == "ANOTHER") {
          var a = {
            color: "red",
          };
        } else if (diff == "HYPER") {
          a = {
            color: "orange",
          };
        } else {
          a = {
            color: "darkviolet",
          };
        }
        return a;
      }
      ,colorDataScore(Score) {
      //linear-gradient(transparent 50%, #ff7f7f 95%)
      if (Score >= 180) {
        var a = {
          background:
            "linear-gradient(transparent 30%, #f59090,#fcd7a1,#fff9b1,#a5d4ad,#a3bce2,#a59aca,#cfa7cd)",
        };
      } else if (Score >= 165) {
        a = {
          background: "linear-gradient(transparent 30%, gold 95%)",
        };
      } else if (Score >= 150) {
        a = {
          background: "linear-gradient(transparent 30%, silver 95%)",
        };
      } else if (Score >= 120) {
        a = {
          background: "linear-gradient(transparent 30%, #b87333 95%)",
        };
      } else if (Score >= 100) {
        a = {
          background: "linear-gradient(transparent 30%, darkviolet 95%)",
        };
      } else {
        a = {};
      }
      return a;
    },
    }
  }
</script>

<style scoped>
.main_box {
  text-align: center;
  margin: auto;
  width: 98%;
}

.scoreData_container {
  border: 2px solid #0059b3; /* 囲み線 */
  padding: 4px; /* 囲み線内の余白 */
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 98%;
}

.scoreData_container .score .maintxt {
  font-size: 120%;
}

.scoreData_container .score .subtxt {
  font-size: 12px;
}
.scoreData_container .diff {
  width: 100px;
  text-align: center;
}
.scoreData_container .diff .sub {
  font-size: 12px;
}
.scoreData_container .songData {
  width: 70%;
  text-align: center;
}
.scoreData_container .songData .sub {
  font-size: 12px;
}
</style>
  