<template>
  <div class="main_box">
    <br />
    <input type="button" id="aaa" value="RELOAD" @click="sortBy(selectedTheme)" />
    <br />
    <div id="vis">
      表示曲数
      <input type="number" v-model="numInput" size="5" />&nbsp;&nbsp;&nbsp;
      <select @change="sortBy(selectedTheme)" v-model="selectedTheme">
        <option disabled value="">Theme一覧</option>
        <option
          v-for="Theme in optionThemes"
          v-bind:value="Theme.name"
          v-bind:key="Theme.id"
        >
          {{ Theme.name }}
        </option>
      </select>
      <input
        type="checkbox"
        id="checkbox"
        v-model="checked"
        @click="invisSameTitleData()"
      />
      <label for="checkbox">同名曲の異なる難易度を含む</label>
      <br /><br />
      <table align="center">
        <thead>
          <tr>
            <th v-for="(header, index) in headers" v-bind:key="index">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="scoreData in this.ShowData.slice(0, this.numInput)"
            :key="scoreData.index"
          >
            <td>{{ scoreData.radarScore[selectedTheme] }}</td>
            <td>{{ scoreData.TITLE }}&nbsp;({{ rename[scoreData.diff] }})</td>
            <td>{{ scoreData.artist }}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div class="loading_animation_container">
        <div class="loading_animation" v-if="this.$parent.isLoading">
          <LoadingAnimationComponent></LoadingAnimationComponent>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import LoadingAnimationComponent from "./LoadingAnimationComponent.vue";

export default {
  components: { LoadingAnimationComponent },
  data() {
    return {
      //'PerScore':per_score,'MAXScore':rader_max
      headers: ["レーダー値", "曲名", "アーティスト名"],
      selectedTheme: "NOTES",
      optionThemes: [
        { id: 0, name: "NOTES" },
        { id: 1, name: "PEAK" },
        { id: 2, name: "SCRATCH" },
        { id: 3, name: "SOF-LAN" },
        { id: 4, name: "CHARGE" },
        { id: 5, name: "CHORD" },
      ],
      rename: {
        HYPER: "H",
        ANOTHER: "A",
        LEGGENDARIA: "L",
      },
      numInput: "10",
      errmsg: "",
      uploadFile: null,
      csvText: "",
      checked: false,
      config: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
      ShowData: [],
    };
  },
  methods: {
    RANK: function (num) {
      num *= 0.01;
      if (num > 8 / 9) return "AAA";
      else if (num > 7 / 9) return "AA";
      else if (num > 6 / 9) return "A";
      else if (num > 5 / 9) return "B";
      else if (num > 4 / 9) return "C";
      else return "D";
    },
    sortBy(selectedTheme) {
      this.create_ShowData();
      this.ShowData.sort((a, b) => {
        return b["radarScore"][selectedTheme] - a["radarScore"][selectedTheme];
      });
    },
    create_ShowData() {
      var temp_returnData = [];
      var temp_scoreData = this.$parent.scoreData;
      if (!this.checked) {
        for (let key in temp_scoreData) {
          var temp_maxScoreDiff = "";
          var temp_maxScoreNum = 0;
          for (let diff in temp_scoreData[key]["radarScore"]) {
            if (
              temp_scoreData[key]["radarScore"][diff][this.selectedTheme] >
              temp_maxScoreNum
            ) {
              temp_maxScoreNum =
                temp_scoreData[key]["radarScore"][diff][this.selectedTheme];
              temp_maxScoreDiff = diff;
            }
          }
          if (temp_maxScoreNum > 0) {
            temp_returnData.push({
              TITLE: temp_scoreData[key]["TITLE"],
              artist: temp_scoreData[key]["artist"],
              diff: temp_maxScoreDiff,
              radarScore: temp_scoreData[key]["radarScore"][temp_maxScoreDiff],
            });
          }
        }
        this.ShowData = temp_returnData;
      } else {
        for (let key in temp_scoreData) {
          for (let diff in temp_scoreData[key]["radarScore"]) {
            if (temp_scoreData[key]["radarScore"][diff][this.selectedTheme] > 0) {
              temp_returnData.push({
                TITLE: temp_scoreData[key]["TITLE"],
                artist: temp_scoreData[key]["artist"],
                diff: diff,
                radarScore: temp_scoreData[key]["radarScore"][diff],
              });
              diff;
            }
          }
        }
        this.ShowData = temp_returnData;
      }
    },
    invisSameTitleData() {
      this.checked = !this.checked;
      this.sortBy(this.selectedTheme);
    },
  },
};
</script>

<style scoped>
.main_box {
  text-align: center;
  margin: auto;
  width: 98%;
}
input[type="text"] {
  width: 200px;
  height: 200px;
}
table {
  border: solid 1px #ccc;
  border-collapse: collapse;
  margin: auto;
}
th {
  padding: 5px;
  border: solid 1px #ccc;
  background-color: #eee;
}
td {
  height: 25px;
  padding: 5px;
  border: solid 1px #ccc;
}
</style>
