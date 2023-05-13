<template>
  <el-container direction="vertical">
    <el-row>
      <el-card class="card1" shadow="never">
        缩小搜索范围
      </el-card>

      <el-card class="card2" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">住宿评级</el-row>
        <el-checkbox-group v-model="checkedpoint" style="margin-top:5px;" :min="0" :max="5">
          <el-checkbox v-for="points in choosepoints" :label="points" :key="points"
            style="display:block;font-weight:500;font-size:x-large">{{ points }}</el-checkbox>
        </el-checkbox-group>
      </el-card>


      <el-card class="card3" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">休闲乐活</el-row>
        <el-checkbox-group v-model="checkedfun" style="margin-top:5px;" :min="0" :max="5">
          <el-checkbox v-for="fun in choosefun" :label="fun" :key="fun"
            style="display:block;font-weight:500;font-size:x-large">{{ fun }}</el-checkbox>
        </el-checkbox-group>
      </el-card>

      <el-card class="card4" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">设施</el-row>
        <el-checkbox-group v-model="checkedfacility" style="margin-top:5px;" :min="0" :max="14">
          <el-checkbox v-for="facility in choosefacility" :label="facility" :key="facility"
            style="display:block;font-weight:500;font-size:x-large">{{ facility }}</el-checkbox>
        </el-checkbox-group>
      </el-card>

      <el-card class="card5" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">客房设施</el-row>
        <el-checkbox-group v-model="checkedroom" style="margin-top:5px;" :min="0" :max="25">
          <el-checkbox v-for="room in chooseroom" :label="room" :key="room"
            style="display:block;font-weight:500;font-size:x-large">{{ room }}</el-checkbox>
        </el-checkbox-group>
      </el-card>


      <el-card class="card6" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">住宿无障碍设施</el-row>
        <el-checkbox-group v-model="checkedstay" style="margin-top:5px;" :min="0" :max="8">
          <el-checkbox v-for="stay in choosestay" :label="stay" :key="stay"
            style="display:block;font-weight:500;font-size:x-large">{{ stay }}</el-checkbox>
        </el-checkbox-group>
      </el-card>

      <el-card class="card7" shadow="hover">
        <el-row style="font-size: medium;font-weight:800">客房无障碍设施</el-row>
        <el-checkbox-group v-model="checkedlive" style="margin-top:5px;" :min="0" :max="10">
          <el-checkbox v-for="live in chooselive" :label="live" :key="live"
            style="display:block;font-weight:500;font-size:x-large">{{ live }}</el-checkbox>
        </el-checkbox-group>
      </el-card>

    </el-row>


  </el-container>
</template>
  
<script>
const pointOptions = ['一星级', '二星级', '三星级', '四星级', '五星级'];
const funOptions = ['按摩', '热水浴池/按摩浴缸', '自行车租赁', '公共浴池', '桑拿浴'];
const facilityOptions = ['停车场', '餐厅', '准许携带宠物', '客房服务', '24小时前台', '健身中心', '禁烟客房', '机场班车', '无障碍设施', '家庭间', 'Spa及健康中心', '免费无线网络连接', '电动车充电站', '游泳池'];
const roomOptions = ['私人浴室', '海景', '私人游泳池', '厨房/小厨房', '空调', '淋浴', '阳台', '卫生间', '享有风景', '电视', '游泳池景', '浴缸', '冰箱', '山景', '景观泳池', 'Spa浴缸', '毛巾', '露台', '冷水池', '卫生纸', '泳池浴巾', '花园景', '听力无障碍设施', '瓷砖/大理石地板', '平板电视'];
const stayOptions = ['无障碍通道', '坐便器-带扶手', '坐便器较高', '盥洗盆较低', '带紧急按钮的浴室', '视觉辅助：布莱叶盲文', '视觉辅助：可触摸图标', '语音辅助'];
const liveOptions = ['整间住宿位于地面楼层', '高层由电梯直达', '坐便器-带扶手', '浴缸-带扶手', '无障碍淋浴', '步入式淋浴', '坐便器较高', '盥洗盆较低', '浴室-带紧急按钮', '淋浴座椅']
export default {
  name: "HotelFilter",
  data() {
    return {
      checkedpoint: [],
      choosepoints: pointOptions,
      checkedfun: [],
      choosefun: funOptions,
      checkedfacility: [],
      choosefacility: facilityOptions,
      checkedroom: [],
      chooseroom: roomOptions,
      checkedstay: [],
      choosestay: stayOptions,
      checkedlive: [],
      chooselive: liveOptions,
    };
  }
};
</script>

<style scoped>
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