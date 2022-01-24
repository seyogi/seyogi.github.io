<template>
  <div>
    <p v-if="msg.length > 0">
      {{ msg }}
    </p>
    <p v-else>no text</p>
    <input type="text" v-model="msg" />
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br><br> <br> <br> <br> <br> <br> <br><br> <br> <br> <br> <br> <br> <br><br> <br> <br><br> <br> <br> <br> <br> <br> <br>
    音楽ゲームを嗜む情報系(弱い)学生です。<br>
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