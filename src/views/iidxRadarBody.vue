<template>
  <div class="center_container">
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
    <input type="file" id="csvFile" name="avatar" accept=".csv" @change="selectedFile" />
    <br />
    <br />
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
    表示曲数
    <input v-model="numInput" size="20" />
    <br />
    {{ errmsg }}
    <br />
    <input type="button" id="sendButton" value="Go" @click="click()" />
    <br />
    <br />
    <table align="center">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" v-bind:key="index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="scoreData in scoreDatas" :key="scoreData.Name">
          <td>{{ scoreData.Score }}</td>
          <td>{{ scoreData.Name }}</td>
          <td>{{ scoreData.diff }}</td>
        </tr>
      </tbody>
    </table>
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
      headers: ["レーダー値", "曲名", "難易度"],
      selectedTheme: "",
      optionThemes: [
        { id: 0, name: "NOTES" },
        { id: 1, name: "PEAK" },
        { id: 2, name: "SCRATCH" },
        { id: 3, name: "SOF-LAN" },
        { id: 4, name: "CHARGE" },
        { id: 5, name: "CHORD" },
      ],
      numInput: "10",
      errmsg: "",
      scoreDatas: "",
      uploadFile: null,
      csvText: "",
    };
  },
  mounted() {},
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
      if (this.selectedTheme == "") {
        this.errmsg = "Themeを選択してください";
      } else if (this.numInput < 1) {
        this.errmsg = " 表示曲数は1以上にしてください";
      } else {
        this.errmsg = "";
      }

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
        });
      }
    },
    send_file(file, config) {
      console.log(file, config);
      return axios.post(
        "iidx/uploadfile/?Theme=" + this.selectedTheme + "&displayNum=" + this.numInput,
        file,
        config
      );
    },
    send_text(text, config) {
      return axios.post(
        "iidx/uploadtext/?Theme=" + this.selectedTheme + "&displayNum=" + this.numInput,
        text,
        config
      );
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
