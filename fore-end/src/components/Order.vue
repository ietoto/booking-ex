<template>
  <body id="poster">
  <Navbar/>
  <el-container style="height: 800px;margin-top: 20px;border: 1px solid rgb(222,27,79);width: 1100px;position: relative;left: 200px;">
    <el-header style="border: 1px solid rgb(222,27,79);">
      <el-steps :active="step" finish-status="success">
        <el-step title="已选住宿"></el-step>
        <el-step title="个人信息"></el-step>
        <el-step title="最后一步"></el-step>
      </el-steps>
    </el-header>
    <el-container style="height: 800px;border: 1px solid rgb(27,134,222);width: 1100px;">
    <el-aside style="height: 800px;width: 350px;margin-top: 0px;border: 1px solid rgb(222,27,79);">
      <el-card class="box-card"style="width: 340px;height: 300px" shadow="hover">
        <div slot="header" style="font-size: 18px; font-weight: bold;">
          <span>订单详情</span>
        </div>
        <div>
          <el-descriptions class="margin-top" :column="2" direction="vertical">
            <el-descriptions-item label="入住时间">
              <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.startdate}}</span>
            </el-descriptions-item>
            <el-descriptions-item label="退房时间">
              <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.enddate}}</span>
            </el-descriptions-item>
            <el-descriptions-item label="入住总天数">
              <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.date_num}}晚</span>
            </el-descriptions-item>
          </el-descriptions>
            <el-descriptions class="margin-top" :column="2" direction="vertical">
            <el-descriptions-item label="已选择">
              <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.room_name}}</span>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-card>
      <el-card class="box-card"style="width: 340px;height: 200px;margin-top: 15px;" shadow="hover">
        <div slot="header" style="font-size: 18px; font-weight: bold;">
          <span>价格汇总</span>
        </div>
        <el-card shadow="never" style="width: 340px;height: 80px;background-color: rgb(233,241,254); margin-left: -20px;">

          <el-row>
            <el-col :span="10"><div style="font-weight: bold; font-size: 25px;">总共</div></el-col>
            <el-col :span="12"><div style="font-weight: bold; font-size: 25px;text-align: right;">{{this.$store.state.order.money}}元</div></el-col>
          </el-row>
        </el-card>
        <div>
          <span style="font-weight: bold; font-size: 14px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            包含手续费与服务费
          </span>
        </div>
      </el-card>
      <el-card class="box-card"style="width: 340px;height: 120px;margin-top: 15px;" shadow="hover">
        <div slot="header" style="font-size: 18px; font-weight: bold;">
          <span>付款安排</span>
        </div>
        <div>
          <span style=" font-size: 16px;color: #007f58;">
            今日无需付款，到店付款即可。
          </span>
        </div>
      </el-card>
    </el-aside>
      <el-main style="height: 800px;width: 200px;margin-top: 0px;border: 1px solid rgb(222,27,79);">
        <el-card class="box-card"style="width: 700px;height: 300px" shadow="hover">
          <div slot="header" style="font-size: 18px; font-weight: bold;">
            <span>订单详情</span>
          </div>
          <div>
            <el-descriptions class="margin-top" :column="2" direction="vertical">
              <el-descriptions-item label="入住时间">
                <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.startdate}}</span>
              </el-descriptions-item>
              <el-descriptions-item label="退房时间">
                <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.enddate}}</span>
              </el-descriptions-item>
              <el-descriptions-item label="入住总天数">
                <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.date_num}}晚</span>
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions class="margin-top" :column="2" direction="vertical">
              <el-descriptions-item label="已选择">
                <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.room_name}}</span>
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
  </body>
</template>

<script>
import Navbar from './home/Navbar/Navbar.vue'
export default {
  name: "Order",
  components: {
    Navbar
  },
  mounted: function () {
    console.log('挂载开始')
    this.checkstep()
  },
  methods: {
    checkstep(){
      console.log('checkstep')
      if(this.$store.state.order.state!=='未付款'){
        this.step=3
      }
    }
  },
  data() {
    return {
      step: 1
    }
  }
}
</script>

<style scoped>

</style>
