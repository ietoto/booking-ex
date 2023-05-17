<template>
  <el-container direction="vertical" class="container">
    <el-row>
      <el-card class="card1" shadow="never">
        缩小搜索范围
      </el-card>

      <el-card class="card2" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">住宿评级</el-row>
        <el-checkbox-group v-model="checkedpoint" style="margin-top:5px;" :min="0" :max="5">
          <el-checkbox v-for="(points, index) in choosepoints" :label="points" :key="points"
            style="display:block;font-weight:500;font-size:x-large">
            <el-row>
              <el-col :span="22"><div>{{points}}</div></el-col>
              <el-col :span="2"><div>{{pointsnum[index]}}</div></el-col>
            </el-row>
          </el-checkbox>
        </el-checkbox-group>
      </el-card>
      <el-card class="card3" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">距离{{this.$store.state.search.location}}中心距离</el-row>
        <el-checkbox-group v-model="checkedpoint" style="margin-top:5px;" :min="0" :max="5">
          <el-checkbox v-for="(points, index) in choosedistance" :label="points" :key="points"
                       style="display:block;font-weight:500;font-size:x-large">
            <el-row>
              <el-col :span="22"><div>{{points}}</div></el-col>
              <el-col :span="2"><div>{{distancenum[index]}}</div></el-col>
            </el-row>
          </el-checkbox>
        </el-checkbox-group>
      </el-card>
      <el-card class="card4" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">取消政策</el-row>
        <el-checkbox-group v-model="checkedpointcancle" style="margin-top:5px;" :min="0" :max="5">
          <el-checkbox v-for="(points, index) in choosecancle" :label="points" :key="points"
                       style="display:block;font-weight:500;font-size:x-large">
            <el-row>
              <el-col :span="22"><div>{{points}}</div></el-col>
              <el-col :span="2"><div>{{canclenum[index]}}</div></el-col>
            </el-row>
          </el-checkbox>
        </el-checkbox-group>
      </el-card>
      <el-card class="card5" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">评分</el-row>
        <el-checkbox-group v-model="checkedpointscore" style="margin-top:5px;" :min="0" :max="5">
          <el-checkbox v-for="(points, index) in choosescore" :label="points" :key="points"
                       style="display:block;font-weight:500;font-size:x-large">
            <el-row>
              <el-col :span="22"><div>{{points}}</div></el-col>
              <el-col :span="2"><div>{{scorenum[index]}}</div></el-col>
            </el-row>
          </el-checkbox>
        </el-checkbox-group>
      </el-card>
<!--      <el-card class="card6" shadow="hover">-->
<!--        <el-row style="font-size: medium;font-weight:800">酒店设施</el-row>-->
<!--        <el-checkbox-group v-model="checkedpointfacility" style="margin-top:5px;" :min="0" :max="5">-->
<!--          <el-checkbox v-for="(points, index) in choosefacility" :label="points" :key="points"-->
<!--                       style="display:block;font-weight:500;font-size:x-large">-->
<!--            <el-row>-->
<!--              <el-col :span="22"><div>{{points.name}}</div></el-col>-->
<!--              <el-col :span="2"><div>{{points.num}}</div></el-col>-->
<!--            </el-row>-->
<!--          </el-checkbox>-->
<!--        </el-checkbox-group>-->
<!--      </el-card>-->
<!--      <el-card class="card7" shadow="hover">-->
<!--        <el-row style="font-size: medium;font-weight:800">客房设施</el-row>-->
<!--        <el-checkbox-group v-model="checkedpointroom" style="margin-top:5px;" :min="0" :max="5">-->
<!--          <el-checkbox v-for="(points, index) in chooseroom" :label="points" :key="points"-->
<!--                       style="display:block;font-weight:500;font-size:x-large">-->
<!--            <el-row>-->
<!--              <el-col :span="22"><div>{{points.name}}</div></el-col>-->
<!--              <el-col :span="2"><div>{{points.num}}</div></el-col>-->
<!--            </el-row>-->
<!--          </el-checkbox>-->
<!--        </el-checkbox-group>-->
<!--      </el-card>-->

    </el-row>


  </el-container>
</template>

<script>
const pointOptions = ['民宿','一星级', '二星级', '三星级', '四星级', '五星级'];
const distanceOptions = ['一公里内','三公里内', '五公里内'];
const cancleOptions = ['免费取消','免费预订'];
const scoreOptions = ['好极了：9分以上', '非常好：8分以上', '好：7分以上', '令人愉悦：6分以上'];
export default {
  name: "HotelFilter",
  mounted: function () {
    console.log('挂载开始')
    this.searchshow()
  },
  data() {
    return {
      checkedpoint: [],
      choosepoints: pointOptions,
      checkedpointdistance: [],
      choosedistance: distanceOptions,
      checkedpointcancle: [],
      choosecancle: cancleOptions,
      checkedpointscore: [],
      choosescore: scoreOptions,
      // checkedpointfacility: [],
      // choosefacility: facilityOptions,
      // checkedpointroom: [],
      // chooseroom: roomOptions,
      pointsnum: [],
      distancenum: [],
      canclenum: [],
      scorenum: [],
      // facilityOptions: [],
      // roomOptions: []
    };
  },
  methods: {
    searchshow(){
      console.log('searchshow')
      this.pointsnum= this.$store.state.searchshow.star_num
      this.distancenum= this.$store.state.searchshow.distance_num
      this.canclenum= this.$store.state.searchshow.cancle_policy_num
      this.scorenum= this.$store.state.searchshow.score_num
      // this.facilityOptions= this.$store.state.searchshow.hotelFacList
      // this.roomOptions= this.$store.state.searchshow.roomFacList
      // console.log(this.facilityOptions)
    }
  }
};
</script>

<style scoped>
.container
{
  margin-left: 10%;
  margin-right:10%;
  margin-bottom: 10%;
}

.card1 {
  border-radius: 2px;
  text-align: left;
  font-size: large;
  font-weight: 800;
}

.card2 {
  border-radius: 0px;
  text-align: left;
}

.card3 {
  border-radius: 0px;
  text-align: left;
}

.card4 {
  border-radius: 0px;
  text-align: left;
}

.card5 {
  border-radius: 0px;
  text-align: left;
}

.card6 {
  border-radius: 0px;
  text-align: left;
}

.card7 {
  border-radius: 0px;
  text-align: left;
}
</style>
