<template>
  <body id="poster">
  <Navbar/>
  <el-container style="height: 1500px;margin-top: 20px;border: 1px solid rgba(222,27,79,0);width: 1100px;position: relative;left: 200px;">
    <el-header style="border: 1px solid rgba(222,27,79,0);">
      <el-steps :active="step" finish-status="success">
        <el-step title="已选住宿"></el-step>
        <el-step title="个人信息"></el-step>
        <el-step title="最后一步"></el-step>
      </el-steps>
    </el-header>
    <el-container style="height: 1440px;border: 1px solid rgba(27,134,222,0);width: 1100px;">
    <el-aside style="height: 1440px;width: 350px;margin-top: 0px;border: 1px solid rgba(222,27,79,0);">
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
              <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.room_name}}*{{this.$store.state.order.num}}</span>
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
      <el-main style="height: 1440px;width: 200px;margin-top: 0px;border: 1px solid rgba(222,27,79,0);">
        <el-card class="box-card"style="width: 700px;height: 300px" shadow="hover">
            <el-container style="border: 1px solid rgba(222,27,79,0);height: 250px;">
              <el-aside width="200px" style="border: 1px solid rgba(222,27,79,0);">
                <el-container style="border: 1px solid rgba(222,27,79,0);height: 245px;">
                <el-image
                  style="width: 100%; height: 100%;"
                  :src="img"></el-image>
                </el-container>
              </el-aside>
              <el-container>
                <el-main style="border: 1px solid rgba(222,27,79,0);">
                  <div>
                    <el-row>
                      <el-col :span="3"><div> 酒店</div></el-col>
                      <el-col :span="12"><div>
                        <el-rate
                          v-model="hotel.star"
                          disabled
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                      </div></el-col>
                    </el-row>
                  </div>
                  <div style="font-weight: bold; font-size: 22px;   margin-top: 10px;">
                    {{this.$store.state.order.hotel_name}}
                  </div>
                  <div style="  margin-top: 10px;">
                    {{hotel.addresss}}
                  </div>
                  <div v-if="hotel.distance<=3&&hotel.distance>=0" style=" font-size: 16px;color: #007f58;   margin-top: 10px;">
                    位置很好
                  </div>
                  <div v-if="hotel.distance>=0" style=" font-size: 16px;color: #007f58;   margin-top: 10px;">
                    距离中心距离{{hotel.distance}}公里
                  </div>
                  <div v-if="hotel.distance<=3" style=" font-size: 16px;color: #ffffff;  margin-top: 10px;">
                    <span style="font-size:15px;width:500px;height:40px;border:solid 2px rgba(128,128,128,0);margin-right: 30px;background-color: #00356e">{{hotel.score}}</span>
                    <a v-if="hotel.score>=9" style=" font-size: 16px;color: #000000;">好评如潮</a>
                    <a v-else-if="hotel.score>=8" style=" font-size: 16px;color: #000000;">好极了</a>
                    <a v-else-if="hotel.score>=7" style=" font-size: 16px;color: #000000;">不错</a>
                    <a v-else-if="hotel.score===0" style=" font-size: 16px;color: #000000;">暂时没有评分</a>
                  </div>
                </el-main>
              </el-container>
            </el-container>
        </el-card>
        <el-card class="box-card" style="width: 700px;height: 100px;margin-top: 20px;" shadow="hover">
          <div>
          <span style="font-weight: bold; font-size: 24px;">
            温馨提示:
          </span>
          </div>
          <div style="margin-top: 20px;">
            <span style="font-size: 16px;" >
            无需信用卡！
            </span>
          </div>
        </el-card>
        <el-card class="box-card" style="width: 700px;height: 300px;margin-top: 15px;background-color: #e9f1fe;" shadow="hover">
          <div>
          <span style="font-weight: bold; font-size: 24px;">
            个人信息
          </span>
          </div>
          <div style="margin-top: 10px;">
          <span style=" font-size: 16px;color: #007f58;background-color: #d0ebd4;">
            快完成啦！将带*的必填项填写完整即可
          </span>
          </div>
          <div style="margin-top: 15px;">
          <span style="font-weight: bold; font-size: 16px;">
            出行类别：
          </span>
          </div>
          <div v-if="step!==3"   style="margin-top: 5px;">
          <template>
            <el-radio v-model="Travelmode" label="1">出差</el-radio>
            <el-radio v-model="Travelmode" label="2">自由行</el-radio>
          </template>
          </div>
          <div v-if="step===3"   style="margin-top: 5px;">
            <template>
              <el-radio disabled v-model="Travelmode" label="1">出差</el-radio>
              <el-radio disabled v-model="Travelmode" label="2">自由行</el-radio>
            </template>
          </div>
          <div v-if="step!==3" style="margin-top: 15px;">
            <el-form :model="nameAndpostbox" status-icon :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="nameAndpostbox.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="postbox">
                <el-input v-model="nameAndpostbox.postbox" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div v-else style="margin-top: 15px;">
            <el-form :model="nameAndpostbox" status-icon :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
              <el-form-item label="姓名" prop="name">
                <el-input disabled v-model="nameAndpostbox.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="postbox">
                <el-input disabled v-model="nameAndpostbox.postbox" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
        <p v-if="step!==3">
        <el-card class="box-card" style="width: 700px;height: 250px;margin-top: 15px;background-color: #e9f1fe;" shadow="hover">
          <div>
          <span style="font-weight: bold; font-size: 24px;">
            您还有什么特别要求？
          </span>
          </div>
          <div style="margin-top: 10px;">
          <span>
            特殊要求无法保证满足，但住宿尽力为你提供所需。你始终可以在预订完成后提出特殊要求。
          </span>
          </div>
          <div style="margin-top: 15px;">
          <span style="font-weight: bold; font-size: 16px;">
           请使用英语或中文填写您的请求。
          </span>
          </div>
          <div style="margin-top: 15px;">
            <el-input
              style="font-size: 16px;"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="notes">
            </el-input>
          </div>
        </el-card>
        </p>
        <el-card class="box-card" style="width: 700px;height: 170px;margin-top: 15px;background-color: #e9f1fe;" shadow="hover">
          <div>
          <span style="font-weight: bold; font-size: 24px;">
            查看住宿规定
          </span>
          </div>
          <div style="margin-top: 10px;">
          <span>
            房东希望您同意以下住宿规定：
          </span>
          </div>
          <div style="margin-top: 10px;">
          <span>
            不准吸烟
          </span>
          </div>
          <div style="margin-top: 10px;">
          <span>
            继续下一步则意味着您同意以上住宿规定。
          </span>
          </div>
        </el-card>
        <div v-if="step!==3" style="text-align:right;margin-top: 25px;">
          <el-button type="primary" @click="showconfirm()">下一步：最终信息</el-button>
        </div>
      </el-main>
    </el-container>
  </el-container>
  <el-dialog  :visible.sync="confirmVisible">
    <el-card class="box-card"style="width: 720px;height: 550px" shadow="never">
      <div slot="header" style="font-size: 18px; font-weight: bold;">
        <div style="font-weight: bold; font-size: 22px;   margin-top: 10px;">
          {{this.$store.state.order.hotel_name}}
        </div>
        <div style="  margin-top: 10px;">
          {{this.$store.state.order.room_name}}
        </div>
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
            <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.room_name}}*{{this.$store.state.order.num}}</span>
          </el-descriptions-item>
          <el-descriptions-item label="总价格">
            <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.order.money}}元</span>
          </el-descriptions-item>
          <el-descriptions-item label="预定人姓名">
            <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.user.name}}</span>
          </el-descriptions-item>
          <el-descriptions-item label="预订人邮箱">
            <span style="font-weight: bold; font-size: 18px;">{{this.$store.state.user.postbox}}</span>
          </el-descriptions-item>
            <el-descriptions-item label="特殊要求">
              <a v-if="notes!==null">
              <span style="font-weight: bold; font-size: 18px;">{{this.notes}}</span>
              </a>
              <a v-else>
                <span style="font-weight: bold; font-size: 18px;">无</span>
              </a>
            </el-descriptions-item>
        </el-descriptions>
      </div>
      <div v-if="step!==3" style="text-align:right;margin-top: 5px;">
        <el-button type="primary" @click="setconfirm()">我确认上述信息</el-button>
      </div>
    </el-card>
  </el-dialog>
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
    this.gethotel()
  },
  methods: {
    checkstep(){
      console.log('checkstep')
      if(this.$store.state.order.state!=='未付款'){
        this.step=3
      }
    },
    gethotel(){
      console.log('gethotel')
      var _this = this
      this.$axios
        .post('/hotel/searchByIdDetailed', {
          id: this.$store.state.order.hotelid
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            this.hotel=successResponse.data
            console.log(successResponse.data)
            this.$store.commit("hotel",this.hotel)

          }
          else {
          }
        })
        .catch(failResponse => {
        })
      this.$axios
        .get('/image/1/1.jpg', {
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            this.img= successResponse.data
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    showconfirm(){
      this.confirmVisible = true
    },
    setconfirm(){
      this.confirmVisible = false
      this.$axios
        .post('/order/update', {
          id: this.$store.state.order.id,
          userid: this.$store.state.order.userid,
          hotelid: this.$store.state.order.hotelid,
          roomid: this.$store.state.order.roomid,
          num: this.$store.state.order.num,
          money: this.$store.state.order.money,
          startdate: this.$store.state.order.startdate,
          enddate: this.$store.state.order.enddate,
          state: 1
        })
        .then(successResponse => {
          if (successResponse.data.code ===200) {
            // var data = this.registerForm
            this.$message({
              duration: 1000,
              showClose: true,
              message: '订单确认成功！',
              type: 'success'
            })
            this.order=this.$store.state.order
            this.order.state=1
            this.$store.commit("order",this.order)
            this.step=3
            this.$router.push('/myorder');
          }
          else {
            this.$message({
              duration: 1000,
              showClose: true,
              message: '修改失败！',
              type: 'error'
            })
          }
        })
        .catch(failResponse => {
        })
    }
  },
  data() {
    var checkname = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入姓名'));
      } else {
        if (value !== this.$store.state.user.name) {
          callback(new Error('请输入真实姓名！'));
        }
        callback();
      }
    };
    var checkpostbox = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else {
        if (value !== this.$store.state.user.postbox) {
           callback(new Error('请输入真实邮箱！'));
        }
        callback();
      }
    };
    return {
      step: 2,
      confirmVisible: false,
      img: 'http://localhost:8443/image/1/1.jpg',
      Travelmode: '1',
      nameAndpostbox: {
        name: this.$store.state.user.name,
        postbox: this.$store.state.user.postbox
      },
      notes: null,
      order: null,
      hotel: null,
      rules: {
        name: [
        { validator: checkname, trigger: 'blur' }
      ],
        postbox: [
        { validator: checkpostbox, trigger: 'blur' }
      ]
    }
    }

  }
}
</script>

<style scoped>

</style>
