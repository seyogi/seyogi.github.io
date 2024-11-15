<template>
  <div class="timeline" v-for="content in contents" :key="content">
    <li>
      <div class="timeline-line" />
      <p class="timeline-date" v-if="'date_y' in content">
        <a v-if="'date_y' in content">{{ content.date_y }}</a>
      </p>

      <div class="timeline-content">
        <div class="timeline-circle" v-if="content.circle == true" />
        <div class="timeline-txt">
          <div v-if="content.bold == true">
            <h3>{{ content.main_text }}</h3>
          </div>
          <div v-if="content.bold != true">
            {{ content.main_text }}
          </div>
          <div class="sub-txt" v-if="'product' in content">
            {{ content.product }}
          </div>
          <div class="sub-txt" v-if="'team_name' in content">
            Team : {{ content.team_name }}
          </div>
          <div class="sub-txt" v-if="'achievements_text' in content">
            Award: {{ content.achievements_text }}
          </div>
        </div>
        <img class="img" :src="content.imgurl" />
      </div>
    </li>
  </div>
</template>

<script>

export default {
  props: ['timeline_contents'],
  data() {
    return {
        contents:this.timeline_contents,
    };
  },
};
</script>

<style scoped>
.main_box {
  padding: 30px;
}
.timeline {
  list-style: none;
}

@media screen and (max-width: 800px) {
  .timeline > li {
    overflow: hidden;
    position: relative;
    margin: 0;
  }
  .timeline-line {
    content: "";
    width: 3px;
    height: 100%;
    background: #888;
    position: absolute;
    left: 5px;
  }
  .timeline-circle {
    display: none;
  }
  .timeline-content {
    width: 85%;
    float: left;
    position: relative;
    padding-left: 30px;
  }
  .timeline-date {
    width: 80px;
    margin: 4px;
    text-align: center;
    background: #daa;
    border-radius: 10px; /* 角丸半径を50%にする(=円形にする) */
    margin-left: 15px;
  }
  .timeline-date .month {
    display: none;
  }
  .timeline-txt{
    font-size: 18px;
    margin-bottom: 15px;
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
  }
  .timeline img {
    display: none;
  }
}
/* for Desktop */
@media screen and (min-width: 800px) {
  .timeline > li {
    overflow: hidden;
    position: relative;
    margin: 0;
  }
  .timeline-date {
    width: 70px;
    float: left;
    margin-top: 12px;
    margin-right: 10px;
    text-align: right;
  }
  .timeline-line {
    content: "";
    width: 3px;
    height: 100%;
    background: #888;
    position: absolute;
    left: 80px;
  }
  .timeline-circle {
    content: "";
    width: 12px;
    height: 12px;
    background: #833;
    position: absolute;
    left: 106px;
    top: 16px;
    border-radius: 100%;
  }
  .timeline-content {
    width: 80%;
    float: left;
    padding-left: 30px;
    display:flex;
    justify-content: space-between;
  }
  .timeline-txt {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    min-width: 350px;
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
  }
  .timeline-content img {
    max-width: 100%;
    max-height: 100px;
    margin-top: 10px;
  }
}
</style>
