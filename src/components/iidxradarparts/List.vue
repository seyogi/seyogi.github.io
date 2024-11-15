<template>
  <div class="main_box">
    表示曲数
    <input type="number" v-model="numInput" size="5" />
    <div
        v-for="Data in this.ShowData.slice(0, this.numInput)"
        :key="Data.index"
      >
        <div class="scoreData_container">
          <div class="score">
            <div
              class="maintxt"
              :style="colorDataScore(Data.RadarScore)"
            >
              <a @click="changeShowData2()" v-if="vis2">
                {{ Math.floor(Data.RadarScore * Math.pow(10, 2)) / Math.pow(10, 2) }}
              </a>
              <a @click="changeShowData2()" v-if="!vis2">
                {{ Data.MAXRadarScore }}
              </a>
              <a class="subtxt">
                <a @click="changeShowData2()" v-if="vis2">
                  ({{ Math.floor((Data.RadarScore - Data.MAXRadarScore) * Math.pow(10, 2)) / Math.pow(10, 2) }})
                </a>
                <a @click="changeShowData2()" v-if="!vis2">
                  (MAX)
                </a>
                
              </a>
            </div>
            <div class="maintxt">
              <a class="subtxt2">
                {{ Math.floor(Data.RawScore * Math.pow(10, 2)) / Math.pow(10, 2) }}
                <a @click="changeShowData()" v-if="vis">
                  ({{ calcMAXFrom(Data.RawScore,Data.PerScore) }})
                </a>
                <a @click="changeShowData()" v-if="!vis">
                  ({{ (Math.floor((Data.PerScore*100) * Math.pow(10, 2)) / Math.pow(10, 2)) + "%"}})
                </a>
              </a>
            </div>
          </div>
          <div class="diff" :style="colorDataDiff(Data.Diff)">
            {{ Data.Level }}
            <div class="sub">{{ Data.Diff }}</div>
          </div>
          <div class="songData">
            {{ Data.Title }}
            <div class="sub">{{ Data.Artist }}</div>
          </div>
        </div>
      </div>
    <br />
  </div>
</template>

<script>
  export default {
    props: ['ShowData'],
    data(){
      return{
        vis: true,
        vis2: true,
        numInput: "10",
      }
    },
    methods: {
      changeShowData(){
        this.vis = !this.vis
      },
      changeShowData2(){
        this.vis2 = !this.vis2
      },
      calcMAXFrom(score,per){
        var MAX = Math.floor((score/per) * Math.pow(10, 0)) 
        var AAA = Math.floor((score/per * 8/9) * Math.pow(10, 0))  + 1
        var AA = Math.floor((score/per * 7/9) * Math.pow(10, 0))  + 1
        var A = Math.floor((score/per * 6/9) * Math.pow(10, 0))  + 1
        var B = Math.floor((score/per * 5/9) * Math.pow(10, 0))  + 1
        var C = Math.floor((score/per * 4/9) * Math.pow(10, 0))  + 1
        var D = Math.floor((score/per * 3/9) * Math.pow(10, 0))  + 1
        var E = Math.floor((score/per * 2/9) * Math.pow(10, 0))  + 1
        if(per > 17/18){
          return "MAX" + (Math.floor((score - MAX) * Math.pow(10, 0))) 
        }
        else if(per > 16/18){
          return "AAA+" + (Math.floor((score - AAA) * Math.pow(10, 0)))
        }
        else if(per > 15/18){
          return "AAA" + (Math.floor((score - AAA) * Math.pow(10, 0)))
        }
        else if(per > 14/18){
          return "AA+" + (Math.floor((score - AA) * Math.pow(10, 0)))
        }
        else if(per > 13/18){
          return "AA" + (Math.floor((score - AA) * Math.pow(10, 0)))
        }
        else if(per > 12/18){
          return "A+" + (Math.floor((score - A) * Math.pow(10, 0)))
        }
        else if(per > 11/18){
          return "A" + (Math.floor((score - A) * Math.pow(10, 0)))
        }
        else if(per > 10/18){
          return "B+" + (Math.floor((score - B) * Math.pow(10, 0)))
        }
        else if(per > 9/18){
          return "B" + (Math.floor((score - B) * Math.pow(10, 0)))
        }
        else if(per > 8/18){
          return "C+" + (Math.floor((score - C) * Math.pow(10, 0)))
        }
        else if(per > 7/18){
          return "C" + (Math.floor((score - C) * Math.pow(10, 0)))
        }
        else if(per > 6/18){
          return "D+" + (Math.floor((score - D) * Math.pow(10, 0)))
        }
        else if(per > 5/18){
          return "D" + (Math.floor((score - D) * Math.pow(10, 0)))
        }
        else if(per > 4/18){
          return "E+" + (Math.floor((score - E) * Math.pow(10, 0)))
        }
        else{
          return "E" + (Math.floor((score - E) * Math.pow(10, 0)))
        }
      },
      colorDataDiff(diff) {
        if (diff == "ANOTHER") {
          var a = {
            color: "red",
          };
        } else if (diff == "HYPER") {
          a = {
            color: "orange",
          };
        } else {
          a = {
            color: "darkviolet",
          };
        }
        return a;
      }
      ,colorDataScore(Score) {
      //linear-gradient(transparent 50%, #ff7f7f 95%)
      if (Score >= 180) {
        var a = {
          background:
            "linear-gradient(transparent 50%, #f59090,#fcd7a1,#fff9b1,#a5d4ad,#a3bce2,#a59aca,#cfa7cd)",
        };
      } else if (Score >= 165) {
        a = {
          background: "linear-gradient(transparent 50%, gold 95%)",
        };
      } else if (Score >= 150) {
        a = {
          background: "linear-gradient(transparent 50%, silver 95%)",
        };
      } else if (Score >= 120) {
        a = {
          background: "linear-gradient(transparent 50%, #b87333 95%)",
        };
      } else if (Score >= 100) {
        a = {
          background: "linear-gradient(transparent 50%, darkviolet 95%)",
        };
      } else {
        a = {};
      }
      return a;
    },
    }
  }
</script>

<style scoped>
.main_box {
  text-align: center;
  margin: auto;
  width: 98%;
}

.scoreData_container {
  border: 2px solid #0059b3; /* 囲み線 */
  padding: 4px; /* 囲み線内の余白 */
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 98%;
}
.scoreData_container .score{
  width: 130px;
  padding-right: 10px;
}
.scoreData_container .score .maintxt {
  font-size: 120%;
}

@media screen and (max-width: 850px) {
  .scoreData_container .score .subtxt {
    display: none;
  }
  
.scoreData_container .diff {
  width: 40px;
  font-weight: bold;
  text-align: center;
}
  .scoreData_container .diff .sub {
    display: none;
  }
}
@media screen and (min-width: 850px) {
  .scoreData_container .score .subtxt {
    font-size: 12px;
  }
  .scoreData_container .diff {
    width: 110px;
    font-weight: bold;
    text-align: center;
  }
  .scoreData_container .diff .sub {
    font-size: 12px;
  }
}

.scoreData_container .score .subtxt2 {
  font-size: 12px;
}
.scoreData_container .songData {
  width: 70%;
  text-align: center;
}
.scoreData_container .songData .sub {
  font-size: 12px;
}
</style>
  