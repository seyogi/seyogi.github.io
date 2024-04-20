<template>
  <div class="main_box">
    <br />
    <br />
    <div v-show="!isSignIn && !isUserNotSigned" id="box">
      <div class="container">
        <p>ID(メールアドレス)</p>
        <input type="email" v-model="inputValueId" />
        <!-- この下の<p></p>はテキストボックスを中央に配置するために必要な疑似要素です -->
        <p></p>
      </div>

      <div class="container">
        <p>パスワード</p>
        <input type="password" v-model="inputValuePassword" />
        <!-- この下の<p></p>はテキストボックスを中央に配置するために必要な疑似要素です -->
        <p></p>
      </div>
      <div class="message">
        <p id="message">{{ errorMessage }}&nbsp;</p>
      </div>
      <div class="buttonbox">
        <button class="btn_standard" type="submit" v-on:click="signUp">SignUp</button>
        <button class="btn_standard" type="submit" v-on:click="signIn">SignIn</button>
        <br />
        <button class="btn_standard" type="submit" v-on:click="notSigned">ログインせずに使用する</button>
      </div>
      <div class="loading_animation_container">
        <div class="loading_animation" v-if="this.isLoading">
          <LoadingAnimationComponent></LoadingAnimationComponent>
        </div>
      </div>
    </div>
    <div v-show="isSignIn" id="box">
      <div class="buttonbox">
        <button class="btn_standard" type="submit" v-on:click="logOut">SignOut</button>
        <button class="btn_standard" type="submit" v-on:click="DeleteAccount">
          DeleteAccount
        </button>
      </div>
    </div>
    <div v-show="isSignIn" id="box">
      <div class="tabgroup">
        <ul class="tabnav">
          <button @click="selectTab('1')">LIST表示</button>
          <button @click="selectTab('2')">DATA登録</button>
        </ul>
        <div class="tabcontents">
          <div v-if="show == '1'"><iidxListShow ref="iidxListShow"> </iidxListShow></div>
          <div v-else-if="show == '2'"><iidxListSet> </iidxListSet></div>
        </div>
      </div>
    </div>
    <div v-show="isUserNotSigned">
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
import iidxListSet from "./iidxListSet.vue";
import iidxListShow from "./iidxListShow.vue";
import LoadingAnimationComponent from "./LoadingAnimationComponent.vue";
import iidxListUserNotSigned from "./iidxListUserNotSigned.vue";
// Firebase関連のインポート
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import Firebase from "../../firebase_settings/index.js";
import iidxRadarJson from "../../assets/iidxRadar.json";

const auth = Firebase.auth;
const db = Firebase.db;

export default {
  components: {
    iidxListSet,
    iidxListShow,
    LoadingAnimationComponent,
    iidxListUserNotSigned,
  },
  data() {
    return {
      // ローディングアニメーション
      isLoading: false,
      isSignIn: false,
      isUserNotSigned: false,
      // エラーメッセージ
      errorMessage: "",
      // 入力欄
      inputValueId: "",
      inputValuePassword: "",
      user: null,

      show: "1",

      iidxRadarScore: iidxRadarJson,

      scoreData: [],
      radarData: {},
    };
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.showMenu();
      }
    });
  },
  methods: {
    signUp() {
      if (
        this.inputValueId === undefined ||
        this.inputValueId === "" ||
        this.inputValuePassword === undefined ||
        this.inputValuePassword === ""
      ) {
        document.getElementById("message").style.color = "red";
        this.errorMessage = "IDまたはパスワードが未入力です";
        return;
      }
      this.isLoading = true;
      // エラーメッセージの消去
      this.errorMessage = "";
      // id,passを取得
      const mId = this.inputValueId;
      const mPass = this.inputValuePassword;

      // 連続クリックを防ぐためにパスワード欄を空欄にする
      this.inputValuePassword = "";

      createUserWithEmailAndPassword(auth, mId, mPass)
        .then((userCredential) => {
          console.log("sign up success " + userCredential.user.email);
          document.getElementById("message").style.color = "black";
          this.errorMessage =
            "「" + userCredential.user.email + "」でアカウントを作成しました";
          this.isLoading = false;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          document.getElementById("message").style.color = "red";
          this.errorMessage = errorMessage;
          this.isLoading = false;
        });
    },
    signIn() {
      // IDとパスワードの未入力チェック
      if (
        this.inputValueId === undefined ||
        this.inputValueId === "" ||
        this.inputValuePassword === undefined ||
        this.inputValuePassword === ""
      ) {
        document.getElementById("message").style.color = "red";
        this.errorMessage = "IDまたはパスワードが未入力です";
        return;
      }
      this.isLoading = true;
      // エラーメッセージの消去
      this.errorMessage = "";
      // id,passを取得
      const mId = this.inputValueId;
      const mPass = this.inputValuePassword;

      // 連続クリックを防ぐためにパスワード欄を空欄にする
      this.inputValuePassword = "";

      // サインインメソッド
      signInWithEmailAndPassword(auth, mId, mPass)
        // サインイン成功時
        .then((userCredential) => {
          this.user = userCredential.user;
          console.log("ログイン成功 " + this.user.email);
          this.isLoading = false;
          this.showMenu();
        })

        // サインイン失敗時
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(
            "ログインエラー: errorCode -> " +
              errorCode +
              ", errorMessage -> " +
              errorMessage
          );
          this.JudgeErrorCode(errorCode);
          this.isLoading = false;
        });
    },
    notSigned() {
      this.isUserNotSigned = true;
    },
    async logOut() {
      var result = confirm("サインアウトしますか？");
      if (result) {
        if (this.user) {
          await signOut(auth);
          this.isSignIn = false;
          this.user = null;
          return;
        }
      }
    },
    async DeleteAccount() {
      var result = confirm("本当にアカウントを削除しますか？");
      if (result) {
        if (this.user) {
          deleteDoc(doc(db, "userData", this.user.uid));
          this.user
            .delete()
            .then(function () {})
            .catch(function (error) {
              console.log(error);
            });
          this.errorMessage = "「" + this.user.email + "」のアカウントを削除しました";
          this.isSignIn = false;
          this.user = null;
        }
      }
    },
    JudgeErrorCode(mError) {
      const errorCode = String(mError);
      if (
        errorCode === "auth/wrong-password" ||
        errorCode === "auth/invalid-email" ||
        errorCode === "auth/user-not-found"
      ) {
        document.getElementById("message").style.color = "red";
        this.errorMessage = "ログインに失敗しました。IDまたはパスワードが間違っています";
      } else {
        document.getElementById("message").style.color = "red";
        this.errorMessage = "ログインに失敗しました。予期せぬエラーが発生しました。";
      }
    },

    async showMenu() {
      this.isSignIn = true;
      this.receive_radarData();
      this.receive_userData(this.user.uid);
    },

    calc_radarScore(diff, userData, radarData) {
      var maxScore = radarData[diff]["ノート数"] * 2;
      delete radarData["ノート数"];
      var MaxValue = {};
      Object.entries(radarData[diff]).forEach(([key, value]) => {
        var temp =
          Math.floor(value * (userData[diff] / maxScore) * Math.pow(10, 2)) /
          Math.pow(10, 2);
        MaxValue[key] = Math.floor((temp - value) * Math.pow(10, 2)) / Math.pow(10, 2);
        radarData[diff][key] = temp;
      });
      return {
        radarScore: radarData[diff],
        rawScore: userData[diff],
        MAXScore: maxScore,
        ScorePer:
          Math.floor((userData[diff] / maxScore) * Math.pow(10, 4)) / Math.pow(10, 2),
        MaxradarScore: MaxValue,
      };
    },

    receive_radarData() {
      this.iidxRadarScore = iidxRadarJson;
    },

    receive_userData(uid) {
      const docRef = doc(db, "userData", uid);
      this.isLoading = true;
      getDoc(docRef).then((documentSnapshot) => {
        if (documentSnapshot.exists()) {
          console.log("Document exist!");
          var temp_userData = documentSnapshot.data();
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
          this.scoreData = temp_returnData;
          this.$refs.iidxListShow.sortBy("NOTES");
        } else {
          this.isLoading = false;
          console.log("Document does not exist!");
        }
      });
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
      this.scoreData = temp_returnData;
      this.$refs.iidxListUserNotSigned.sortBy("NOTES");
    },

    selectTab: function (num) {
      this.show = num;
      if (num == 1) this.receive_userData(this.user.uid);
    },
  },
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
