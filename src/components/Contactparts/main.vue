<template>
  <div class="main_box">
    <div class="container">
      <br>
      管理人のgmailにメッセージを送信します
      <br>
      <br>
      Subject:<br>
      <textarea
        id="subjectArea"
        rows="1"
      /><br><br>
      Name:<br>
      <textarea
        id="nameArea"
        rows="1"
      /><br><br>
      Text:<br>
      <textarea
        id="textArea"
        rows="15"
      />
      <br>
      <br>
      <input type="button" id="sendButton" value="送信" @click="click()" />
    </div>
  </div>
</template>

<script>
import GASio from './GASio.js';

export default {
  data(){
    return {
      subject:"",
      name:"",
      text:"",
    }
  },
  methods: {
    click: function () {
      this.subject = document.getElementById("subjectArea").value;
      this.name = document.getElementById("nameArea").value;
      this.text = document.getElementById("textArea").value;
      if (this.subject != "" & this.name != "" & this.text != ""){
        GASio.sendemail(this.subject,this.name,this.text);
      }
      else{
        alert("空欄のテキストボックスがあります");
      }
    }
  }
};
</script>

<style scoped>
.main_box {
  margin: auto;
  width: 90%;
}
textarea {
  width: 100%;
}
</style>