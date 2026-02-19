<template>
  <div class="timeline" v-for="(content,index) in timeline_contents" :key="index">
    <li>
      <div class="timeline-line" />
      <p class="timeline-date" v-if="shouldShowYear(index) || 'date_m' in content">
        <span v-if="shouldShowYear(index)" class="year">{{ content.date_y }}</span>
      </p>

      <div class="timeline-content">
        <div class="timeline-circle" v-if="content.circle == true" />
        <div class="main-block">
          <!-- text block on left -->
          <div class="timeline-txt">
            <!-- main text -->
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
          <!-- image on right like ActivityTimeline side-img -->
          <img v-if="content.imgurl" class="side-img" :src="content.imgurl" />
        </div>
      </div>
    </li>
  </div>
</template>

<script>

export default {
  props: ['timeline_contents'],
  methods: {
    dateKey(item) {
      const y = item.date_y || '';
      const m = item.date_m || '';
      return y + '/' + m;
    },
    shouldShowDate(idx) {
      const contents = this.timeline_contents;
      if (idx === 0) return (('date_y' in contents[0]) || ('date_m' in contents[0]));
      const cur = this.dateKey(contents[idx]);
      const prev = this.dateKey(contents[idx - 1]);
      return cur && cur !== prev;
    },
    shouldShowYear(idx) {
      const contents = this.timeline_contents;
      if (idx === 0) return 'date_y' in contents[0];
      const cur = contents[idx].date_y || '';
      const prev = contents[idx - 1].date_y || '';
      return cur && cur !== prev;
    },
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
  .side-img {
    display: none;
  }
  .timeline > li {
    overflow: hidden;
    position: relative;
    margin: 0;
  }
  .timeline-content {
    width: 85%;
    float: left;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
  }
  .timeline-date {
    width: 80px;
    margin: 4px;
    text-align: center;
    background: #daa;
    border-radius: 10px; /* 角丸半径を50%にする(=円形にする) */
    margin-left: 10px;
  }
  .timeline-date .month {
    display: block;
    line-height: 1.2;
  }
  .timeline-date .month {
    display: none;
  }
  .timeline-image-wrapper {
    display: none;
  }
  .timeline-txt{
    font-size: 15px;
    margin-bottom: 15px;
  }
  .timeline-txt .sub-txt {
    font-size: 12px;
  }
}
/* for Desktop */
@media screen and (min-width: 700px) {
  .timeline > li {
    overflow: hidden;
    position: relative;
    margin: 0;
  }
  /* layout block for timeline entries */
  .timeline-content .main-block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* align items to top */
  }
  .side-img {
    max-width: 100%;
    max-height: 150px;
    margin-top: 5px;
    margin-left: 10px;
    display: block;
  }
  /* legacy wrapper removed */
  .timeline-date {
    width: 100px;
    float: left;
    margin-top: 12px;
    text-align: right;
  }
  .timeline-date .year{
    font-weight: bold;
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
    top: 20px;
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
  }
}
</style>
