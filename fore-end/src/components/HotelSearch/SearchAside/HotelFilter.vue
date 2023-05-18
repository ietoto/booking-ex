<template>
  <el-container direction="vertical" class="container">
    <el-row>
      <el-card class="card1" shadow="never">
        缩小搜索范围
      </el-card>

      <el-card class="card2" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">住宿评级</el-row>
        <el-checkbox-group v-model="checkedpoint" style="margin-top:5px;">
          <el-checkbox @change="pointChange" v-for="(points, index) in choosepoints" :label="points" :key="points"
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
        <el-checkbox-group v-model="checkedpointdistance" style="margin-top:5px;">
          <el-checkbox @change="distanceChange" v-for="(points, index) in choosedistance" :label="points" :key="points"
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
        <el-checkbox-group v-model="checkedpointcancle" style="margin-top:5px;">
          <el-checkbox @change="cancleChange" v-for="(points, index) in choosecancle" :label="points" :key="points"
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
        <el-checkbox-group v-model="checkedpointscore" style="margin-top:5px;">
          <el-checkbox @change="scoreChange" v-for="(points, index) in choosescore" :label="points" :key="points"
                       style="display:block;font-weight:500;font-size:x-large">
            <el-row>
              <el-col :span="22"><div>{{points}}</div></el-col>
              <el-col :span="2"><div>{{scorenum[index]}}</div></el-col>
            </el-row>
          </el-checkbox>
        </el-checkbox-group>
      </el-card>
      <el-card class="card6" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">酒店设施</el-row>
        <el-checkbox-group v-model="checkedpointfacility" style="margin-top:5px;">
          <el-checkbox @change="facilityChange" v-for="(points, index) in facilityOptions.slice(0, 10)" :label="points" :key="points"
                       style="display:block;font-weight:500;font-size:x-large">
            <el-row>
              <el-col :span="22"><div>{{points.name}}</div></el-col>
              <el-col :span="2"><div>{{points.num}}</div></el-col>
            </el-row>
          </el-checkbox>
        </el-checkbox-group>
      </el-card>
      <el-card class="card7" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">客房设施</el-row>
        <el-checkbox-group v-model="checkedpointroom" style="margin-top:5px;">
          <el-checkbox @change="roomChange" v-for="(points, index) in roomOptions.slice(0, 10)" :label="points" :key="points"
                       style="display:block;font-weight:500;font-size:x-large">
            <el-row>
              <el-col :span="22"><div>{{points.name}}</div></el-col>
              <el-col :span="2"><div>{{points.num}}</div></el-col>
            </el-row>
          </el-checkbox>
        </el-checkbox-group>
      </el-card>

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
      checkedpointfacility: [],
      checkedpointroom: [],
      pointsnum: [],
      distancenum: [],
      canclenum: [],
      scorenum: [],
      facilityOptions: [],
      roomOptions: [],
      select_score_num: [0,0,0,0],
      select_star_num: [0,0,0,0,0,0],
      select_distance_num: [0,0,0],
      select_policy_num: [0,0],
      select_hotelFacList: [],
      select_roomFacList: [],
      search: null
    };
  },
  methods: {
    pointChange(val) {
      console.log(this.checkedpoint);
      this.select_star_num=[0,0,0,0,0,0]
      this.checkedpoint.forEach((item) => {
        switch (item){
          case '民宿':
            this.select_star_num[0]=1
            break
          case '一星级':
            this.select_star_num[1]=1
            break
          case '二星级':
            this.select_star_num[2]=1
            break
          case '三星级':
            this.select_star_num[3]=1
            break
          case '四星级':
            this.select_star_num[4]=1
            break
          case '五星级':
            this.select_star_num[5]=1
            break
        }
      });
      console.log(this.select_star_num);
      this.search=this.$store.state.search
      this.search.select_star_num=this.select_star_num
      this.$store.commit("search",this.search)
    },
    distanceChange(val) {
      console.log(this.checkedpointdistance);
      this.select_distance_num=[0,0,0]
      this.checkedpointdistance.forEach((item) => {
        switch (item){
          case '一公里内':
            this.select_distance_num[0]=1
            break
          case '三公里内':
            this.select_distance_num[1]=1
            break
          case '五公里内':
            this.select_distance_num[2]=1
            break
        }
      });
      console.log(this.select_star_num);
      this.search=this.$store.state.search
      this.search.select_distance_num=this.select_distance_num
      this.$store.commit("search",this.search)
    },
    cancleChange(val) {
      console.log(this.checkedpointcancle);
      this.select_policy_num=[0,0]
      this.checkedpointcancle.forEach((item) => {
        switch (item){
          case '免费取消':
            this.select_policy_num[0]=1
            break
          case '免费预订':
            this.select_policy_num[1]=1
            break
        }
      });
      console.log(this.select_policy_num);
      this.search=this.$store.state.search
      this.search.select_policy_num=this.select_policy_num
      this.$store.commit("search",this.search)
    },
    scoreChange(val) {
      console.log(this.checkedpointscore);
      this.select_score_num=[0,0,0,0]
      this.checkedpointscore.forEach((item) => {
        switch (item){
          case '好极了：9分以上':
            this.select_score_num[0]=1
            break
          case '非常好：8分以上':
            this.select_score_num[1]=1
            break
          case '好：7分以上':
            this.select_score_num[2]=1
            break
          case '令人愉悦：6分以上':
            this.select_score_num[3]=1
            break
        }
      });
      console.log(this.select_score_num);
      this.search=this.$store.state.search
      this.search.select_score_num=this.select_score_num
      this.$store.commit("search",this.search)
    },
    facilityChange(val) {
      console.log(this.checkedpointfacility);
      this.select_hotelFacList=[]
      this.checkedpointfacility.forEach((item) => {
        this.select_hotelFacList.push(item)
      });
      console.log(this.select_hotelFacList);
      this.search=this.$store.state.search
      this.search.select_hotelFacList=this.select_hotelFacList
      this.$store.commit("search",this.search)
    },
    roomChange(val) {
      console.log(this.checkedpointroom);
      this.select_roomFacList=[]
      this.checkedpointroom.forEach((item) => {
        this.select_roomFacList.push(item)
      });
      console.log(this.select_roomFacList);
      this.search=this.$store.state.search
      this.search.select_roomFacList=this.select_roomFacList
      this.$store.commit("search",this.search)
    },
    searchshow(){
      console.log('searchshow')
      this.pointsnum= this.$store.state.searchshow.star_num
      this.distancenum= this.$store.state.searchshow.distance_num
      this.canclenum= this.$store.state.searchshow.cancle_policy_num
      this.scorenum= this.$store.state.searchshow.score_num
      this.facilityOptions= this.$store.state.searchshow.hotelFacList
      this.roomOptions= this.$store.state.searchshow.roomFacList
      // console.log(this.facilityOptions)
      this.checkedpoint=[]
      if(this.$store.state.search.select_star_num!==null) {
        for (let i = 0; i < this.$store.state.search.select_star_num.length; i++) {
          console.log(i)
          if (this.$store.state.search.select_star_num[i]) {
            switch (i) {
              case 0:
                this.checkedpoint.push('民宿')
                break
              case 1:
                this.checkedpoint.push('一星级')
                break
              case 2:
                this.checkedpoint.push('二星级')
                break
              case 3:
                this.checkedpoint.push('三星级')
                break
              case 4:
                this.checkedpoint.push('四星级')
                break
              case 5:
                this.checkedpoint.push('五星级')
                break
            }
          }
        }
      }
      this.checkedpointdistance=[]
      if(this.$store.state.search.select_distance_num!==null) {
        for (let i = 0; i < this.$store.state.search.select_distance_num.length; i++) {
          console.log(i)
          if (this.$store.state.search.select_distance_num[i]) {
            switch (i) {
              case 0:
                this.checkedpointdistance.push('一公里内')
                break
              case 1:
                this.checkedpointdistance.push('三公里内')
                break
              case 2:
                this.checkedpointdistance.push('五公里内')
                break
            }
          }
        }
      }
      this.checkedpointcancle=[]
      if(this.$store.state.search.select_policy_num!==null) {
        for (let i = 0; i < this.$store.state.search.select_policy_num.length; i++) {
          console.log(i)
          if (this.$store.state.search.select_policy_num[i]) {
            switch (i) {
              case 0:
                this.checkedpointcancle.push('免费取消')
                break
              case 1:
                this.checkedpointcancle.push('免费预订')
                break
            }
          }
        }
      }
      this.checkedpointscore=[]
      if(this.$store.state.search.select_score_num!==null) {
        for (let i = 0; i < this.$store.state.search.select_score_num.length; i++) {
          console.log(i)
          if (this.$store.state.search.select_score_num[i]) {
            switch (i) {
              case 0:
                this.checkedpointscore.push('好极了：9分以上')
                break
              case 1:
                this.checkedpointscore.push('非常好：8分以上')
                break
              case 2:
                this.checkedpointscore.push('好：7分以上')
                break
              case 3:
                this.checkedpointscore.push('令人愉悦：6分以上')
                break
            }
          }
        }
      }
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
