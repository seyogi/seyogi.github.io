<template>
  <div class="main_box">
    <div>
      <iidxListUserNotSigned ref="iidxListUserNotSigned"></iidxListUserNotSigned>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import iidxListUserNotSigned from "./iidxListUserNotSigned.vue";
import iidxRadarJson from "../../assets/iidxRadar.json";

export default {
  components: {
    iidxListUserNotSigned,
  },
  data() {
    return {
      isLoading: false,
      iidxRadarScore: iidxRadarJson,
      scoreData: [],
      radarData: {},
    }
  },
  methods: {
    receive_radarData() {
      this.iidxRadarScore = iidxRadarJson;
    },
    receive_temp_userData(data) {
      var temp_userData = data;
      var temp_returnData = [];
      for (let key in temp_userData) {
        var temp_RadarData = this.iidxRadarScore[temp_userData[key]["TITLE"]];
        if (temp_RadarData != undefined) {
          //曲名があるか
          var temp_diffScores = {};
          for (let diff in temp_RadarData) {
            temp_diffScores[diff] = this.calc_radarScore(
              diff,
              temp_userData[key],
              temp_RadarData
            );
          }
          var temp_diffNums = {
            HYPER: temp_userData[key]["HYPER_dif_num"],
            ANOTHER: temp_userData[key]["ANOTHER_dif_num"],
            LEGGENDARIA: temp_userData[key]["LEGGENDARIA_dif_num"],
          };
          temp_returnData.push({
            TITLE: temp_userData[key]["TITLE"],
            artist: temp_userData[key]["artist"],
            Scores: temp_diffScores,
            diffNum: temp_diffNums,
          });
        }
      }
      this.isLoading = false;
      this.scoreData = [];
      this.scoreData = temp_returnData;
      this.$refs.iidxListUserNotSigned.sortBy("NOTES");
    },
    calc_radarScore(diff, userData, radarData) {
      var maxScore = radarData[diff]["ノート数"] * 2;
      var MaxValue = {};
      var tempRadarData = {"ANOTHER":{},"HYPER":{},"LEGGENDARIA":{}};
      Object.entries(radarData[diff]).forEach(([key, value]) => {
        var temp =
          Math.floor(value * (userData[diff] / maxScore) * Math.pow(10, 2)) /
          Math.pow(10, 2);
        MaxValue[key] = Math.floor((temp - value) * Math.pow(10, 2)) / Math.pow(10, 2);
        tempRadarData[diff][key] = temp;
      });
      return {
        radarScore: tempRadarData[diff],
        rawScore: userData[diff],
        MAXScore: maxScore,
        ScorePer:
          Math.floor((userData[diff] / maxScore) * Math.pow(10, 4)) / Math.pow(10, 2),
        MaxradarScore: MaxValue,
      };
    },
  }
};
</script>

<style scoped>
.main_box {
  margin-left: 2%;
  margin-right: 2%;
  width: 96%;
}

.container {
  display: flex;
  justify-content: center;
  margin: 30px 0 0;
}

.container input {
  width: 400px;
}

.container p {
  width: 200px;
  text-align: left;
  margin-top: 8px;
}

.message {
  text-align: center;
}

.message .red {
  color: red;
}

.buttonbox {
  text-align: center;
}

button {
  border-radius: 10px;
  padding: 6px 20px 8px;
  margin: 30px 0 0;
  width: auto;
  height: auto;
  cursor: pointer;
}

.btn_standard {
  margin: 30px;
  background: #fff176;
  border: 3px solid #fff176;
}

.btn_standard:hover {
  background: #ffcf00;
  border: 3px solid #ffcf00;
}

.loading_animation_container {
  height: 15px;
  margin-top: 20px;
}
</style>
