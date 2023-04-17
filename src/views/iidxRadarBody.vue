<template>
  <div class="center_container">
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
    <input type="file" id="csvFile" name="avatar" accept=".csv" @change="selectedFile" />
    <br /><br />{{ this.errmsg }}
    <br />
    <input type="button" id="sendButton" value="Go" @click="click()" />
    <br />
    <br />
    <div id="vis">
      表示曲数
      <input type="number" v-model="numInput" size="5" />&nbsp;&nbsp;&nbsp;
      <select v-model="selectedTheme">
        <option disabled value="">Theme一覧</option>
        <option
          v-for="Theme in optionThemes"
          v-bind:value="Theme.name"
          v-bind:key="Theme.id"
        >
          {{ Theme.name }}
        </option>
      </select>
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
            v-for="scoreData in scoreDatas[selectedTheme].slice(0, this.numInput)"
            :key="scoreData.index"
          >
            <td>{{ scoreData.Score }}</td>
            <td>{{ scoreData.diff }}</td>
            <td>{{ scoreData.Name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
import { axios } from "../axios/index";

export default {
  components: {},
  data() {
    return {
      headers: ["レーダー値", "難易度", "曲名"],
      selectedTheme: "NOTES",
      optionThemes: [
        { id: 0, name: "NOTES" },
        { id: 1, name: "PEAK" },
        { id: 2, name: "SCRATCH" },
        { id: 3, name: "SOF_LAN" },
        { id: 4, name: "CHARGE" },
        { id: 5, name: "CHORD" },
      ],
      numInput: "10",
      errmsg: "",
      scoreDatas: {
        NOTES: [],
      },
      uploadFile: null,
      csvText: "",
    };
  },
  mounted() {
    document.getElementById("vis").style.display = "none";
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
        formData.append("file", this.uploadFile);
        let config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        this.send_file(formData, config).then((response) => {
          this.scoreDatas = response.data.message;
          document.getElementById("vis").style.display = "block";
        });
      } else if (this.csvText != "") {
        formData.append("text", this.csvText);
        let config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        this.send_text(formData, config).then((response) => {
          this.scoreDatas = response.data.message;
          document.getElementById("vis").style.display = "block";
        });
      } else {
        this.errmsg = "ファイルまたはテキストを入力してください";
      }
    },
    send_file(file, config) {
      return axios.post("iidx/uploadfile/", file, config);
    },
    send_text(text, config) {
      return axios.post("iidx/uploadtext/?displayNum=" + this.numInput, text, config);
    },
  },
};
</script>

<style scoped>
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
.center_container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  text-align: center;
}
</style>
