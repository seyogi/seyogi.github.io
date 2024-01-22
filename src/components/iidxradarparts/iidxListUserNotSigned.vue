<template>
  <div class="main_box">
    <div class="set_box">
      <br />
      ※同一曲について複数譜面タイプ（B/N/H/A/L）をプレーしている場合、それらの中の最大値のみが対象として適用されます
      <br />
      <textarea
        id="csvTextArea"
        name="csv_text"
        rows="10"
        cols="33"
        @change="changeTextArea"
      />
      <br />
      <input
        type="file"
        id="csvFile"
        name="avatar"
        accept=".csv"
        @change="selectedFile"
      />
      <br /><br />{{ this.errmsg }}
      <br />
      <input type="button" id="sendButton" value="Go" @click="click()" />
      <br /><br />
      <div class="loading_animation_container">
        <div class="loading_animation" v-if="this.isLoading">
          <LoadingAnimationComponent></LoadingAnimationComponent>
        </div>
      </div>
      <br />
    </div>
    <div class="show_box">
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
        Av:{{ this.SumData[selectedTheme] }} <br /><br />
        <div
          v-for="scoreData in this.ShowData.slice(0, this.numInput)"
          :key="scoreData.index"
        >
          <div class="scoreData_container">
            <div class="score">
              <div
                class="maintxt"
                :style="colorDataScore(scoreData.Scores.radarScore[selectedTheme])"
              >
                {{ scoreData.Scores["radarScore"][selectedTheme] }}
                <a class="subtxt"
                  >({{ scoreData.Scores["MaxradarScore"][selectedTheme] }})</a
                >
              </div>
              <div class="subtxt">
                {{ scoreData.Scores["rawScore"] }}/{{ scoreData.Scores["MAXScore"] }} ({{
                  scoreData.Scores["ScorePer"]
                }}%)<br />
              </div>
            </div>
            <div class="diff" :style="colorDataDiff(scoreData.diff)">
              {{ scoreData.diffNum }}
              <div class="sub">{{ scoreData.diff }}</div>
            </div>
            <div class="songData">
              {{ scoreData.TITLE }}
              <div class="sub">{{ scoreData.artist }}</div>
            </div>
          </div>
        </div>
        <br />
        <div class="loading_animation_container">
          <div class="loading_animation" v-if="this.$parent.isLoading">
            <LoadingAnimationComponent></LoadingAnimationComponent>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { axios } from "../../axios/index";
import LoadingAnimationComponent from "./LoadingAnimationComponent.vue";

export default {
  components: {
    LoadingAnimationComponent,
  },
  data() {
    return {
      // ローディングアニメーション
      isLoading: false,
      errmsg: "",
      uploadFile: null,
      csvText: "",
      config: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
      selectedTheme: "NOTES",
      SumData: {
        NOTES: 0,
        PEAK: 1,
        SCRATCH: 0,
        "SOF-LAN": 0,
        CHARGE: 0,
        CHORD: 0,
      },
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
      checked: false,
      ShowData: [],
      temp_scoreData:{},
    };
  },
  methods: {
    selectedFile: function (e) {
      e.preventDefault();
      let files = e.target.files;
      this.uploadFile = files[0];
    },
    changeTextArea: function () {
      let csvTextArea = document.getElementById("csvTextArea");
      this.csvText = csvTextArea.value;
    },
    click() {
      this.errmsg = "";
      var formData = new FormData();
      if (this.uploadFile) {
        this.isLoading = true;
        formData.append("file", this.uploadFile);
        this.send_file(formData).then((response) => {
          this.set_userData(response.data.message);
        });
      } else if (this.csvText != "") {
        this.isLoading = true;
        formData.append("text", this.csvText);
        this.send_text(formData).then((response) => {
          this.set_userData(response.data.message);
        });
      } else {
        this.errmsg = "ファイルまたはテキストを入力してください";
      }
    },
    send_file(file) {
      return axios.post("iidx/uploadfile/", file, this.config);
    },
    send_text(text) {
      return axios.post("iidx/uploadtext/", text, this.config);
    },
    set_userData(data) {
      this.isLoading = false;
      this.$parent.receive_temp_userData(data);
      console.log(data);
    },
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
        return (
          b["Scores"]["radarScore"][selectedTheme] -
          a["Scores"]["radarScore"][selectedTheme]
        );
      });
      if (!this.checked) {
        let total = 0;
        var nums = this.ShowData.slice(0, 10);
        for (let i = 0; i < 10; i++)
          total += nums[i]["Scores"]["radarScore"][selectedTheme];
        this.SumData[selectedTheme] =
          Math.floor((total / 10) * Math.pow(10, 2)) / Math.pow(10, 2);
      }
    },
    create_ShowData() {
      var temp_returnData = [];
      var temp_scoreData = this.$parent.scoreData;
      if (!this.checked) {
        for (let key in temp_scoreData) {
          var temp_maxScoreDiff = "";
          var temp_maxScoreNum = 0;
          for (let diff in temp_scoreData[key]["Scores"]) {
            if (
              temp_scoreData[key]["Scores"][diff]["radarScore"][this.selectedTheme] >
              temp_maxScoreNum
            ) {
              temp_maxScoreNum =
                temp_scoreData[key]["Scores"][diff]["radarScore"][this.selectedTheme];
              temp_maxScoreDiff = diff;
            }
          }
          if (temp_maxScoreNum > 0) {
            temp_returnData.push({
              TITLE: temp_scoreData[key]["TITLE"],
              artist: temp_scoreData[key]["artist"],
              diff: temp_maxScoreDiff,
              diffNum: temp_scoreData[key]["diffNum"][temp_maxScoreDiff],
              Scores: temp_scoreData[key]["Scores"][temp_maxScoreDiff],
            });
          }
        }
        this.ShowData = temp_returnData;
      } else {
        for (let key in temp_scoreData) {
          for (let diff in temp_scoreData[key]["Scores"]) {
            if (
              temp_scoreData[key]["Scores"][diff]["radarScore"][this.selectedTheme] > 0
            ) {
              temp_returnData.push({
                TITLE: temp_scoreData[key]["TITLE"],
                artist: temp_scoreData[key]["artist"],
                diff: diff,
                diffNum: temp_scoreData[key]["diffNum"][diff],
                Scores: temp_scoreData[key]["Scores"][diff],
              });
              diff;
            }
          }
        }
        this.ShowData = temp_returnData;
      }
    },
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
    },
    colorDataScore(Score) {
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
.scoreData_container .score {
  width: 150px;
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
