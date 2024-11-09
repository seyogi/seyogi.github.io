
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
        @change="selectedFile"
      />
      <br /><br />{{ this.errmsg }}
      <br />
      <input type="button" id="sendButton" value="Go" @click="click()" />
      <br /><br /><br />
    </div>
    <br />
    <select @change="mkShowData(this.checked)" v-model="selectedTheme">
      <option disabled value="">Theme一覧</option>
      <option
        v-for="Theme in optionThemes"
        v-bind:key="Theme"
      >
        {{ Theme }}
      </option>
    </select>
    &nbsp;&nbsp;&nbsp;
    <input
        type="checkbox"
        id="checkbox"
        v-model="checked"
        @click="visSameTitleData()"
      />
    <label for="checkbox">同名曲の異なる難易度を含む</label>
    <br><br />
    Top10_Av : {{ this.avRadarScore }}
    <br /><br />
    <List :ShowData="ShowData"/>
    <br /><br /><br />
  </div>
</template>

<script>
import MkShowDict from './mkShowDict.js'
import List from './List.vue'
import mkShowDict from './mkShowDict.js';

export default {
  components: {
    List,
  },
  data() {
    return {
      selectedTheme:'NOTES',
      optionThemes: [
        "NOTES" ,
        "PEAK",
        "SCRATCH",
        "SOF-LAN",
        "CHARGE",
        "CHORD",
      ],
      checked: false,
      isLoading: false,
      errmsg: "",
      uploadFile: null,
      csvText: "",
      IIDXRadarDict:{},
      ShowData:[],
      avRadarScore:0,
    }
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
    async click() {
      this.errmsg = "";
      if (this.uploadFile) {
        this.isLoading = true;
        this.IIDXRadarDict = await MkShowDict.mkDictFromFile(this.uploadFile);
        this.mkShowData(this.checked);
      } else if (this.csvText != "") {
        this.isLoading = true;
        this.IIDXRadarDict = MkShowDict.mkDictFromText(this.csvText);
        this.mkShowData(this.checked);
      } else {
        this.errmsg = "ファイルまたはテキストを入力してください";
      }
    },
    visSameTitleData() {
      this.checked = !this.checked;
      this.mkShowData(this.checked);
    },
    mkShowData(isvis = false){
      [this.ShowData, this.avRadarScore] = mkShowDict._mkShowData(this.IIDXRadarDict, this.selectedTheme, isvis);
    }
  }
}
</script>


<style scoped>
.main_box {
  text-align: center;
  margin: auto;
  width: 98%;
}
</style>
