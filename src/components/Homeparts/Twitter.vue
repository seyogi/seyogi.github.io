<template>
  <div class="twitter-widget">
    <Timeline :id="twitterId" source-type="profile" :options="{ 'height': T_Height, 'width': T_Width,theme: T_Theme}" />
  </div>
</template>
<script>
import { Timeline } from "vue-tweet-embed";

export default {
  components: {
    Timeline
  },
  data() {
    return {
      twitterId: "syg_74",
      T_Height: 600,
      T_Theme:'dark',
      T_Width: 300
    }
  },
}
</script>
<style scoped>

</style>
