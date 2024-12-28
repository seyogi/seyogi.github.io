<template>
  <div class="main_box">
    <div class="container">
      Subject:<br>
      <textarea
        id="subjectArea"
        rows="1"
        cols="33"
      /><br>
      Name:<br>
      <textarea
        id="nameArea"
        rows="1"
        cols="33"
      /><br>
      Text:<br>
      <textarea
        id="textArea"
        rows="10"
        cols="33"
      />
      <br>
      <input type="button" id="sendButton" value="Send" @click="click()" />
    </div>
  </div>
</template>

<script>
import test from './test.js';

export default {
  data(){
    return {
      subject:"test title",
      name:"",
      text:"temp",
    }
  },
  methods: {
    click: function () {
      this.subject = document.getElementById("subjectArea").value;
      this.name = document.getElementById("nameArea").value;
      this.text = document.getElementById("textArea").value;
      test.testfunc(this.subject,this.name,this.text);
    }
  }
};
</script>

<style scoped>
.main_box {
  text-align: center;
  margin: auto;
  width: 98%;
}
</style>