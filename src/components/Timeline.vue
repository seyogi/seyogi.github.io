<template>
  <div class="timeline" v-for="content in contents" :key="content">
    <li>
      <div class="timeline-line" />
      <p class="timeline-date" v-if="'date_y' in content">
        <a v-if="'date_y' in content">{{ content.date_y }}</a>
        <a class="month" v-if="'date_m' in content">{{ content.date_m }}</a>
      </p>

      <div class="timeline-content">
        <div class="timeline-circle" v-if="content.circle == true" />
        <div class="timeline-txt">
          <div v-if="content.bold == true">
            <h3>{{ content.text }}</h3>
          </div>
          <div v-if="content.bold != true">
            {{ content.text }}
          </div>
          <div class="sub-txt" v-if="'sub_text' in content">
            {{ content.sub_text }}
          </div>
        </div>
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

@media screen and (max-width: 700px) {
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
    left: 20px;
  }
  .timeline-circle {
    content: "";
    width: 12px;
    height: 12px;
    background: #833;
    position: absolute;
    left: 16px;
    top: 5px;
    border-radius: 100%;
  }
  .timeline-content {
    width: 75%;
    float: left;
    position: relative;
    padding-left: 50px;
  }
  .timeline-date {
    width: 80px;
    margin: 4px;
    text-align: center;
    background: #daa;
    border-radius: 10px; /* 角丸半径を50%にする(=円形にする) */
    margin-left: 40px;
  }
  .timeline-date .month {
    display: none;
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
/* for Desktop */
@media screen and (min-width: 700px) {
  .timeline > li {
    overflow: hidden;
    position: relative;
    margin: 0;
  }
  .timeline-date {
    width: 100px;
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
    left: 110px;
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
    width: 75%;
    float: left;
    padding-left: 30px;
  }
  .timeline-txt {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
    margin-bottom: 15px;
    color: #444;
  }
}
</style>
