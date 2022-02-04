<template>
  <div>
    <div class="main_box">
      <br> 
      一般学生音ゲーマーによる雑記ページです。<br>
      Vue触ったし年内にはサイト一新しようかなーとか考えてます。<br>
      <br>
      <p v-if="msg.length > 0">
        {{ msg }}
      </p>
      <p v-else>no text</p>
      <input type="text" v-model="msg" /><br><br>
      <br> <br> <br> <br> <br>  <br> <br> <br><br> <br> <br><br> <br> <br> <br> <br> <br> <br>
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      msg: "ホームページ更新中です",
    };
  },
};
</script>


<style scoped>
.main_box {

    margin-left : 10px ;
}

</style>
