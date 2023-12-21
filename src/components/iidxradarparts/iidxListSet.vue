<template>
  <div class="main_box">
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
</template>

<script>
import { axios } from "../../axios/index";
import { doc, getDoc, setDoc } from "firebase/firestore";
import LoadingAnimationComponent from "./LoadingAnimationComponent.vue";
import Firebase from "../../firebase_settings/index.js";

const db = Firebase.db;

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
          this.send_userData(response.data.message, this.$parent.user.uid);
        });
      } else if (this.csvText != "") {
        this.isLoading = true;
        formData.append("text", this.csvText);
        this.send_text(formData).then((response) => {
          this.send_userData(response.data.message, this.$parent.user.uid);
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

    send_userData(data, uid) {
      //Firestore
      const docRef = doc(db, "userData", uid);
      getDoc(docRef).then((documentSnapshot) => {
        if (documentSnapshot.exists()) {
          /*updateDoc(docRef, data).then(() => {
                console.log("Document successfully update!");
                this.errmsg = "Document successfully update!";
                this.isLoading = false;
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
                this.isLoading = false;
              });*/
          setDoc(docRef, data)
            .then(() => {
              console.log("Document successfully written!");
              this.errmsg = "Document successfully update!";
              this.isLoading = false;
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
              this.isLoading = false;
            });
        } else {
          setDoc(docRef, data)
            .then(() => {
              console.log("Document successfully written!");
              this.errmsg = "Document successfully written!";
              this.isLoading = false;
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
              this.isLoading = false;
            });
        }
      });
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
</style>
