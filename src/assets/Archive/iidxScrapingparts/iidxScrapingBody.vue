<template>
  <div>
    <div class="main_box">
      <br>
      ☆12参考表を参照し、CPI用のCSVテキストを生成します<br>
      ※<a href="https://sp12.iidx.app/">☆12参考表</a>の登録が必要です<br>
      ※実行には10~20秒ほどかかります<br>
      <br>
      id:0000-0000(ハイフンあり)
      <br>
      <textarea
        value=""
        id="IIDX_ID_Area"
        cols="10"
        rows="1"
      />
      <input type="button" id="sendButton" value="実行" @click="click()" />
      <br><br><br>
      <textarea
        id="show_csv_Area"
        rows="15"
        cols="40"
      />
    </div>
  </div>
</template>

<script>
import GASio from './GASio.js';

export default {
  data(){
    return {
      IIDX_ID:"",
    }
  },
  methods: {
    click: async function () {
      this.IIDX_ID = document.getElementById("IIDX_ID_Area").value;
      
      const body_exp = /^\d{4}-\d{4}$/;
      if (body_exp.test(this.IIDX_ID)){
        const tmp = await GASio.getCSV(this.IIDX_ID);
         document.getElementById("show_csv_Area").value = tmp;
      }
      else{
        alert("0000-0000の形式で入力してください");
      }
    }
  }
};
</script>

<style scoped>
.main_box {
  text-align: center;
  margin: auto;
  width: 90%;
}
</style>