<template>
  <body id="poster">
  <Navbar/>
  <el-container style="height: 1500px;margin-top: 20px;border: 1px solid rgb(222,27,79);width: 1100px;position: relative;left: 200px;">
    <el-header style="border: 1px solid rgb(222,27,79);">
      <el-steps :active="step" finish-status="success">
        <el-step title="已选住宿"></el-step>
        <el-step title="个人信息"></el-step>
        <el-step title="最后一步"></el-step>
      </el-steps>
    </el-header>
    <el-container style="height: 1500px;border: 1px solid rgb(27,134,222);width: 1100px;">
    <el-aside style="height: 1500px;width: 350px;margin-top: 0px;border: 1px solid rgb(222,27,79);">
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
      <el-main style="height: 1500px;width: 200px;margin-top: 0px;border: 1px solid rgb(222,27,79);">
        <el-card class="box-card"style="width: 700px;height: 300px" shadow="hover">
            <el-container style="border: 1px solid rgb(222,27,79);height: 250px;">
              <el-aside width="200px" style="border: 1px solid rgb(222,27,79);">Aside</el-aside>
              <el-container>
                <el-main style="border: 1px solid rgb(222,27,79);">
                  <div>
                    <el-row>
                      <el-col :span="3"><div> 酒店</div></el-col>
                      <el-col :span="12"><div>
                        <el-rate
                          v-model="star"
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
                    {{addresss}}
                  </div>
                  <div v-if="distance<=3" style=" font-size: 16px;color: #007f58;   margin-top: 10px;">
                    位置很好
                  </div>

                  <div v-if="distance<=3" style=" font-size: 16px;color: #ffffff;  margin-top: 10px;">
                    <span style="font-size:15px;width:500px;height:40px;border:solid 2px rgba(128,128,128,0);margin-right: 30px;background-color: #00356e">{{score}}</span>
                    <a v-if="score>=9" style=" font-size: 16px;color: #000000;">好评如潮</a>
                    <a v-else-if="score>=8" style=" font-size: 16px;color: #000000;">好极了</a>
                    <a v-else-if="score>=7" style=" font-size: 16px;color: #000000;">不错</a>
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
        <div style="text-align:right;margin-top: 25px;">
          <el-button type="primary">下一步：最终信息</el-button>
        </div>
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
      step: 1,
      star: 3.7,
      addresss: '两江西路',
      distance: 2,
      score: 9.7,
      Travelmode: '1',
      nameAndpostbox: {
        name: this.$store.state.user.name,
        postbox: this.$store.state.user.postbox
      },
      notes: null,
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
