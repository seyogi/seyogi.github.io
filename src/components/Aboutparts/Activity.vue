<template>
  <div class="center_container">
    <h3>Timeline</h3>
    <hr style="width: 100%" />
    <Timeline :timeline_contents="timeline_contents"></Timeline>
  </div>
</template>

<script>
import TimelineContents from '../../assets/ActivityContents.json';
import Timeline from "./ActivityTimeline.vue";
const elements = document.getElementsByClassName("sub-li");

export default {
  components: {
    Timeline,
  },
  methods: {
    test() {
      for (var i = 0; elements.length; i++) {
        if (elements[i].style.display == "block") {
          elements[i].style.display = "none";
        } else {
          elements[i].style.display = "block";
        }
      }
    },
  },
  data() {
    return {
      timeline_contents:TimelineContents,
    };
  },
};
</script>

<style scoped>
.timeline {
  list-style: none;
}
@media screen and (max-width: 700px) {

}
/* for Desktop */
@media screen and (min-width: 700px) {

}
</style>
