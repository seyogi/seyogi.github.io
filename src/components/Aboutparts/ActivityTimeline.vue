<template>
  <div class="timeline" v-for="(content, index) in contents" :key="index">
    <li>
      <div class="timeline-line" />
      <p class="timeline-date" v-if="'date_y' in content">
        <a v-if="'date_y' in content">{{ content.date_y }}</a>
      </p>

      <div class="timeline-content">
        <div class="timeline-circle" v-if="content.circle == true" />
        <div class="main-block">
          <div class="timeline-txt">
            <div v-if="content.circle == true">
              <a :href="content.url" target="_blank">
                <font-awesome-icon class="icons" icon="fa-solid fa-school" color="#422"/>
              </a>
            </div>
            <div class="main-txt">
              {{ content.main_text }}
              <a v-if="'info' in content" value="info" @click="click(index)">
                <font-awesome-icon class="icons" icon="fa-solid fa-circle-info" color="#422"/>
              </a>

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
          <img v-if="index != openIndex" class="side-img" :src="content.imgurl" />
        </div>
        <div >
          <transition name="collapse">
            <div v-show="index === openIndex" class="info_wrapper">
              <transition name="fade" appear>
                <div v-if="index === openIndex" class="info-block">
                  <img :src="content.imgurl" class="info-img" />
                  <div class="info-txt">
                     {{ content.info }}
                  </div>
                </div>
              </transition>
            </div>
          </transition>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import '@/components/Aboutparts/info.css';

export default {
  props: ['timeline_contents'],
  data() {
    return {
        contents:this.timeline_contents,
        openIndex: null
    };
  },
  methods: {
    click(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  }
};
</script>

<style scoped>
.main_box {
  padding: 30px;
}
.timeline {
  list-style: none;
}
.icons:hover {
  opacity: 0.5;
  transition: 300ms;
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
    width: 95%;
    float: left;
    position: relative;
    padding-left: 20px;
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
  .timeline-content .main-block .timeline-txt{
    font-size: 15px;
    margin-bottom: 15px;
  }
  .timeline-content .main-block .timeline-txt .main-txt{
    font-weight: bold;
  }
  .timeline-content .main-block .timeline-txt .sub-txt {
    font-size: 12px;
  }
  .timeline-content .main-block .side-img {
    display: none;
  }
  .timeline-content .info-block{
    padding-left: 20px;
    padding-right: 20px;
    display: grid;
    place-items: center;
  }
  .timeline-content .info-block .info-img{
    max-width: 100%;
    max-height: 300px;
  }
  .timeline-content .info-block .info-txt {
    padding: 10px;
    font-size: 14px;
    line-height: 2.0;
    white-space: pre-wrap;
    font-family: monospace;
    tab-size: 0;
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
    width: 65px;
    float: left;
    margin-top: 15px;
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
    left: 76px;
    top: 20px;
    border-radius: 100%;
  }
  .timeline-content {
    width: uv(100%-100px);
    margin-left: 100px;
  }
  .timeline-content .main-block{
    display:flex;
    justify-content: space-between;
  }
  .timeline-content .main-block .timeline-txt {
    font-size: 17px;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 450px;
  }
  .timeline-content .main-block .timeline-txt .main-txt{
    font-weight: 600;
  }
  .timeline-content .main-block .timeline-txt  .sub-txt {
    font-size: 13px;
  }
  .timeline-content .main-block .side-img {
    max-width: 100%;
    max-height: 100px;
    margin-top: 10px;
  }
  .timeline-content .info-block{
    padding-left: 20px;
    padding-right: 20px;
    display: grid;
    place-items: center;
  }
  .timeline-content .info-block .info-img{
    max-width: 100%;
    max-height: 300px;
  }
  .timeline-content .info-block .info-txt {
    padding: 10px;
    font-size: 14px;
    line-height: 2.0;
    white-space: pre-wrap;
    font-family: monospace;
    tab-size: 0;
  }
}
</style>
