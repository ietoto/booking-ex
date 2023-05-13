<template>
  <body id="poster">
  <Navbar/>
  <v-sidebar/>
  <el-container style="height: 625px; width: 1500px;">
    <el-aside style="width: 250px;margin-top: 50px;">
    </el-aside>
    <el-container style="height: 590px;margin-top: 20px;border: 1px solid #de1b4f;width: 1200px;position: relative;left: 20px;">
      <el-header>
        <el-form  :inline="true">
          <el-row>
            <el-col :span="60" :offset="100">
              <el-form-item label="用户id：">
                <el-input v-model="id" placeholder="请输入用户id" clearable/>
              </el-form-item>
            </el-col>
            <el-col :span="50">
              <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="getByUserId">查询</el-button>
                <el-button type="primary" icon="el-icon-plus" @click="SetAddInformationVisible">新增</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-header>
      <el-dialog title="添加订单信息" :visible.sync="AddInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="用户id" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.userid"></el-input>
          </el-form-item>
          <el-form-item label="酒店id" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.hotelid"></el-input>
          </el-form-item>
          <el-form-item label="客房id" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.roomid"></el-input>
          </el-form-item>
          <el-form-item label="数量" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.num"></el-input>
          </el-form-item>
          <el-form-item label="金额" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.money"></el-input>
          </el-form-item>
          <el-form-item label="开始日期" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.startdate"></el-input>
          </el-form-item>
          <el-form-item label="结束日期" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.enddate"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-select v-model="addorder.state" placeholder="请选择">
              <el-option
                v-for="item in state"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="Addorder" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog title="修改订单信息" :visible.sync="SetInformationVisible">
        <el-form label-width="100px" style="text-align: center;">
          <el-form-item label="用户id" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.userid"></el-input>
          </el-form-item>
          <el-form-item label="酒店id" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.hotelid"></el-input>
          </el-form-item>
          <el-form-item label="客房id" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.roomid"></el-input>
          </el-form-item>
          <el-form-item label="数量" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.num"></el-input>
          </el-form-item>
          <el-form-item label="金额" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.money"></el-input>
          </el-form-item>
          <el-form-item label="开始日期" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.startdate"></el-input>
          </el-form-item>
          <el-form-item label="结束日期" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-input v-model="addorder.enddate"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="pass" style="width: 80%;display: inline-block;position: relative;left: -50px;">
            <el-select v-model="addorder.state" placeholder="请选择">
              <el-option
                v-for="item in state"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="width: 60%;display: inline-block;position: relative;left: -50px;">
            <el-button type="primary" @click="updateorder" style="width: 80%;">提交</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-main>
        <el-container style="height: 460px;margin-top: -15px;border: 1px solid #de1b4f;width: 1200px;position: relative;left: 0px;">
          <el-table
            border
            height="450"
            v-loading="loading"
            element-loading-text="努力加载中"
            @cell-mouse-enter="mouseEnter"
            :data="orderList.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
          >
            <el-table-column label="序号" type="index" width="55">
              <template v-slot="scope">
                <!-- (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1  -->
                <span>{{ (page.currentPage - 1) * page.pageSize + scope.$index + 1 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="订单id" prop="id" min-width="25px"/>
            <el-table-column label="用户id" prop="id" min-width="25px"/>
            <el-table-column label="用户姓名" prop="username" min-width="25px"/>
            <el-table-column label="酒店id" prop="password" min-width="25px"/>
            <el-table-column label="酒店名" prop="name" min-width="25px"/>
            <el-table-column label="客房id" prop="postbox" min-width="25px"/>
            <el-table-column label="客房名" prop="phone" min-width="25px"/>
            <el-table-column label="房间数" prop="state" min-width="25px"/>
            <el-table-column label="入住时间" prop="hotel_id" min-width="25px"/>
            <el-table-column label="离开时间" prop="state" min-width="25px"/>
            <el-table-column label="状态" prop="hotel_id" min-width="25px"/>
            <el-table-column label="操作" prop="operation" width="200">
              <template>
                <el-button
                  type="text"
                  icon="el-icon-edit"
                  @click="SetSetInformationVisible"
                >修改</el-button>
                <el-button
                  type="text"
                  icon="el-icon-delete"
                  style="color: red;"
                  @click="deleteuser"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-container>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            background
            layout="total,prev, pager, next, jumper"
            :page-size="6"
            :total="orderList.length">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </el-container>
  </body>
</template>

<script>
import Navbar from '../home/Navbar/Navbar.vue'
import vSidebar from './Sidebar.vue';
export default {
  name: "Order_manage",
  components :{
    Navbar,
    vSidebar
  },
  mounted: function () {
    console.log('挂载开始')
    this.getall()
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.currentPage = val
    },
    getByUserId(){
      var _this = this
      this.loading=true
      this.$axios
        .post('/order/user_showall', {
          id: this.id
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            console.log('查询成功')
            this.orderList=successResponse.data
            for (let i = 0; i < this.orderList.length; i++) {
              switch (this.orderList[i].state){
                case 0:
                  this.orderList[i].state='未付款'
                  break
                case 1:
                  this.orderList[i].state='已付款'
                  break
                case 2:
                  this.orderList[i].state='已取消'
                  break
              }
            }
            this.loading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    SetAddInformationVisible(){
      this.AddInformationVisible=true
    },
    Addorder(){
      var _this = this
      if (this.adduser.username === ''||this.adduser.password === ''){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '用户名或密码不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/user/register', {
          username: this.adduser.username,
          password: this.adduser.password,
          name: this.adduser.name,
          postbox: this.adduser.postbox,
          phone: this.adduser.phone,
          state: this.adduser.state,
          hotel_id: this.adduser.hotel_id
        })
        .then(successResponse => {
          if (successResponse.data.username !=null) {
            // var data = this.registerForm
            this.$message({
              duration: 1000,
              showClose: true,
              message: '添加成功！',
              type: 'success'
            })
            this.AddInformationVisible=false
            this.getall()
          }
          else {
            this.$message({
              duration: 1000,
              showClose: true,
              message: '用户名和密码组合已存在！',
              type: 'error'
            })
          }
        })
        .catch(failResponse => {
        })
    },
    getall(){
      var _this = this
      this.username=null
      this.loading=true
      this.$axios
        .post('/order/admin_showall', {
        })
        .then(successResponse => {
          if (successResponse.data !=null) {
            console.log('查询成功')
            this.orderList=successResponse.data
            for (let i = 0; i < this.orderList.length; i++) {
              switch (this.orderList[i].state){
                case 0:
                  this.orderList[i].state='未付款'
                  break
                case 1:
                  this.orderList[i].state='已付款'
                  break
                case 2:
                  this.orderList[i].state='已取消'
                  break
              }
            }
            this.loading=false
          }
          else {
          }
        })
        .catch(failResponse => {
        })
    },
    deleteorder(){
      this.$confirm('此操作将永久删除该用户，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then((res) => {
        this.$axios
          .post('/user/delete', {
            id: this.chooseUser.id
          })
          .then(successResponse => {
            if (successResponse.data !=null) {
              console.log('删除成功')
              this.$message({
                duration: 1000,
                showClose: true,
                type: 'success',
                message: '删除成功！'
              })
              this.getall()
            }
            else {
              this.$message({
                duration: 1000,
                showClose: true,
                type: 'error',
                message: '删除失败！'
              })
              this.getall()
            }
          })
          .catch(failResponse => {
          })
      }).catch(() => {
        this.$message({
          duration: 1000,
          showClose: true,
          type: 'info',
          message: '取消删除'
        })
      })
    },
    SetSetInformationVisible(){
      this.SetInformationVisible=true
      this.adduser.username=this.chooseUser.username
      this.adduser.password=this.chooseUser.password
      this.adduser.phone=this.chooseUser.phone
      this.adduser.postbox=this.chooseUser.postbox
      this.adduser.name=this.chooseUser.name
      this.adduser.hotel_id=this.chooseUser.hotel_id
      switch (this.chooseUser.state){
        case '用户':
          this.adduser.state=0
          break
        case'系统管理员':
          this.adduser.state=1
          break
        case '酒店管理员':
          this.adduser.state=2
          break
      }
    },
    updateorder(){
      var _this = this
      if (this.adduser.username === ''||this.adduser.password === ''){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '用户名或密码不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/user/update', {
          id: this.chooseUser.id,
          username: this.adduser.username,
          password: this.adduser.password,
          name: this.adduser.name,
          postbox: this.adduser.postbox,
          phone: this.adduser.phone,
          state: this.adduser.state,
          hotel_id: this.adduser.hotel_id
        })
        .then(successResponse => {
          if (successResponse.data.username !=null) {
            // var data = this.registerForm
            this.$message({
              duration: 1000,
              showClose: true,
              message: '修改成功！',
              type: 'success'
            })
            this.SetInformationVisible=false
            this.getall()
          }
          else {
            this.$message({
              duration: 1000,
              showClose: true,
              message: '用户名和密码组合已存在！',
              type: 'error'
            })
          }
        })
        .catch(failResponse => {
        })
    },
    mouseEnter (data) {
      this.chooseOrder = Object.assign({}, data)
    }
  },
  data() {
    return {
      loading: true,
      id: null,
      orderList: [],
      chooseOrder: null,
      AddInformationVisible: false,
      SetInformationVisible: false,
      addorder:{
        userid:null,
        hotelid:null,
        roomid:null,
        num:null,
        money:null,
        startdate:null,
        enddate:null,
        state:null
      },
      state:[{
        value: 0,
        label: '未付款'
      },{
        value: 1,
        label: '已付款'
      },{
        value: 2,
        label: '已取消'
      }],
      page: {
        currentPage: 1, // 当前页
        pageSize: 6, // 每页条数
      }
    }
  }
}
</script>

<style scoped>

</style>
