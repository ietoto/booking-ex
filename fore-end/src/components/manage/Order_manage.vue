<template>
  <body id="poster">
  <Navbar/>
  <v-sidebar/>
  <el-container style="height: 625px; width: 1500px;">
    <el-aside style="width: 250px;margin-top: 50px;">
    </el-aside>
    <el-container style="height: 590px;margin-top: 20px;border: 1px solid rgba(222,27,79,0);width: 1200px;position: relative;left: 20px;">
      <el-header>
        <el-form  :inline="true">
          <el-row>
            <el-col :span="60" :offset="100">
              <el-select v-model="value" placeholder="请选择" style="width: 120px;">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="60" :offset="100">
              <el-form-item>
                <el-input v-model="id" placeholder="请输入" clearable/>
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
        <el-container style="height: 460px;margin-top: -15px;border: 1px solid rgba(222,27,79,0);width: 1200px;position: relative;left: 0px;">
          <el-table
            border
            height="450"
            v-loading="loading"
            element-loading-text="努力加载中"
            @cell-mouse-enter="mouseEnter"
            :data="orderList.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"
          >
            <el-table-column label="序号" type="index" width="40">
              <template v-slot="scope">
                <!-- (当前页 - 1) * 当前显示数据条数 + 当前行数据的索引 + 1  -->
                <span>{{ (page.currentPage - 1) * page.pageSize + scope.$index + 1 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="订单id" prop="id" min-width="11px"/>
            <el-table-column label="用户id" prop="userid" min-width="12px"/>
            <el-table-column label="用户姓名" prop="username" min-width="12px"/>
            <el-table-column label="酒店id" prop="hotelid" min-width="12px"/>
            <el-table-column label="酒店名" prop="hotel_name" min-width="40px"/>
            <el-table-column label="客房id" prop="roomid" min-width="12px"/>
            <el-table-column label="客房名" prop="room_name" min-width="35px"/>
            <el-table-column label="房间数" prop="num" min-width="10px"/>
            <el-table-column label="金额" prop="money" min-width="15px"/>
            <el-table-column label="入住时间" prop="startdate" min-width="25px"/>
            <el-table-column label="离开时间" prop="enddate" min-width="25px"/>
            <el-table-column label="状态" prop="state" min-width="16px"/>
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
                  @click="deleteorder"
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
            :page-size="5"
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
      if(this.id===null){
        this.getall()
        return
      }
      if(this.id===''){
        this.getall()
        return
      }
      switch (this.value){
        case '1':
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
          break
        case '2':
          this.loading=true
          this.$axios
            .post('/order/showByUserName', {
              name: this.id
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
          break
        case '3':
          this.loading=true
          this.$axios
            .post('/order/showByHotelIDNew', {
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
          break
        case '4':
          this.loading=true
          this.$axios
            .post('/order/showByHotelName', {
              name: this.id
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
          break
      }
    },
    SetAddInformationVisible(){
      this.AddInformationVisible=true
    },
    Addorder(){
      var _this = this
      if (this.addorder.userid === ''||this.addorder.hotelid === ''||this.addorder.roomid === ''||this.addorder.state === null){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '关键信息不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/order/req', {
          userid: this.addorder.userid,
          hotelid: this.addorder.hotelid,
          roomid: this.addorder.roomid,
          num: this.addorder.num,
          money: this.addorder.money,
          startdate: this.addorder.startdate,
          enddate: this.addorder.enddate,
          state: this.addorder.state
        })
        .then(successResponse => {
          if (successResponse.data.code===200) {
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
              message: '添加失败！',
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
      this.$confirm('此操作将永久删除该订单，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then((res) => {
        this.$axios
          .post('/order/delete', {
            id: this.chooseOrder.id
          })
          .then(successResponse => {
            if (successResponse.data.code===200) {
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
      this.addorder.userid=this.chooseOrder.userid
      this.addorder.hotelid=this.chooseOrder.hotelid
      this.addorder.roomid=this.chooseOrder.roomid
      this.addorder.num=this.chooseOrder.num
      this.addorder.money=this.chooseOrder.money
      this.addorder.startdate=this.chooseOrder.startdate
      this.addorder.enddate=this.chooseOrder.enddate
      switch (this.chooseOrder.state){
        case '未付款':
          this.addorder.state=0
          break
        case'已付款':
          this.addorder.state=1
          break
        case '已取消':
          this.addorder.state=2
          break
      }
    },
    updateorder(){
      var _this = this
      if (this.addorder.userid === ''||this.addorder.hotelid === ''||this.addorder.roomid === ''||this.addorder.state === null){
        // alert(this.registerForm.phone)
        this.$message({
          duration: 1000,
          showClose: true,
          message: '关键信息不能为空！',
          type: 'error'
        })
        return
      }
      this.$axios
        .post('/order/update', {
          id: this.chooseOrder.id,
          userid: this.addorder.userid,
          hotelid: this.addorder.hotelid,
          roomid: this.addorder.roomid,
          num: this.addorder.num,
          money: this.addorder.money,
          startdate: this.addorder.startdate,
          enddate: this.addorder.enddate,
          state: this.addorder.state
        })
        .then(successResponse => {
          if (successResponse.data.code ===200) {
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
              message: '修改失败！',
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
        pageSize: 5, // 每页条数
      },
      options: [{
        value: '1',
        label: '用户id'
      }, {
        value: '2',
        label: '用户姓名'
      }, {
        value: '3',
        label: '酒店id'
      }, {
        value: '4',
        label: '酒店名'
      }],
      value: '1'
    }
  }
}
</script>

<style scoped>

</style>
