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
      <el-card class="box-card"style="width: 350px;height: 350px" shadow="hover">
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
            <el-descriptions-item label="已选择">
              <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.room_name}}</span>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-card>
    </el-aside>
      <el-main style="height: 800px;width: 200px;margin-top: 0px;border: 1px solid rgb(222,27,79);">
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
